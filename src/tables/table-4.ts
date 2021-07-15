/**
 *  Table 4.0 - PRODUCT DEFINITION TEMPLATE NUMBER
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table4-0.shtml)
 */
export const lookupTable40 = (code: number) => {
  switch (code) {
    case 0:
      return 'Analysis or forecast at a horizontal level or in a horizontal layer at a point in time.'
    case 1:
      return 'Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer at a point in time.'
    case 2:
      return 'Derived forecasts based on all ensemble members at a horizontal level or in a horizontal layer at a point in time.'
    case 3:
      return 'Derived forecasts based on a cluster of ensemble members over a rectangular area at a horizontal level or in a horizontal layer at a point in time.'
    case 4:
      return 'Derived forecasts based on a cluster of ensemble members over a circular area at a horizontal level or in a horizontal layer at a point in time.'
    case 5:
      return 'Probability forecasts at a horizontal level or in a horizontal layer at a point in time.'
    case 6:
      return 'Percentile forecasts at a horizontal level or in a horizontal layer at a point in time.'
    case 7:
      return 'Analysis or forecast error at a horizontal level or in a horizontal layer at a point in time.'
    case 8:
      return 'Average, accumulation, extreme values or other statistically processed values at a horizontal level or in a horizontal layer in a continuous or non-continuous time interval.'
    case 9:
      return 'Probability forecasts at a horizontal level or in a horizontal layer in a continuous or non-continuous time interval.'
    case 10:
      return 'Percentile forecasts at a horizontal level or in a horizontal layer in a continuous or non-continuous time interval.'
    case 11:
      return 'Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer, in a continuous or non-continuous time interval.'
    case 12:
      return 'Derived forecasts based on all ensemble members at a horizontal level or in a horizontal layer, in a continuous or non-continuous time interval.'
    case 13:
      return 'Derived forecasts based on a cluster of ensemble members over a rectangular area at a horizontal level or in a horizontal layer, in a continuous or non-continuous time interval.'
    case 14:
      return 'Derived forecasts based on a cluster of ensemble members over a circular area at a horizontal level or in a horizontal layer, in a continuous or non-continuous time interval.'
    case 15:
      return 'Average, accumulation, extreme values or other statistically-processed values over a spatial area at a horizontal level or in a horizontal layer at a point in time.'
    case 20:
      return 'Radar product'
    case 30:
      return 'Satellite product   NOTE: This template is deprecated. Template 4.31 should be used instead.'
    case 31:
      return 'Satellite product'
    case 32:
      return 'Analysis or forecast at a horizontal level or in a horizontal layer at a point in time for simulate (synthetic) satellite data'
    case 33:
      return 'Individual Ensemble Forecast, control and perturbed, at a horizontal level or in a horizontal layer at a point in time for simulated (synthetic) satellite data'
    case 34:
      return 'Individual Ensemble Forecast, control and perturbed, at a horizontal level or in a horizontal layer, in a continuous or non-continuous interval for simulated (synthetic) satellite data'
    case 35:
      return 'Satellite product with or without associated quality values'
    case 40:
      return 'Analysis or forecast at a horizontal level or in a horizontal layer at a point in time for atmospheric chemical constituents.'
    case 41:
      return 'Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer at a point in time for atmospheric chemical constituents.'
    case 42:
      return 'Average, accumulation, and/or extreme values or other statistically processed values at a horizontal level or in a horizontal layer in a continuous or non-continuous time interval for atmospheric chemical constituents.'
    case 43:
      return 'Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer, in a continuous or non-continuous time interval for atmospheric chemical constituents.'
    case 44:
      return 'Analysis or forecast at a horizontal level or in a horizontal layer at a point in time for aerosol.'
    case 45:
      return 'Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer, in a continuous or non-continuous time interval for aerosol.'
    case 46:
      return 'Average, accumulation, and/or extreme values or other statistically processed values at a horizontal level or in a horizontal layer in a continuous or non-continuous time interval for aerosol.'
    case 47:
      return 'Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer, in a continuous or non-continuous time interval for aerosol.'
    case 48:
      return 'Analysis or forecast at a horizontal level or in a horizontal layer at a point in time for aerosol.'
    case 49:
      return 'Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer at a point in time for optical properties of aerosol.'
    case 51:
      return 'Categorical forecast at a horizontal level or in a horizontal layer at a point in time.'
    case 53:
      return 'Partitioned names at a horizontal level or horizontal layer at a point in time.'
    case 54:
      return 'Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer at a point in time for partitioned names.'
    case 55:
      return 'Spatio-temporal changing tiles at a horizontal level or horizontal layer at a point in time'
    case 56:
      return 'Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer at a point in time for spatio-temporal changing tile names.'
    case 57:
      return 'Analysis or forecast at a horizontal level or in a horizontal layer at a point in time for atmospheric chemical constituents based on a distribution function'
    case 58:
      return 'Individual Ensemble Forecast, Control and Perturbed, at a horizontal level or in a horizontal layer at a point in time interval for Atmospheric Chemical Constituents based on a distribution function'
    case 59:
      return 'Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer at a point in time for spatio-temporal changing tile names (corrected version of template 4.56 - See Template 4.59)'
    case 60:
      return 'Individual Ensemble Reforecast, control and perturbed, at a horizontal level or in a horizontal layer at a point in time.'
    case 61:
      return 'Individual Ensemble Reforecast, control and perturbed, at a horizontal level or in a horizontal layer, in a continuous or non-continuous time interval'
    case 62:
      return 'Average, Accumulation and/or Extreme values or other Statistically-processed values at a horizontal level or in a horizontal layer in a continuous or non-continuous time interval for spatio-temporal changing tiles at a horizontal level or horizontal layer at a point in time'
    case 63:
      return 'Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer in a continuous or non-continuous time interval for spatio-temporal changing tiles'
    case 67:
      return 'Average, accumulation and/or extreme values or other statistically processed values at a horizontal level or in a horizontal layer in a continuous or non-continuous time interval for atmospheric chemical constituents based on a distribution function'
    case 68:
      return 'Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer in a continuous or non-continuous time interval for atmospheric chemical constituents based on a distribution function.'
    case 70:
      return 'Post-processing analysis or forecast at a horizontal level or in a horizontal layer at a point in time.'
    case 71:
      return 'Post-processing individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer at a point in time.'
    case 72:
      return 'Post-processing average, accumulation, extreme values or other statistically processed values at a horizontal level or in a horizontal layer in a continuous or non-continuous time interval.'
    case 73:
      return 'Post-processing individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer, in a continuous or non-continuous time interval.'
    case 91:
      return 'Categorical forecast at a horizontal level or in a horizontal layer in a continuous or non-continuous time interval.'
    case 254:
      return 'CCITT IA5 character string'
    case 1000:
      return 'Cross-section of analysis and forecast at a point in time.'
    case 1001:
      return 'Cross-section of averaged or otherwise statistically processed analysis or forecast over a range of time.'
    case 1002:
      return 'Cross-section of analysis and forecast, averaged or otherwise statistically-processed over latitude or longitude.'
    case 1100:
      return 'Hovmoller-type grid with no averaging or other statistical processing'
    case 1101:
      return 'Hovmoller-type grid with averaging or other statistical processing'
    case 65535:
      return 'Missing'

    default:
      throw new Error(`Table 4.0 missing code value: ${code}`)
  }
}

/**
 *  Table 4.1 - name CATEGORY BY PRODUCT DISCIPLINE
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table4-1.shtml)
 */
export const lookupTable41 = (discipline: number, code: number) => {
  switch (discipline) {
    case 0:
      switch (code) {
        case 0:
          return 'Temperature'
        case 1:
          return 'Moisture'
        case 2:
          return 'Momentum'
        case 3:
          return 'Mass'
        case 4:
          return 'Short-wave radiation'
        case 5:
          return 'Long-wave radiation'
        case 6:
          return 'Cloud'
        case 7:
          return 'Thermodynamic Stability indicies'
        case 8:
          return 'Kinematic Stability indicies'
        case 9:
          return 'Temperature Probabilities*'
        case 10:
          return 'Moisture Probabilities*'
        case 11:
          return 'Momentum Probabilities*'
        case 12:
          return 'Mass Probabilities*'
        case 13:
          return 'Aerosols'
        case 14:
          return 'Trace gases (e.g. Ozone, CO2)'
        case 15:
          return 'Radar'
        case 16:
          return 'Forecast Radar Imagery'
        case 17:
          return 'Electrodynamics'
        case 18:
          return 'Nuclear/radiology'
        case 19:
          return 'Physical atmospheric properties'
        case 20:
          return 'Atmospheric chemical Constituents'
        case 190:
          return 'CCITT IA5 string'
        case 191:
          return 'Miscellaneous'
        case 192:
          return 'Covariance'
        case 255:
          return 'Missing'

        default:
          throw new Error(`Table 4.1 with discipline ${discipline} missing code value ${code}`)
      }

    default:
      throw new Error(`Table 4.1 missing discipline value: ${code}`)
  }
}

/**
 *  Table 4.2 - name NUMBER BY PRODUCT DISCIPLINE AND name CATEGORY
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table4-2.shtml)
 */
export const lookupTable42 = (discipline: number, category: number, code: number) => {
  const noDisciplineError = new Error(`Table 4.2 missing discipline value: ${code}`)
  const noCategoryError = new Error(`Table 4.2 with discipline ${discipline} missing category value ${category}`)
  const noCodeError = new Error(`Table 4.2 with discipline ${discipline} and category value ${category} missing code value ${code}`)

  switch (discipline) {
    // Discipline 0
    case 0:
      switch (category) {
        // Category 0
        case 0:
          switch (code) {
            case 0:
              return { name: 'Temperature', units: 'K', abbrev: 'TMP' }
            case 1:
              return { name: 'Virtual Temperature', units: 'K', abbrev: 'VTMP' }
            case 2:
              return { name: 'Potential Temperature', units: 'K', abbrev: 'POT' }
            case 3:
              return { name: 'Pseudo-Adiabatic Potential Temperature (or Equivalent Potential Temperature)', units: 'K', abbrev: 'EPOT' }
            case 4:
              return { name: 'Maximum Temperature*', units: 'K', abbrev: 'TMAX' }
            case 5:
              return { name: 'Minimum Temperature*', units: 'K', abbrev: 'TMIN' }
            case 6:
              return { name: 'Dew Point Temperature', units: 'K', abbrev: 'DPT' }
            case 7:
              return { name: 'Dew Point Depression (or Deficit)', units: 'K', abbrev: 'DEPR' }
            case 8:
              return { name: 'Lapse Rate', units: 'K m-1', abbrev: 'LAPR' }
            case 9:
              return { name: 'Temperature Anomaly', units: 'K', abbrev: 'TMPA' }
            case 10:
              return { name: 'Latent Heat Net Flux', units: 'W m-2', abbrev: 'LHTFL' }
            case 11:
              return { name: 'Sensible Heat Net Flux', units: 'W m-2', abbrev: 'SHTFL' }
            case 12:
              return { name: 'Heat Index', units: 'K', abbrev: 'HEATX' }
            case 13:
              return { name: 'Wind Chill Factor', units: 'K', abbrev: 'WCF' }
            case 14:
              return { name: 'Minimum Dew Point Depression*', units: 'K', abbrev: 'MINDPD' }
            case 15:
              return { name: 'Virtual Potential Temperature', units: 'K', abbrev: 'VPTMP' }
            case 16:
              return { name: 'Snow Phase Change Heat Flux', units: 'W m-2', abbrev: 'SNOHF' }
            case 17:
              return { name: 'Skin Temperature', units: 'K', abbrev: 'SKINT' }
            case 18:
              return { name: 'Snow Temperature (top of snow)', units: 'K', abbrev: 'SNOT' }
            case 19:
              return { name: 'Turbulent Transfer Coefficient for Heat', units: 'Numeric', abbrev: 'TTCHT' }
            case 20:
              return { name: 'Turbulent Diffusion Coefficient for Heat', units: 'm2s-1', abbrev: 'TDCHT' }
            case 21:
              return { name: 'Apparent Temperature **', units: 'K', abbrev: 'APTMP' }
            case 22:
              return { name: 'Temperature Tendency due to Short-Wave Radiation', units: 'K s-1', abbrev: 'TTSWR' }
            case 23:
              return { name: 'Temperature Tendency due to Long-Wave Radiation', units: 'K s-1', abbrev: 'TTLWR' }
            case 24:
              return { name: 'Temperature Tendency due to Short-Wave Radiation, Clear Sky', units: 'K s-1', abbrev: 'TTSWRCS' }
            case 25:
              return { name: 'Temperature Tendency due to Long-Wave Radiation, Clear Sky', units: 'K s-1', abbrev: 'TTLWRCS' }
            case 26:
              return { name: 'Temperature Tendency due to nameizations', units: 'K s-1', abbrev: 'TTPARM' }
            case 27:
              return { name: 'Wet Bulb Temperature', units: 'K', abbrev: 'WETBT' }
            case 28:
              return { name: 'Unbalanced Component of Temperature', units: 'K', abbrev: 'UCTMP' }
            case 29:
              return { name: 'Temperature Advection', units: 'K s-1', abbrev: 'TMPADV' }
            case 192:
              return { name: 'Snow Phase Change Heat Flux', units: 'W m-2', abbrev: 'SNOHF' }
            case 193:
              return { name: 'Temperature Tendency by All Radiation', units: 'K s-1', abbrev: 'TTRAD' }
            case 194:
              return { name: 'Relative Error Variance', units: '', abbrev: 'REV' }
            case 195:
              return { name: 'Large Scale Condensate Heating Rate', units: 'K s-1', abbrev: 'LRGHR' }
            case 196:
              return { name: 'Deep Convective Heating Rate', units: 'K s-1', abbrev: 'CNVHR' }
            case 197:
              return { name: 'Total Downward Heat Flux at Surface', units: 'W m-2', abbrev: 'THFLX' }
            case 198:
              return { name: 'Temperature Tendency by All Physics', units: 'K s-1', abbrev: 'TTDIA' }
            case 199:
              return { name: 'Temperature Tendency by Non-radiation Physics', units: 'K s-1', abbrev: 'TTPHY' }
            case 200:
              return { name: 'Standard Dev. of IR Temp. over 1x1 deg. area', units: 'K', abbrev: 'TSD1D' }
            case 201:
              return { name: 'Shallow Convective Heating Rate', units: 'K s-1', abbrev: 'SHAHR' }
            case 202:
              return { name: 'Vertical Diffusion Heating rate', units: 'K s-1', abbrev: 'VDFHR' }
            case 203:
              return { name: 'Potential Temperature at Top of Viscous Sublayer', units: 'K', abbrev: 'THZ0' }
            case 204:
              return { name: 'Tropical Cyclone Heat Potential', units: 'Jm-2K', abbrev: 'TCHP' }
            case 205:
              return { name: 'Effective Layer (EL) Temperature', units: 'C', abbrev: 'ELMELT' }
            case 255:
              return { name: 'Missing', units: '', abbrev: '' }

            default:
              throw noCodeError
          }

        // Category 2
        case 2:
          switch (code) {
            case 0:
              return { name: 'Wind Direction (from which blowing)', units: '°', abbrev: 'WDIR' }
            case 1:
              return { name: 'Wind Speed', units: 'm s-1', abbrev: 'WIND' }
            case 2:
              return { name: 'U-Component of Wind', units: 'm s-1', abbrev: 'UGRD' }
            case 3:
              return { name: 'V-Component of Wind', units: 'm s-1', abbrev: 'VGRD' }
            case 4:
              return { name: 'Stream Function', units: 'm2 s-1', abbrev: 'STRM' }
            case 5:
              return { name: 'Velocity Potential', units: 'm2 s-1', abbrev: 'VPOT' }
            case 6:
              return { name: 'Montgomery Stream Function', units: 'm2 s-2', abbrev: 'MNTSF' }
            case 7:
              return { name: 'Sigma Coordinate Vertical Velocity', units: 's-1', abbrev: 'SGCVV' }
            case 8:
              return { name: 'Vertical Velocity (Pressure)', units: 'Pa s-1', abbrev: 'VVEL' }
            case 9:
              return { name: 'Vertical Velocity (Geometric)', units: 'm s-1', abbrev: 'DZDT' }
            case 10:
              return { name: 'Absolute Vorticity', units: 's-1', abbrev: 'ABSV' }
            case 11:
              return { name: 'Absolute Divergence', units: 's-1', abbrev: 'ABSD' }
            case 12:
              return { name: 'Relative Vorticity', units: 's-1', abbrev: 'RELV' }
            case 13:
              return { name: 'Relative Divergence', units: 's-1', abbrev: 'RELD' }
            case 14:
              return { name: 'Potential Vorticity', units: 'K m2 kg-1 s-1', abbrev: 'PVORT' }
            case 15:
              return { name: 'Vertical U-Component Shear', units: 's-1', abbrev: 'VUCSH' }
            case 16:
              return { name: 'Vertical V-Component Shear', units: 's-1', abbrev: 'VVCSH' }
            case 17:
              return { name: 'Momentum Flux, U-Component', units: 'N m-2', abbrev: 'UFLX' }
            case 18:
              return { name: 'Momentum Flux, V-Component', units: 'N m-2', abbrev: 'VFLX' }
            case 19:
              return { name: 'Wind Mixing Energy', units: 'J', abbrev: 'WMIXE' }
            case 20:
              return { name: 'Boundary Layer Dissipation', units: 'W m-2', abbrev: 'BLYDP' }
            case 21:
              return { name: 'Maximum Wind Speed *', units: 'm s-1', abbrev: 'MAXGUST' }
            case 22:
              return { name: 'Wind Speed (Gust)', units: 'm s-1', abbrev: 'GUST' }
            case 23:
              return { name: 'U-Component of Wind (Gust)', units: 'm s-1', abbrev: 'UGUST' }
            case 24:
              return { name: 'V-Component of Wind (Gust)', units: 'm s-1', abbrev: 'VGUST' }
            case 25:
              return { name: 'Vertical Speed Shear', units: 's-1', abbrev: 'VWSH' }
            case 26:
              return { name: 'Horizontal Momentum Flux', units: 'N m-2', abbrev: 'MFLX' }
            case 27:
              return { name: 'U-Component Storm Motion', units: 'm s-1', abbrev: 'USTM' }
            case 28:
              return { name: 'V-Component Storm Motion', units: 'm s-1', abbrev: 'VSTM' }
            case 29:
              return { name: 'Drag Coefficient', units: 'Numeric', abbrev: 'CD' }
            case 30:
              return { name: 'Frictional Velocity', units: 'm s-1', abbrev: 'FRICV' }
            case 31:
              return { name: 'Turbulent Diffusion Coefficient for Momentum', units: 'm2 s-1', abbrev: 'TDCMOM' }
            case 32:
              return { name: 'Eta Coordinate Vertical Velocity', units: 's-1', abbrev: 'ETACVV' }
            case 33:
              return { name: 'Wind Fetch', units: 'm', abbrev: 'WINDF' }
            case 34:
              return { name: 'Normal Wind Component **', units: 'm s-1', abbrev: 'NWIND' }
            case 35:
              return { name: 'Tangential Wind Component **', units: 'm s-1', abbrev: 'TWIND' }
            case 36:
              return { name: 'Amplitude Function for Rossby Wave Envelope for Meridional Wind ***', units: 'm s-1', abbrev: 'AFRWE' }
            case 37:
              return { name: 'Northward Turbulent Surface Stress ****', units: 'N m-2 s', abbrev: 'NTSS' }
            case 38:
              return { name: 'Eastward Turbulent Surface Stress ****', units: 'N m-2 s', abbrev: 'ETSS' }
            case 39:
              return { name: 'Eastward Wind Tendency Due to nameizations', units: 'm s-2', abbrev: 'EWTPARM' }
            case 40:
              return { name: 'Northward Wind Tendency Due to nameizations', units: 'm s-2', abbrev: 'NWTPARM' }
            case 41:
              return { name: 'U-Component of Geostrophic Wind', units: 'm s-1', abbrev: 'UGWIND' }
            case 42:
              return { name: 'V-Component of Geostrophic Wind', units: 'm s-1', abbrev: 'VGWIND' }
            case 43:
              return { name: 'Geostrophic Wind Direction', units: '°', abbrev: 'GEOWD' }
            case 44:
              return { name: 'Geostrophic Wind Speed', units: 'm s-1', abbrev: 'GEOWS' }
            case 45:
              return { name: 'Unbalanced Component of Divergence', units: 's-1', abbrev: 'UNDIV' }
            case 46:
              return { name: 'Vorticity Advection', units: 's-2', abbrev: 'VORTADV' }
            case 192:
              return { name: 'Vertical Speed Shear', units: 's-1', abbrev: 'VWSH' }
            case 193:
              return { name: 'Horizontal Momentum Flux', units: 'N m-2', abbrev: 'MFLX' }
            case 194:
              return { name: 'U-Component Storm Motion', units: 'm s-1', abbrev: 'USTM' }
            case 195:
              return { name: 'V-Component Storm Motion', units: 'm s-1', abbrev: 'VSTM' }
            case 196:
              return { name: 'Drag Coefficient', units: 'non-dim', abbrev: 'CD' }
            case 197:
              return { name: 'Frictional Velocity', units: 'm s-1', abbrev: 'FRICV' }
            case 198:
              return { name: 'Latitude of U Wind Component of Velocity', units: 'deg', abbrev: 'LAUV' }
            case 199:
              return { name: 'Longitude of U Wind Component of  Velocity', units: 'deg', abbrev: 'LOUV' }
            case 200:
              return { name: 'Latitude of V Wind Component of Velocity', units: 'deg', abbrev: 'LAVV' }
            case 201:
              return { name: 'Longitude of V Wind Component of Velocity', units: 'deg', abbrev: 'LOVV' }
            case 202:
              return { name: 'Latitude of Presure Point', units: 'deg', abbrev: 'LAPP' }
            case 203:
              return { name: 'Longitude of Presure Point', units: 'deg', abbrev: 'LOPP' }
            case 204:
              return { name: 'Vertical Eddy Diffusivity Heat exchange', units: 'm2 s-1', abbrev: 'VEDH' }
            case 205:
              return { name: 'Covariance between Meridional and Zonal Components of the wind.', units: 'm2 s-2', abbrev: 'COVMZ' }
            case 206:
              return { name: 'Covariance between Temperature and Zonal Components of the wind.', units: 'K*m s-1', abbrev: 'COVTZ' }
            case 207:
              return { name: 'Covariance between Temperature and Meridional Components of the wind.', units: 'K*m s-1', abbrev: 'COVTM' }
            case 208:
              return { name: 'Vertical Diffusion Zonal Acceleration', units: 'm s-2', abbrev: 'VDFUA' }
            case 209:
              return { name: 'Vertical Diffusion Meridional Acceleration', units: 'm s-2', abbrev: 'VDFVA' }
            case 210:
              return { name: 'Gravity wave drag zonal acceleration', units: 'm s-2', abbrev: 'GWDU' }
            case 211:
              return { name: 'Gravity wave drag meridional acceleration', units: 'm s-2', abbrev: 'GWDV' }
            case 212:
              return { name: 'Convective zonal momentum mixing acceleration', units: 'm s-2', abbrev: 'CNVU' }
            case 213:
              return { name: 'Convective meridional momentum mixing acceleration', units: 'm s-2', abbrev: 'CNVV' }
            case 214:
              return { name: 'Tendency of vertical velocity', units: 'm s-2', abbrev: 'WTEND' }
            case 215:
              return { name: 'Omega (Dp/Dt) divide by density', units: 'K', abbrev: 'OMGALF' }
            case 216:
              return { name: 'Convective Gravity wave drag zonal acceleration', units: 'm s-2', abbrev: 'CNGWDU' }
            case 217:
              return { name: 'Convective Gravity wave drag meridional acceleration', units: 'm s-2', abbrev: 'CNGWDV' }
            case 218:
              return { name: 'Velocity Point Model Surface', units: '', abbrev: 'LMV' }
            case 219:
              return { name: 'Potential Vorticity (Mass-Weighted)', units: '1/s/m', abbrev: 'PVMWW' }
            case 220:
              return { name: 'Hourly Maximum of Upward Vertical Velocity', units: 'm s-1', abbrev: 'MAXUVV' }
            case 221:
              return { name: 'Hourly Maximum of Downward Vertical Velocity', units: 'm s-1', abbrev: 'MAXDVV' }
            case 222:
              return { name: 'U Component of Hourly Maximum 10m Wind Speed', units: 'm s-1', abbrev: 'MAXUW' }
            case 223:
              return { name: 'V Component of Hourly Maximum 10m Wind Speed', units: 'm s-1', abbrev: 'MAXVW' }
            case 224:
              return { name: 'Ventilation Rate', units: 'm2 s-1', abbrev: 'VRATE' }
            case 225:
              return { name: 'Transport Wind Speed', units: 'm s-1', abbrev: 'TRWSPD' }
            case 226:
              return { name: 'Transport Wind Direction', units: 'Deg', abbrev: 'TRWDIR' }
            case 227:
              return { name: 'Earliest Reasonable Arrival Time (10% exceedance)', units: 's', abbrev: 'TOA10' }
            case 228:
              return { name: 'Most Likely Arrival Time (50% exceedance)', units: 's', abbrev: 'TOA50' }
            case 229:
              return { name: 'Most Likely Departure Time (50% exceedance)', units: 's', abbrev: 'TOD50' }
            case 230:
              return { name: 'Latest Reasonable Departure Time (90% exceedance)', units: 's', abbrev: 'TOD90' }
            case 231:
              return { name: 'Tropical Wind Direction', units: '°', abbrev: 'TPWDIR' }
            case 232:
              return { name: 'Tropical Wind Speed', units: 'm s-1', abbrev: 'TPWSPD' }
            case 233:
              return { name: 'Inflow Based (ESFC) to 50% EL Shear Magnitude', units: 'kt', abbrev: 'ESHR' }
            case 234:
              return { name: 'U Component Inflow Based to 50% EL Shear Vector', units: 'kt', abbrev: 'UESH' }
            case 235:
              return { name: 'V Component Inflow Based to 50% EL Shear Vector', units: 'kt', abbrev: 'VESH' }
            case 236:
              return { name: 'U Component Bunkers Effective Right Motion', units: 'kt', abbrev: 'UEID' }
            case 237:
              return { name: 'V Component Bunkers Effective Right Motion', units: 'kt', abbrev: 'VEID' }
            case 255:
              return { name: 'Missing', units: '', abbrev: '' }

            default:
              throw noCodeError
          }

        default:
          throw noCategoryError
      }

    default:
      throw noDisciplineError
  }
}

/**
 *  Table 4.3 - TYPE OF GENERATING PROCESS
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table4-3.shtml)
 */
export const lookupTable43 = (code: number) => {
  switch (code) {
    case 0:
      return 'Analysis'
    case 1:
      return 'Initialization'
    case 2:
      return 'Forecast'
    case 3:
      return 'Bias Corrected Forecast'
    case 4:
      return 'Ensemble Forecast'
    case 5:
      return 'Probability Forecast'
    case 6:
      return 'Forecast Error'
    case 7:
      return 'Analysis Error'
    case 8:
      return 'Observation'
    case 9:
      return 'Climatological'
    case 10:
      return 'Probability-Weighted Forecast'
    case 11:
      return 'Bias-Corrected Ensemble Forecast'
    case 12:
      return 'Post-processed Analysis (See Note)'
    case 13:
      return 'Post-processed Forecast (See Note)'
    case 14:
      return 'Nowcast'
    case 15:
      return 'Hindcast'
    case 16:
      return 'Physical Retrieval'
    case 17:
      return 'Regression Analysis'
    case 18:
      return 'Difference Between Two Forecasts'
    case 192:
      return 'Forecast Confidence Indicator'
    case 193:
      return 'Probability-matched Mean'
    case 194:
      return 'Neighborhood Probability'
    case 195:
      return 'Bias-Corrected and Downscaled Ensemble Forecast'
    case 196:
      return 'Perturbed Analysis for Ensemble Initialization'
    case 197:
      return 'Ensemble Agreement Scale Probability'
    case 198:
      return 'Post-Processed Deterministic-Expert-Weighted Forecast'
    case 199:
      return 'Ensemble Forecast Based on Counting'
    case 200:
      return 'Local Probability-matched Mean'
    case 255:
      return 'Missing'

    default:
      throw new Error(`Table 4.3 missing code value: ${code}`)
  }
}

/**
 *  Table 4.4 - INDICATOR OF UNIT OF TIME RANGE
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table4-4.shtml)
 */
export const lookupTable44 = (code: number) => {
  switch (code) {
    case 0:
      return 'Minute'
    case 1:
      return 'Hour'
    case 2:
      return 'Day'
    case 3:
      return 'Month'
    case 4:
      return 'Year'
    case 5:
      return 'Decade (10 Years)'
    case 6:
      return 'Normal (30 Years)'
    case 7:
      return 'Century (100 Years)'
    case 10:
      return '3 Hours'
    case 11:
      return '6 Hours'
    case 12:
      return '12 Hours'
    case 13:
      return 'Second'
    case 255:
      return 'Missing'

    default:
      throw new Error(`Table 4.4 missing code value: ${code}`)
  }
}

/**
 *  Table 4.5 - FIXED SURFACE TYPES AND UNITS
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table4-5.shtml)
 */
export const lookupTable45 = (code: number) => {
  switch (code) {
    case 1:
      return { name: 'Ground or Water Surface', units: null }
    case 2:
      return { name: 'Cloud Base Level', units: null }
    case 3:
      return { name: 'Level of Cloud Tops', units: null }
    case 4:
      return { name: 'Level of 0o C Isotherm', units: null }
    case 5:
      return { name: 'Level of Adiabatic Condensation Lifted from the Surface', units: null }
    case 6:
      return { name: 'Maximum Wind Level', units: null }
    case 7:
      return { name: 'Tropopause', units: null }
    case 8:
      return { name: 'Nominal Top of the Atmosphere', units: null }
    case 9:
      return { name: 'Sea Bottom', units: null }
    case 10:
      return { name: 'Entire Atmosphere', units: null }
    case 11:
      return { name: 'Cumulonimbus Base (CB)', units: 'm' }
    case 12:
      return { name: 'Cumulonimbus Top (CT)', units: 'm' }
    case 13:
      return {
        name: 'Lowest level where vertically integrated cloud cover exceeds the specified percentage (cloud base for a given percentage cloud cover)',
        units: '%'
      }
    case 14:
      return { name: 'Level of free convection (LFC)', units: null }
    case 15:
      return { name: 'Convection condensation level (CCL)', units: null }
    case 16:
      return { name: 'Level of neutral buoyancy or equilibrium (LNB)', units: null }
    case 20:
      return { name: 'Isothermal Level', units: 'K' }
    case 21:
      return { name: 'Lowest level where mass density exceeds the specified value (base for a given threshold of mass density)', units: 'kg m-3' }
    case 22:
      return { name: 'Highest level where mass density exceeds the specified value (top for a given threshold of mass density)', units: 'kg m-3' }
    case 23:
      return { name: 'Lowest level where air concentration exceeds the specified value (base for a given threshold of air concentration', units: 'Bq m-3' }
    case 24:
      return { name: 'Highest level where air concentration exceeds the specified value (top for a given threshold of air concentration)', units: 'Bq m-3' }
    case 25:
      return { name: 'Highest level where radar reflectivity exceeds the specified value (echo top for a given threshold of reflectivity)', units: 'dBZ' }
    case 100:
      return { name: 'Isobaric Surface', units: 'Pa' }
    case 101:
      return { name: 'Mean Sea Level', units: null }
    case 102:
      return { name: 'Specific Altitude Above Mean Sea Level', units: 'm' }
    case 103:
      return { name: 'Specified Height Level Above Ground', units: 'm' }
    case 104:
      return { name: 'Sigma Level', units: null }
    case 105:
      return { name: 'Hybrid Level', units: null }
    case 106:
      return { name: 'Depth Below Land Surface', units: 'm' }
    case 107:
      return { name: 'Isentropic (theta) Level', units: 'K' }
    case 108:
      return { name: 'Level at Specified Pressure Difference from Ground to Level', units: 'Pa' }
    case 109:
      return { name: 'Potential Vorticity Surface', units: 'K m2 kg-1 s-1' }
    case 111:
      return { name: 'Eta Level', units: null }
    case 113:
      return { name: 'Logarithmic Hybrid Level', units: null }
    case 114:
      return { name: 'Snow Level', units: 'Numeric' }
    case 115:
      return { name: 'Sigma height level (see Note 4)', units: null }
    case 117:
      return { name: 'Mixed Layer Depth', units: 'm' }
    case 118:
      return { name: 'Hybrid Height Level', units: null }
    case 119:
      return { name: 'Hybrid Pressure Level', units: null }
    case 150:
      return { name: 'Generalized Vertical Height Coordinate (see Note 4)', units: null }
    case 151:
      return { name: 'Soil level (See Note 5)', units: 'Numeric' }
    case 160:
      return { name: 'Depth Below Sea Level', units: 'm' }
    case 161:
      return { name: 'Depth Below Water Surface', units: 'm' }
    case 162:
      return { name: 'Lake or River Bottom', units: null }
    case 163:
      return { name: 'Bottom Of Sediment Layer', units: null }
    case 164:
      return { name: 'Bottom Of Thermally Active Sediment Layer', units: null }
    case 165:
      return { name: 'Bottom Of Sediment Layer Penetrated By Thermal Wave', units: null }
    case 166:
      return { name: 'Mixing Layer', units: null }
    case 167:
      return { name: 'Bottom of Root Zone', units: null }
    case 168:
      return { name: 'Ocean Model Level', units: 'Numeric' }
    case 169:
      return { name: 'Ocean level defined by water density (sigma-theta) difference from near-surface to level (see Note 7)', units: 'kg m-3' }
    case 170:
      return { name: 'Ocean level defined by water potential temperature difference from near-surface to level (see Note 7)', units: 'K' }
    case 174:
      return { name: 'Top Surface of Ice on Sea, Lake or River', units: null }
    case 175:
      return { name: 'Top Surface of Ice, under Snow, on Sea, Lake or River', units: null }
    case 176:
      return { name: 'Bottom Surface (underside) Ice on Sea, Lake or River', units: null }
    case 177:
      return { name: 'Deep Soil (of indefinite depth)', units: null }
    case 179:
      return { name: 'Top Surface of Glacier Ice and Inland Ice', units: null }
    case 180:
      return { name: 'Deep Inland or Glacier Ice (of indefinite depth)', units: null }
    case 181:
      return { name: 'Grid Tile Land Fraction as a Model Surface', units: null }
    case 182:
      return { name: 'Grid Tile Water Fraction as a Model Surface', units: null }
    case 183:
      return { name: 'Grid Tile Ice Fraction on Sea, Lake or River as a Model Surface', units: null }
    case 184:
      return { name: 'Grid Tile Glacier Ice and Inland Ice Fraction as a Model Surface', units: null }
    case 200:
      return { name: 'Entire atmosphere (considered as a single layer)', units: null }
    case 201:
      return { name: 'Entire ocean (considered as a single layer)', units: null }
    case 204:
      return { name: 'Highest tropospheric freezing level', units: null }
    case 206:
      return { name: 'Grid scale cloud bottom level', units: null }
    case 207:
      return { name: 'Grid scale cloud top level', units: null }
    case 209:
      return { name: 'Boundary layer cloud bottom level', units: null }
    case 210:
      return { name: 'Boundary layer cloud top level', units: null }
    case 211:
      return { name: 'Boundary layer cloud layer', units: null }
    case 212:
      return { name: 'Low cloud bottom level', units: null }
    case 213:
      return { name: 'Low cloud top level', units: null }
    case 214:
      return { name: 'Low cloud layer', units: null }
    case 215:
      return { name: 'Cloud ceiling', units: null }
    case 216:
      return { name: 'Effective Layer Top Level', units: 'm' }
    case 217:
      return { name: 'Effective Layer Bottom Level', units: 'm' }
    case 218:
      return { name: 'Effective Layer', units: 'm' }
    case 220:
      return { name: 'Planetary Boundary Layer', units: null }
    case 221:
      return { name: 'Layer Between Two Hybrid Levels', units: null }
    case 222:
      return { name: 'Middle cloud bottom level', units: null }
    case 223:
      return { name: 'Middle cloud top level', units: null }
    case 224:
      return { name: 'Middle cloud layer', units: null }
    case 232:
      return { name: 'High cloud bottom level', units: null }
    case 233:
      return { name: 'High cloud top level', units: null }
    case 234:
      return { name: 'High cloud layer', units: null }
    case 235:
      return { name: 'Ocean Isotherm Level (1/10 ° C)', units: null }
    case 236:
      return { name: 'Layer between two depths below ocean surface', units: null }
    case 237:
      return { name: 'Bottom of Ocean Mixed Layer (m)', units: null }
    case 238:
      return { name: 'Bottom of Ocean Isothermal Layer (m)', units: null }
    case 239:
      return { name: 'Layer Ocean Surface        and 26C Ocean Isothermal Level', units: null }
    case 240:
      return { name: 'Ocean Mixed Layer', units: null }
    case 241:
      return { name: 'Ordered Sequence of Data', units: null }
    case 242:
      return { name: 'Convective cloud bottom level', units: null }
    case 243:
      return { name: 'Convective cloud top level', units: null }
    case 244:
      return { name: 'Convective cloud layer', units: null }
    case 245:
      return { name: 'Lowest level of the wet bulb zero', units: null }
    case 246:
      return { name: 'Maximum equivalent potential temperature level', units: null }
    case 247:
      return { name: 'Equilibrium level', units: null }
    case 248:
      return { name: 'Shallow convective cloud bottom level', units: null }
    case 249:
      return { name: 'Shallow convective cloud top level', units: null }
    case 251:
      return { name: 'Deep convective cloud bottom level', units: null }
    case 252:
      return { name: 'Deep convective cloud top level', units: null }
    case 253:
      return { name: 'Lowest bottom level of supercooled liquid water layer', units: null }
    case 254:
      return { name: 'Highest top level of supercooled liquid water layer', units: null }
    case 255:
      return { name: 'Missing', units: null }

    default:
      throw new Error(`Table 4.5 missing code value: ${code}`)
  }
}

/**
 *  Table 4.7 - DERIVED FORECAST
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table4-7.shtml)
 */
export const lookupTable47 = (code: number) => {
  switch (code) {
    case 0:
      return 'Unweighted Mean of All Members'
    case 1:
      return 'Weighted Mean of All Members'
    case 2:
      return 'Standard Deviation with respect to Cluster Mean'
    case 3:
      return 'Standard Deviation with respect to Cluster Mean, Normalized'
    case 4:
      return 'Spread of All Members'
    case 5:
      return 'Large Anomaly Index of All Members (see Note 1)'
    case 6:
      return 'Unweighted Mean of the Cluster Members'
    case 7:
      return 'Interquartile Range (Range between the 25th and 75th quantile)'
    case 8:
      return 'Minimum Of All Ensemble Members (see Note 2)'
    case 9:
      return 'Maximum Of All Ensemble Members (see Note 2)'
    case 192:
      return 'Unweighted Mode of All Members'
    case 193:
      return 'Percentile value (10%) of All Members'
    case 194:
      return 'Percentile value (50%) of All Members'
    case 195:
      return 'Percentile value (90%) of All Members'
    case 196:
      return 'Statistically decided weights for each ensemble member'
    case 197:
      return 'Climate Percentile (percentile values from climate distribution)'
    case 198:
      return 'Deviation of Ensemble Mean from Daily Climatology'
    case 199:
      return 'Extreme Forecast Index'
    case 200:
      return 'Equally Weighted Mean'
    case 201:
      return 'Percentile value (5%) of All Members'
    case 202:
      return 'Percentile value (25%) of All Members'
    case 203:
      return 'Percentile value (75%) of All Members'
    case 204:
      return 'Percentile value (95%) of All Members'
    case 255:
      return 'Missing'

    default:
      throw new Error(`Table 4.7 missing code value: ${code}`)
  }
}
