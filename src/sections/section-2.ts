import { Buffer } from 'buffer/'

export type LocalUseSectionValues = ReturnType<typeof parseSection2>
export type LocalUseSection = ReturnType<typeof parseSection2>

/**
 *  Local Use Section
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_sect2.shtml)
 */
export const parseSection2 = (section: Buffer) => {
  return {
    /** Number of GRIB section */
    sectionNumber: section.readUInt8(4),
    /** Name of Grib section */
    sectionName: 'Local Use Section',
    /** Length of GRIB section */
    length: section.readUInt32BE(0),
    /** Section 2 Contents */
    contents: { data: section.slice(5) }
  }
}
