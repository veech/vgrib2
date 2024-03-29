import { Buffer } from 'buffer/'

import { lookupTable40 } from '../tables/table-4'
import { getTemplate4, lookupTemplate4 } from '../templates/template-4'

import { IndicatorSectionValues } from './section-0'
import { IdentificationSectionValues } from './section-1'

export type ProductDefinitionSectionValues = ReturnType<typeof parseSection4>
export type ProductDefinitionSection = ReturnType<typeof lookupSection4>

/**
 *  Product Definition Section
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_sect4.shtml)
 */
export const parseSection4 = (section: Buffer) => {
  const productDefinitionTemplate = section.readUInt16BE(7)
  const productDefinition = getTemplate4(productDefinitionTemplate)(section)

  return {
    /** Number of GRIB section */
    sectionNumber: section.readUInt8(4),
    /** Name of Grib section */
    sectionName: 'Product Definition Section',
    /** Length of GRIB section */
    length: section.readUInt32BE(0),
    /** Section 4 Contents */
    contents: {
      /** Number of coordinate values after template */
      coordinateValues: section.readUInt16BE(5),
      /** Product definition template number [Table 4.0](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table4-0.shtml) */
      productDefinitionTemplate,
      /** Product definition */
      productDefinition
    }
  }
}

/**
 *
 * @param pds Product Definition Section
 * @param ins Indicator Section
 * @returns Product Definition Section with corresponding string values
 */
export const lookupSection4 = (pds: ProductDefinitionSectionValues, ins: IndicatorSectionValues, ids: IdentificationSectionValues) => {
  const { productDefinitionTemplate, productDefinition } = pds.contents

  const { discipline } = ins.contents
  const { refTime } = ids.contents

  return {
    ...pds,
    contents: {
      ...pds.contents,
      /** Product definition template */
      productDefinitionTemplate: lookupTable40(productDefinitionTemplate),
      /** Product definition */
      productDefinition: lookupTemplate4(productDefinitionTemplate)(discipline, refTime, productDefinition as any)
    }
  }
}
