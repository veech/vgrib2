/**
 * @description Returns a table map for the given table number
 * @param table Table number
 * @returns Table Map
 */
export const getTable0 = (table: number) => {
  switch (table) {
    case 0:
      return lookupTable00
    default:
      throw new Error(`Table 0.${table} not defined`)
  }
}

/**
 *  Table 0.0 - Discipline of Processed Data
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table0-0.shtml)
 */
const lookupTable00 = (code: number) => {
  switch (code) {
    case 0:
      return 'Meteorological Products'
    case 1:
      return 'Hydrological Products'
    case 2:
      return 'Land Surface Products'
    case 3:
      return 'Satellite Remote Sensing Products (formerly "Space Products")'
    case 4:
      return 'Space Weather Products'
    case 10:
      return 'Oceanographic Products'

    default:
      throw new Error(`Table 0.0 missing code value: ${code}`)
  }
}
