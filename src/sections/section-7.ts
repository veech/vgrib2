import { DataRepresentationSection } from './section-5'

import { convertData } from '../data'

export type DataSection = ReturnType<typeof parseSection7>

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

/**
 *
 * @param ds Data Section
 * @param drs Data Representation Section
 * @returns Data Section with corresponding string values
 */
export const lookupSection7 = (ds: DataSection, drs: DataRepresentationSection) => {
  return {
    ...ds,
    data: {
      data: convertData(drs, ds.data.data)
    }
  }
}
