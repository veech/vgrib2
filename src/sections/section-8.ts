/**
 *  End Section
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_sect8.shtml)
 */
export const parseSection8 = (section: Buffer) => {
  return {
    /** Section 8 Data */
    data: {
      /** "7777" - Coded according to the International Alphabet Number 5 */
      endEncoded: section.toString()
    }
  }
}
