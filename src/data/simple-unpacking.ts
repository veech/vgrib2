import { DataRepresentationSection } from '../sections/section-5'

/**
 * Data Template 7.0
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_temp7-0.shtml)
 */
export const simpleUnpacking = (drs: DataRepresentationSection, data: Buffer) => {
  const nb = drs.data.numberOfBits

  const D = drs.data.decimalScaleFactor
  const R = drs.data.referenceValue
  const E = drs.data.binaryScaleFactor

  const DD = Math.pow(10, D)
  const EE = Math.pow(2, E)

  const bufferString = data.reduce((acc, value) => acc + value.toString(2).padStart(8, '0'), '')
  const chunks = bufferString.match(new RegExp(`.{1,${nb}}`, 'g'))

  if (!chunks) throw new Error('Unable to split data into chunks')

  const values = chunks.map(chunk => (R + parseInt(chunk, 2) * EE) / DD)

  return values
}
