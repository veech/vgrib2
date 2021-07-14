/**
 * @description Returns a table map for the given table number
 * @param table Table number
 * @returns Table Map
 */
export const getTable1 = (table: number) => {
  switch (table) {
    case 2:
      return lookupTable12
    case 4:
      return lookupTable14

    default:
      throw new Error(`Table 1.${table} not defined`)
  }
}

/**
 *  Table 1.2 - Significance of Reference Time
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table1-2.shtml)
 */
const lookupTable12 = (code: number) => {
  switch (code) {
    case 0:
      return 'Analysis'
    case 1:
      return 'Start of Forecast'
    case 2:
      return 'Verifying Time of Forecast'
    case 3:
      return 'Observation Time'
    case 255:
      return 'Missing'

    default:
      throw new Error(`Table 1.2 missing code value: ${code}`)
  }
}

/**
 *  Table 1.4 - Type of Data
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table1-4.shtml)
 */
const lookupTable14 = (code: number) => {
  switch (code) {
    case 0:
      return 'Analysis Products'
    case 1:
      return 'Forecast Products'
    case 2:
      return 'Analysis and Forecast Products'
    case 3:
      return 'Control Forecast Products'
    case 4:
      return 'Perturbed Forecast Products'
    case 5:
      return 'Control and Perturbed Forecast Products'
    case 6:
      return 'Processed Satellite Observations'
    case 7:
      return 'Processed Radar Observations'
    case 8:
      return 'Event Probability'
    case 192:
      return 'Experimental Products'
    case 255:
      return 'Missing'

    default:
      throw new Error(`Table 1.2 missing code value: ${code}`)
  }
}
