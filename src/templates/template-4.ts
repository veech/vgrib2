/**
 * Product Definition Template 4.2
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_temp4-2.shtml)
 */
export const template42 = (section: Buffer) => {
  return {
    /** Paramater category (see Code [Table 4.1](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table4-1.shtml)) */
    parameterCategory: section.readUInt8(9),
    /** Paramater number (see Code [Table 4.2](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table4-2.shtml)) */
    parameterNumber: section.readUInt8(10),
    /** Type of generating process (see Code [Table 4.3](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table4-3.shtml)) */
    genProcessType: section.readUInt8(11),
    /** Background generating process identifier (defined by originating centre) */
    backgroundGenProcess: section.readUInt8(12),
    /** Forecast generating process identified (see Code [ON388 Table A](https://www.nco.ncep.noaa.gov/pmb/docs/on388/tablea.html)) */
    forecastGenProcess: section.readUInt8(13),
    /** Hours after reference time data cutoff (see Note) */
    hoursAfterRefTime: section.readUInt16BE(14),
    /** Minutes after reference time data cutoff */
    minAfterRefTime: section.readUInt8(16),
    /** Indicator of unit of time range (see Code [Table 4.4](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table4-4.shtml)) */
    unitOfTimeRangeIndicator: section.readUInt8(17),
    /** Forecast time */
    forecastTime: section.readUInt32BE(18),
    /** Type of first fixed surface (see Code (Table 4.5)(https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table4-5.shtml)) */
    surface1Type: section.readUInt8(22),
    /** Scale factor of first fixed surface */
    surface1Scale: section.readUInt8(23),
    /** Scaled value of first fixed surface */
    surface1Value: section.readUInt32BE(24),
    /** Type of second fixed surface (see Code (Table 4.5)(https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table4-5.shtml)) */
    surface2Type: section.readUInt8(28),
    /** Scale factor of second fixed surface */
    surface2Scale: section.readUInt8(29),
    /** Scaled value of second fixed surface */
    surface2Value: section.readUInt32BE(30),
    /** Derived forecast (see Code [Table 4.7](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table4-7.shtml)) */
    derivedForecast: section.readUInt8(34),
    /** Number of forecasts in the ensemble */
    numberOfForecast: section.readUInt8(35)
  }
}
