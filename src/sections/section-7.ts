import { Buffer } from 'buffer/'

import { DataRepresentationSectionValues } from './section-5'

import { convertData } from '../data'

export type DataSectionValues = ReturnType<typeof parseSection7>
export type DataSection = ReturnType<typeof lookupSection7>

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
    /** Section 7 Contents */
    contents: { data: section.slice(5) }
  }
}

/**
 *
 * @param ds Data Section
 * @param drs Data Representation Section
 * @returns Data Section with corresponding string values
 */
export const lookupSection7 = (ds: DataSectionValues, drs: DataRepresentationSectionValues) => {
  return {
    ...ds,
    contents: {
      data: convertData(drs, ds.contents.data)
    }
  }
}
