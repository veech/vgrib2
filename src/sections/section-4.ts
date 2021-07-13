import { getTemplate } from '../templates'

/**
 *  Product Definition Section
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_sect4.shtml)
 */
export const parseSection4 = (section: Buffer) => {
  const productDefinitionTemplate = section.readUInt16BE(7)
  const productDefinitionValues = getTemplate(`4.${productDefinitionTemplate}`)(section)

  return {
    /** Number of GRIB section */
    sectionNumber: section.readUInt8(4),
    /** Length of GRIB section */
    length: section.readUInt32BE(0),
    /** Section 4 Data */
    data: {
      /** Number of coordinate values after template */
      coordinateValues: section.readUInt16BE(5),
      /** Product definition template number [Table 4.0](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table4-0.shtml) */
      productDefinitionTemplate,
      ...productDefinitionValues
    }
  }
}