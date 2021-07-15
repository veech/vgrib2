/**
 *  Table 3.1 - Grid Definition Template Number
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table3-1.shtml)
 */
export const lookupTable31 = (code: number) => {
  switch (code) {
    case 0:
      return 'Latitude/Longitude (Also called Equidistant Cylindrical or Plate Caree)'
    case 1:
      return 'Rotated Latitude/Longitude'
    case 2:
      return 'Stretched Latitude/Longitude'
    case 3:
      return 'Rotated and Stretched Latitude/Longitude'
    case 4:
      return 'Variable Resolution Latitude/longitude'
    case 5:
      return 'Variable Resolution Rotated Latitude/longitude'
    case 10:
      return 'Mercator'
    case 11:
      return 'Reserved'
    case 12:
      return 'Transverse Mercator'
    case 13:
      return 'Mercator with modelling subdomains definition'
    case 20:
      return 'Polar Stereographic Projection (Can be North or South)'
    case 23:
      return 'Polar Stereographic with modelling subdomains definition'
    case 30:
      return 'Lambert Conformal (Can be Secant, Tangent, Conical, or Bipolar)'
    case 31:
      return 'Albers Equal Area'
    case 32:
      return 'Reserved'
    case 33:
      return 'Lambert conformal with modelling subdomains definition'
    case 40:
      return 'Gaussian Latitude/Longitude'
    case 41:
      return 'Rotated Gaussian Latitude/Longitude'
    case 42:
      return 'Stretched Gaussian Latitude/Longitude'
    case 43:
      return 'Rotated and Stretched Gaussian Latitude/Longitude'
    case 50:
      return 'Spherical Harmonic Coefficients'
    case 51:
      return 'Rotated Spherical Harmonic Coefficients'
    case 52:
      return 'Stretched Spherical Harmonic Coefficients'
    case 53:
      return 'Rotated and Stretched Spherical Harmonic Coefficients'
    case 60:
      return 'Cubed-Sphere Gnomonic  Validation'
    case 61:
      return 'Spectral Mercator with modelling subdomains definition'
    case 62:
      return 'Spectral Polar Stereographic with modelling subdomains definition'
    case 63:
      return 'Spectral Lambert conformal with modelling subdomains definition'
    case 90:
      return 'Space View Perspective or Orthographic'
    case 100:
      return 'Triangular Grid Based on an Icosahedron'
    case 101:
      return 'General Unstructured Grid'
    case 110:
      return 'Equatorial Azimuthal Equidistant Projection'
    case 120:
      return 'Azimuth-Range Projection'
    case 140:
      return 'Lambert Azimuthal Equal Area Projection'
    case 204:
      return 'Curvilinear Orthogonal Grids'
    case 1000:
      return 'Cross Section Grid with Points Equally Spaced on the Horizontal'
    case 1100:
      return 'Hovmoller Diagram with Points Equally Spaced on the Horizontal'
    case 1200:
      return 'Time Section Grid'
    case 32768:
      return 'Rotated Latitude/Longitude(Arakawa Staggered E-Grid)'
    case 32769:
      return 'Rotated Latitude/Longitude(Arakawa Non-E Staggered Grid)'
    case 65535:
      return 'Missing'

    default:
      throw new Error(`Table 3.1 missing code value: ${code}`)
  }
}

/**
 *  Table 3.2 - Grid Definition Template Number
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table3-1.shtml)
 */
export const lookupTable32 = (code: number) => {
  switch (code) {
    case 0:
      return 'Earth assumed spherical with radius = 6,367,470.0 m'
    case 1:
      return 'Earth assumed spherical with radius specified (in m) by data producer'
    case 2:
      return 'Earth assumed oblate spheriod with size as determined by IAU in 1965 (major axis = 6,378,160.0 m, minor axis = 6,356,775.0 m, f = 1/297.0)'
    case 3:
      return 'Earth assumed oblate spheriod with major and minor axes specified (in km) by data producer'
    case 4:
      return 'Earth assumed oblate spheriod as defined in IAG-GRS80 model (major axis = 6,378,137.0 m, minor axis = 6,356,752.314 m, f = 1/298.257222101)'
    case 5:
      return 'Earth assumed represented by WGS84 (as used by ICAO since 1998) (Uses IAG-GRS80 as a basis)'
    case 6:
      return 'Earth assumed spherical with radius = 6,371,229.0 m'
    case 7:
      return 'Earth assumed oblate spheroid with major and minor axes specified (in m) by data producer'
    case 8:
      return 'Earth model assumed spherical with radius 6,371,200 m, but the horizontal datum of the resulting Latitude/Longitude field is the WGS84 reference frame'
    case 9:
      return 'Earth represented by the OSGB 1936 Datum, using the Airy_1830 Spheroid, the Greenwich meridian as 0 Longitude, the Newlyn datum as mean sea level, 0 height.'
    case 255:
      return 'Missing'

    default:
      throw new Error(`Table 3.2 missing code value: ${code}`)
  }
}
