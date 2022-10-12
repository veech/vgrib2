import { Buffer } from 'buffer/'

import { DataRepresentationSectionValues } from '../sections/section-5'

/**
 * Data Template 7.0
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_temp7-0.shtml)
 */
export const simpleUnpacking = (drs: DataRepresentationSectionValues, data: Buffer) => {
  const { dataRepresentation } = drs.contents

  const nb = dataRepresentation.numberOfBits

  const D = dataRepresentation.decimalScaleFactor
  const R = dataRepresentation.referenceValue
  const E = dataRepresentation.binaryScaleFactor

  const DD = Math.pow(10, D)
  const EE = Math.pow(2, E)

  const bufferString = data.reduce((acc, value) => acc + value.toString(2).padStart(8, '0'), '')
  const chunks = bufferString.match(new RegExp(`.{${nb}}`, 'g'))

  if (!chunks) throw new Error('Unable to split data into chunks')

  const values = chunks.map(chunk => (R + parseInt(chunk, 2) * EE) / DD)

  return values
}
