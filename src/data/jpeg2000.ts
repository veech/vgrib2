import { Buffer } from 'buffer/'
import { DataRepresentationSectionValues } from '../sections/section-5'
import { JpxImage } from 'jpeg2000'
import { BitMapSectionValues } from '../sections'

/**
 * Data Template 7.0
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_temp7-40.shtml)
 */
export const jpeg2000Unpacking = (drs: DataRepresentationSectionValues, bms: BitMapSectionValues, data: Buffer) => {
  const jpx = new JpxImage()
  jpx.parse(data)

  if (jpx.componentsCount !== 1) throw new Error('JPEG Decoder: Only single component is supported')
  if (jpx.tiles.length !== 1) throw new Error('JPEG Decoder: Only single tile is supported')
  if (jpx.tiles[0].height !== 1) throw new Error('JPEG Decoder: Only single row (1xN) is supported')

  const { dataRepresentation } = drs.contents

  const D = dataRepresentation.decimalScaleFactor
  const R = dataRepresentation.referenceValue
  const E = dataRepresentation.binaryScaleFactor

  const DD = Math.pow(10, D)
  const EE = Math.pow(2, E)

  const result: (number | null)[] = []

  // A bit map applies to this product
  // [See more](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table6-0.shtml)
  if (bms.contents.bitMapIndicator === 0) {
    if (!bms.contents.bitMap) {
      throw new Error('Bit map is not defined')
    }

    let k = 0;
    for (const byte of bms.contents.bitMap) {
      // Apply bit map to the data.
      // Length of data values is often smaller than the bit map itself. Bitmap is used to 
      // indicate which data values are present, 1 bit meaning is present, 0 bit meaning is missing.
      // [Read more](https://confluence.ecmwf.int/display/UDOC/What+is+the+GRIB+bitmap+-+ecCodes+GRIB+FAQ)
      for (let i = 0; i < 8; i++) {
        if (byte & (1 << i)) {
          result.push((R + jpx.tiles[0].items[k++] * EE) / DD)
        } else {
          result.push(null)
        }
      }
    }
  } else {
    // Do not use `.map` on Uint8Array, as it clamps the values to 0-255
    for (const byte of jpx.tiles[0].items) result.push((R + byte * EE) / DD)
  }

  return result
}
