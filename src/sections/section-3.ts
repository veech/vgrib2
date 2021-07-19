import { getTemplate3, lookupTemplate3 } from '../templates/template-3'
import { lookupTable31 } from '../tables/table-3'

export type GridDefinitionSectionValues = ReturnType<typeof parseSection3>
export type GridDefinitionSection = ReturnType<typeof lookupSection3>

/**
 *  Grid Definition Section
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_sect3.shtml)
 */
export const parseSection3 = (section: Buffer) => {
  const gridDefinitionTemplate = section.readUInt16BE(12)
  const gridDefinition = getTemplate3(gridDefinitionTemplate)(section)

  return {
    /** Number of GRIB section */
    sectionNumber: section.readUInt8(4),
    /** Name of Grib section */
    sectionName: 'Grid Definition Section',
    /** Length of GRIB section */
    length: section.readUInt32BE(0),
    /** Section 3 Contents */
    contents: {
      /** Number of data points */
      numberOfPoints: section.readUInt32BE(6),
      /** Grid definition template number [Table 3.1](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table3-1.shtml) */
      gridDefinitionTemplate,
      /** Grid definition values */
      gridDefinition
    }
  }
}

/**
 *
 * @param gds Grid Definition Section
 * @returns Grid Definition Section with corresponding string values
 */
export const lookupSection3 = (gds: GridDefinitionSectionValues) => {
  const { gridDefinitionTemplate } = gds.contents

  return {
    ...gds,
    contents: {
      ...gds.contents,
      /** Grid definition template */
      gridDefinitionTemplate: lookupTable31(gridDefinitionTemplate),
      /** Grid definition values */
      gridDefinition: lookupTemplate3(gridDefinitionTemplate)(gds.contents.gridDefinition)
    }
  }
}
