/**
 *  Indicator Section
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_sect0.shtml)
 */
export const parseSection0 = (section: Buffer) => {
  return {
    /** Number of GRIB section */
    sectionNumber: 0,
    /** Length of GRIB section (Always 16 for Section 0)*/
    length: 16,
    /** Section 0 Data */
    data: {
      /** Discipline [Table 0.0](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table0-0.shtml) */
      discipline: section.readUInt8(6),
      /** Edition number - 2 for GRIB2 */
      gribEdition: section.readUInt8(7),
      /** Total length of GRIB message in octets (All sections) */
      gribLength: Number(section.readBigUInt64BE(8))
    }
  }
}
