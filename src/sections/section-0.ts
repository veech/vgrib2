import { getTable0 } from '../tables/table-0'

export type IndicatorSection = ReturnType<typeof parseSection0>

/**
 *  Indicator Section
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_sect0.shtml)
 */
export const parseSection0 = (section: Buffer) => {
  return {
    /** Number of GRIB section */
    sectionNumber: 0,
    /** Name of Grib section */
    sectionName: 'Indicator Section',
    /** Length of GRIB section (Always 16 for Section 0)*/
    length: 16,
    /** Section 0 Data */
    data: {
      /** GRIB string encoded */
      gribEncoded: section.slice(0, 4).toString(),
      /** Discipline [Table 0.0](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table0-0.shtml) */
      discipline: section.readUInt8(6),
      /** Edition number - 2 for GRIB2 */
      gribEdition: section.readUInt8(7),
      /** Total length of GRIB message in octets (All sections) */
      gribLength: Number(section.readBigUInt64BE(8))
    }
  }
}

/**
 *
 * @param section Indictor Section
 * @returns Indicator Section with corresponding string values
 */
export const lookupSection0 = (section: IndicatorSection) => {
  return {
    ...section,
    data: {
      ...section.data,
      /** Discipline */
      discipline: getTable0(0)(section.data.discipline)
    }
  }
}
