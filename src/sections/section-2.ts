export type LocalUseSectionValues = ReturnType<typeof parseSection2>
export type LocalUseSection = ReturnType<typeof parseSection2>

/**
 *  Local Use Section
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_sect2.shtml)
 */
export const parseSection2 = (_section: Buffer) => {
  throw new Error('Section 2 is not supported')
}
