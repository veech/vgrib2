/**
 * Grid Definition Template 3.0
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_temp3-0.shtml)
 */
export const template30 = (section: Buffer) => {
  const basicAngle = section.readUInt32BE(38)
  const subdivisions = section.readUInt32BE(42)

  const ratio = basicAngle === 0 ? 1e-6 : basicAngle / subdivisions

  return {
    /** Shape of Earth [Table 3.2](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table3-2.shtml) */
    shape: section.readUInt8(14),
    /** Number of points along a parallel */
    nx: section.readUInt32BE(30),
    /** Number of points along a meridian */
    ny: section.readUInt32BE(34),
    /** Basic angle of the initial production domain */
    basicAngle,
    /** Subdivisions of basic angle used to define extreme longitudes and latitudes, and direction increments */
    subdivisions,
    /** Latitude of first grid point */
    la1: section.readInt32BE(46) * ratio,
    /** Longitude of first grid point */
    lo1: section.readInt32BE(50) * ratio,
    /** Resolution and component flags [Table 3.3](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table3-3.shtml) */
    resolution: section.readUInt8(54),
    /** Latitude of last grid point */
    la2: section.readInt32BE(55) * ratio,
    /** Longitude of last grid point */
    lo2: section.readInt32BE(59) * ratio,
    /** i direction increment */
    dx: section.readInt32BE(63) * ratio,
    /** j direction increment */
    dy: section.readInt32BE(67) * ratio,
    /** Scanning mode [Table 3.4](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table3-4.shtml) */
    scanMode: section.readUInt8(71),
    /** Grid Units */
    gridUnits: 'degrees'
  }
}