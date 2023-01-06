import { Buffer } from 'buffer/'
export type BitMapSectionValues = ReturnType<typeof parseSection6>
export type BitMapSection = ReturnType<typeof parseSection6>

/**
 * Bit-Map Section
 *
 * Consult with [this page](https://confluence.ecmwf.int/display/UDOC/What+is+the+GRIB+bitmap+-+ecCodes+GRIB+FAQ) to understand their purpose. 
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_sect6.shtml).
 */
export const parseSection6 = (section: Buffer) => {
  const bitMapIndicator = section.readUInt8(5)

  if (![0, 255].includes(bitMapIndicator)) {
    throw new Error('BitMap Indicator not supported: ' + String(bitMapIndicator))
  }
  
  return {
    /** Number of GRIB section */
    sectionNumber: section.readUInt8(4),
    /** Name of Grib section */
    sectionName: 'Bit-Map Section',
    /** Length of GRIB section */
    length: section.readUInt32BE(0),
    /** Section 6 Contents */
    contents: {
      /** Bit-map indicator (See [Table 6.0](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table6-0.shtml)) */
      bitMapIndicator,
      // Bit-map
      bitMap: bitMapIndicator === 0 ? section.slice(6) : null
    }
  }
}
