export type EndSectionValues = ReturnType<typeof parseSection8>
export type EndSection = ReturnType<typeof parseSection8>

/**
 *  End Section
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_sect8.shtml)
 */
export const parseSection8 = (section: Buffer) => {
  return {
    /** Name of Grib section */
    sectionName: 'End Section',
    /** Section 8 Contents */
    contents: {
      /** "7777" - Coded according to the International Alphabet Number 5 */
      endEncoded: section.toString()
    }
  }
}
