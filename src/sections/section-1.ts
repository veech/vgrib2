import { Buffer } from 'buffer/'

import { lookupTable0, lookupTableC } from '../tables/table'
import { lookupTable12, lookupTable14 } from '../tables/table-1'

export type IdentificationSectionValues = ReturnType<typeof parseSection1>
export type IdentificationSection = ReturnType<typeof lookupSection1>

/**
 *  Identification Section
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_sect1.shtml)
 */
export const parseSection1 = (section: Buffer) => {
  // Ref Time values
  const year = section.readUInt16BE(12)
  const month = section.readUInt8(14)
  const day = section.readUInt8(15)
  const hours = section.readUInt8(16)
  const minutes = section.readUInt8(17)
  const seconds = section.readUInt8(18)

  const refTime = new Date(year, month - 1, day)
  refTime.setUTCHours(hours)
  refTime.setUTCMinutes(minutes)
  refTime.setUTCSeconds(seconds)

  return {
    /** Number of GRIB section */
    sectionNumber: section.readUInt8(4),
    /** Name of Grib section */
    sectionName: 'Identification Section',
    /** Length of GRIB section */
    length: section.readUInt32BE(0),
    /** Section 1 Contents */
    contents: {
      /** Identification of originating/generating center [Table 0](https://www.nco.ncep.noaa.gov/pmb/docs/on388/table0.html) */
      center: section.readUInt16BE(5),
      /** Identification of originating/generating subcenter [Table C](https://www.nco.ncep.noaa.gov/pmb/docs/on388/tablec.html) */
      subcenter: section.readUInt16BE(7),
      /** GRIB master tables version number [Table 1.0](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table1-0.shtml) */
      gribMasterTablesVersion: section.readUInt8(9),
      /** Version number of GRIB local tables used to augment Master Tables [Table 1.1](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table1-1.shtml) */
      gribLocalTablesVersion: section.readUInt8(10),
      /** Significance of reference time [Table 1.2](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table1-2.shtml) */
      significanceOfRT: section.readUInt8(11),
      /** Reference Time */
      refTime,
      /** Type of processed data in this GRIB message [Table 1.4](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table1-4.shtml) */
      typeOfProcessedData: section.readUInt8(20)
    }
  }
}

/**
 *
 * @param ids Identification Section
 * @returns Identification Section with corresponding string values
 */
export const lookupSection1 = (ids: IdentificationSectionValues) => {
  return {
    ...ids,
    contents: {
      ...ids.contents,
      /** Identification of originating/generating center */
      center: lookupTable0(ids.contents.center),
      /** Identification of originating/generating subcenter */
      subcenter: lookupTableC(ids.contents.subcenter),
      /** Significance of reference time */
      significanceOfRT: lookupTable12(ids.contents.subcenter),
      /** Type of processed data in this GRIB message */
      typeOfProcessedData: lookupTable14(ids.contents.typeOfProcessedData)
    }
  }
}
