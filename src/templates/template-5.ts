/**
 * Data Representation Template 5.0
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_temp5-0.shtml)
 */
export const template50 = (section: Buffer) => {
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
