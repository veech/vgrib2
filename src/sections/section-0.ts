/**
 *  Indicator Section
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_sect0.shtml)
 */
export const parseSection0 = (section: Buffer) => ({
  discipline: section.readUInt8(6),
  gribEdition: section.readUInt8(7),
  gribLength: Number(section.readBigUInt64BE(8))
})
