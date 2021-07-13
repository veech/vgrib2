/**
 *  Data Section
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_sect7.shtml)
 */
export const parseSection7 = (section: Buffer) => {
  return {
    /** Number of GRIB section */
    sectionNumber: section.readUInt8(4),
    /** Name of Grib section */
    sectionName: 'Data Section',
    /** Length of GRIB section */
    length: section.readUInt32BE(0),
    /** Section 7 Data */
    data: { data: section.slice(5) }
  }
}
