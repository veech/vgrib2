import { Buffer } from 'buffer/'

import { lookupTable51, lookupTable540 } from '../tables/table-5'

/**
 * @description Returns a template generator for the given template number
 * @param template Template number
 * @returns Template generator
 */
export const getTemplate5 = (template: number): typeof template50 | typeof template540 => {
  switch (template) {
    case 40:
      return template540    
    case 0:
      return template50
    
    default:
      throw new Error(`Template 5.${template} not defined`)
  }
}

/**
 * @description Returns a template map for the given template number
 * @param table Template number
 * @returns Template Map
 */
export const lookupTemplate5 = (template: number) => {
  switch (template) {
    case 0:
      return lookupTemplate50
    case 40:
      return lookupTemplate540
    default:
      throw new Error(`Template 5.${template} lookup table not defined`)
  }
}

/**
 * Data Representation Template 5.0
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_temp5-0.shtml)
 */
const template50 = (section: Buffer) => {
  return {
    /** Reference value (R) (IEEE 32-bit floating-point value) */
    referenceValue: section.readFloatBE(11),
    /** Binary scale factor (E) */
    binaryScaleFactor: section.readInt16BE(15),
    /** Decimal scale factor (D) */
    decimalScaleFactor: section.readInt16BE(17),
    /** Number of bits used for each packed value for simple packing, or for each group reference value for complex packing or spatial differencing */
    numberOfBits: section.readUInt8(19),
    /** Type of original field values (see Code [Table 5.1](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table5-1.shtml)) */
    originalType: section.readUInt8(20)
  }
}

const lookupTemplate50 = (templateValues: ReturnType<typeof template50>) => {
  return {
    ...templateValues,
    /** Type of original field values */
    originalType: lookupTable51(templateValues.originalType)
  }
}

/**
 * Data Representation Template 5.40
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_temp5-40.shtml)
 */
const template540 = (section: Buffer) => {
  return {
    /** Reference value (R) (IEEE 32-bit floating-point value) */
    referenceValue: section.readFloatBE(11),
    /** Binary scale factor (E) */
    binaryScaleFactor: section.readInt16BE(15),
    /** Decimal scale factor (D) */
    decimalScaleFactor: section.readInt16BE(17),
    /** Number of bits used for each packed value for simple packing, or for each group reference value for complex packing or spatial differencing */
    numberOfBits: section.readUInt8(19),
    /** Type of original field values (see Code [Table 5.1](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table5-1.shtml)) */
    originalType: section.readUInt8(20),
    // Type of Compression used. (see [Code Table 5.40](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table5-40.shtml))
    compressionType: section.readUInt8(21),
    // Target compression ratio, M:1 (with respect to the bit-depth specified in octet 20),
    // when octet 22 indicates Lossy Compression. Otherwise, set to missing.
    compressionRatio: section.readUInt8(22)
  }
}

const lookupTemplate540 = (templateValues: ReturnType<typeof template540>) => {
  return {
    ...lookupTemplate50(templateValues),
    // Type of Compression used
    compressionType: lookupTable540(templateValues.compressionType)
  }
}
