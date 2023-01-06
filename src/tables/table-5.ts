/**
 *  Table 5.0 - CATEGORY BY PRODUCT DISCIPLINE
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table5-0.shtml)
 */
export const lookupTable50 = (code: number) => {
  switch (code) {
    case 0:
      return 'Grid Point Data - Simple Packing'
    case 1:
      return 'Matrix Value at Grid Point - Simple Packing'
    case 2:
      return 'Grid Point Data - Complex Packing'
    case 3:
      return 'Grid Point Data - Complex Packing and Spatial Differencing'
    case 4:
      return 'Grid Point Data - IEEE Floating Point Data'
    case 40:
      return 'Grid Point Data - JPEG2000 Compression'
    case 41:
      return 'Grid Point Data - PNG Compression'
    case 50:
      return 'Spectral Data - Simple Packing'
    case 51:
      return 'Spectral Data - Complex Packing'
    case 61:
      return 'Grid Point Data - Simple Packing With Logarithm Pre-processing'
    case 200:
      return 'Run Length Packing With Level Values'
    case 65535:
      return 'Missing'

    default:
      throw new Error(`Table 5.0 missing code value ${code}`)
  }
}

/**
 *  Table 5.1 - TYPE OF ORIGINAL FIELD VALUES
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table5-1.shtml)
 */
export const lookupTable51 = (code: number) => {
  switch (code) {
    case 0:
      return 'Floating Point'
    case 1:
      return 'Integer'
    case 255:
      return 'Missing'

    default:
      throw new Error(`Table 5.1 missing code value ${code}`)
  }
}

/**
 * Table 5.40 - TYPE OF COMPRESSION USED
 * [Read more](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table5-40.shtml)
 */
export const lookupTable540 = (code: number) => {
  switch (code) {
    case 0:
      return 'Lossless'
    case 1:
      return 'Lossy'
    // Range 2-254 is Reserved
    case 255:
      return 'Missing'

    default:
      throw new Error(`Table 5.40 missing code value ${code}`)
  }
}
