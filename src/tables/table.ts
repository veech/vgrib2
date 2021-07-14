/**
 * @description Returns a table map for the given table number
 * @param table Table number
 * @returns Table Map
 */
export const getTable = (table: string) => {
  switch (table) {
    case '0':
      return lookupTable0
    case 'C':
      return lookupTableC

    default:
      throw new Error(`Table ${table} not defined`)
  }
}

/**
 *  Table 0 - National/International Originating Centers
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/on388/table0.html)
 */
const lookupTable0 = (code: number) => {
  switch (code) {
    case 1:
      return 'Melbourne (WMC)'
    case 2:
      return 'Melbourne (WMC)'
    case 3:
      return 'Melbourne (WMC)'
    case 4:
      return 'Moscow (WMC)'
    case 5:
      return 'Moscow (WMC)'
    case 6:
      return 'Moscow (WMC)'
    case 7:
      return 'US National Weather Service - NCEP (WMC)'
    case 8:
      return 'US National Weather Service - NWSTG (WMC)'
    case 9:
      return 'US National Weather Service - Other (WMC)'
    case 10:
      return 'Cairo (RSMC/RAFC)'
    case 11:
      return 'Cairo (RSMC/RAFC)'
    case 12:
      return 'Dakar (RSMC/RAFC)'
    case 13:
      return 'Dakar (RSMC/RAFC)'
    case 14:
      return 'Nairobi (RSMC/RAFC)'
    case 15:
      return 'Nairobi (RSMC/RAFC)'
    case 16:
      return 'Casablanca (RSMC)'
    case 17:
      return 'Tunis (RSMC)'
    case 18:
      return 'Tunis-Casablanca (RSMC)'
    case 19:
      return 'Tunis-Casablanca (RSMC)'
    case 20:
      return 'Las Palmas (RAFC)'
    case 21:
      return 'Algiers (RSMC)'
    case 22:
      return 'ACMAD'
    case 23:
      return 'Mozambique (NMC)'
    case 24:
      return 'Pretoria (RSMC)'
    case 25:
      return 'La Reunion (RSMC)'
    case 26:
      return 'Khabarovsk (RSMC)'
    case 27:
      return 'Khabarovsk (RSMC)'
    case 28:
      return 'New Delhi (RSMC/RAFC)'
    case 29:
      return 'New Delhi (RSMC/RAFC)'
    case 30:
      return 'Novosibirsk (RSMC)'
    case 31:
      return 'Novosibirsk (RSMC)'
    case 32:
      return 'Tashkent (RSMC)'
    case 33:
      return 'Jeddah (RSMC)'
    case 34:
      return 'Tokyo (RSMC), Japanese Meteorological Agency'
    case 35:
      return 'Tokyo (RSMC), Japanese Meteorological Agency'
    case 36:
      return 'Bankok'
    case 37:
      return 'Ulan Bator'
    case 38:
      return 'Beijing (RSMC)'
    case 39:
      return 'Beijing (RSMC)'
    case 40:
      return 'Seoul'
    case 41:
      return 'Buenos Aires (RSMC/RAFC)'
    case 42:
      return 'Buenos Aires (RSMC/RAFC)'
    case 43:
      return 'Brasilia (RSMC/RAFC)'
    case 44:
      return 'Brasilia (RSMC/RAFC)'
    case 45:
      return 'Santiago'
    case 46:
      return 'Brazilian Space Agency - INPE'
    case 47:
      return 'Columbia (NMC)'
    case 48:
      return 'Ecuador (NMC)'
    case 49:
      return 'Peru (NMC)'
    case 50:
      return 'Venezuela (NMC)'
    case 51:
      return 'Miami (RSMC/RAFC)'
    case 52:
      return 'Miami (RSMC), National Hurricane Center'
    case 53:
      return 'Canadian Meteorological Service - Montreal (RSMC)'
    case 54:
      return 'Canadian Meteorological Service - Montreal (RSMC)'
    case 55:
      return 'San Francisco'
    case 56:
      return 'ARINC Center'
    case 57:
      return 'US Air Force - Air Force Global Weather Center'
    case 58:
      return 'Fleet Numerical Meteorology and Oceanography Center,Monterey,CA,USA'
    case 59:
      return 'The NOAA Forecast Systems Lab, Boulder, CO, USA'
    case 60:
      return 'National Center for Atmospheric Research (NCAR), Boulder, CO'
    case 61:
      return 'Service ARGOS - Landover, MD, USA'
    case 62:
      return 'US Naval Oceanographic Office'
    case 63:
      return 'International Research Institude for Climate and Society'
    case 64:
      return 'Honolulu'
    case 65:
      return 'Darwin (RSMC)'
    case 66:
      return 'Darwin (RSMC)'
    case 67:
      return 'Melbourne (RSMC)'
    case 68:
      return 'Reserved'
    case 69:
      return 'Wellington (RSMC/RAFC)'
    case 70:
      return 'Wellington (RSMC/RAFC)'
    case 71:
      return 'Nadi (RSMC)'
    case 72:
      return 'Singapore'
    case 73:
      return 'Malaysia (NMC)'
    case 74:
      return 'U.K. Met Office - Exeter (RSMC)'
    case 75:
      return 'U.K. Met Office - Exeter (RSMC)'
    case 76:
      return 'Moscow (RSMC/RAFC)'
    case 77:
      return 'Reserved'
    case 78:
      return 'Offenbach (RSMC)'
    case 79:
      return 'Offenbach (RSMC)'
    case 80:
      return 'Rome (RSMC)'
    case 81:
      return 'Rome (RSMC)'
    case 82:
      return 'Norrkoping'
    case 83:
      return 'Norrkoping'
    case 84:
      return 'French Weather Service - Toulouse'
    case 85:
      return 'French Weather Service - Toulouse'
    case 86:
      return 'Helsinki'
    case 87:
      return 'Belgrade'
    case 88:
      return 'Oslo'
    case 89:
      return 'Prague'
    case 90:
      return 'Episkopi'
    case 91:
      return 'Ankara'
    case 92:
      return 'Frankfurt/Main (RAFC)'
    case 93:
      return 'London (WAFC)'
    case 94:
      return 'Copenhagen'
    case 95:
      return 'Rota'
    case 96:
      return 'Athens'
    case 97:
      return 'European Space Agency (ESA)'
    case 98:
      return 'European Center for Medium-Range Weather Forecasts (RSMC)'
    case 99:
      return 'De Bilt, Netherlands'
    case 100:
      return 'Brazzaville'
    case 101:
      return 'Abidjan'
    case 102:
      return 'Libyan Arab Jamahiriya (NMC)'
    case 103:
      return 'Madagascar (NMC)'
    case 104:
      return 'Mauritius (NMC)'
    case 105:
      return 'Niger (NMC)'
    case 106:
      return 'Seychelles (NMC)'
    case 107:
      return 'Uganda (NMC)'
    case 108:
      return 'United Republic of Tanzania (NMC)'
    case 109:
      return 'Zimbabwe (NMC)'
    case 110:
      return 'Hong-Kong'
    case 111:
      return 'Afghanistan (NMC)'
    case 112:
      return 'Bahrain (NMC)'
    case 113:
      return 'Bangladesh (NMC)'
    case 114:
      return 'Bhutan (NMC)'
    case 115:
      return 'Cambodia (NMC)'
    case 116:
      return "Democratic People's Republic of Korea (NMC)"
    case 117:
      return 'Islamic Republic of Iran (NMC)'
    case 118:
      return 'Iraq (NMC)'
    case 119:
      return 'Kazakhstan (NMC)'
    case 120:
      return 'Kuwait (NMC)'
    case 121:
      return 'Kyrgyz Republic (NMC)'
    case 122:
      return "Lao People's Democratic Republic (NMC)"
    case 123:
      return 'Macao, China'
    case 124:
      return 'Maldives (NMC)'
    case 125:
      return 'Myanmar (NMC)'
    case 126:
      return 'Nepal (NMC)'
    case 127:
      return 'Oman (NMC)'
    case 128:
      return 'Pakistan (NMC)'
    case 129:
      return 'Qatar (NMC)'
    case 130:
      return 'Yemen (NMC)'
    case 131:
      return 'Sri Lanka (NMC)'
    case 132:
      return 'Tajikistan (NMC)'
    case 133:
      return 'Turkmenistan (NMC)'
    case 134:
      return 'United Arab Emirates (NMC)'
    case 135:
      return 'Uzbekistan (NMC)'
    case 136:
      return 'Viet Nam (NMC)'
    case 137 - 139:
      return 'Reserved'
    case 140:
      return 'Bolivia (NMC)'
    case 141:
      return 'Guyana (NMC)'
    case 142:
      return 'Paraguay (NMC)'
    case 143:
      return 'Suriname (NMC)'
    case 144:
      return 'Uruguay (NMC)'
    case 145:
      return 'French Guyana'
    case 146:
      return 'Brazilian Navy Hydrographic Center'
    case 147:
      return 'National Commission on Space Activities - Argentina'
    case 148:
      return 'Brazilian Department of Airspace        Control - DECEA'
    case 149:
      return 'Reserved'
    case 150:
      return 'Antigua and Barbuda (NMC)'
    case 151:
      return 'Bahamas (NMC)'
    case 152:
      return 'Barbados (NMC)'
    case 153:
      return 'Belize (NMC)'
    case 154:
      return 'British Caribbean Territories Center'
    case 155:
      return 'San Jose'
    case 156:
      return 'Cuba (NMC)'
    case 157:
      return 'Dominica (NMC)'
    case 158:
      return 'Dominican Republic (NMC)'
    case 159:
      return 'El Salvador (NMC)'
    case 160:
      return 'US NOAA/NESDIS'
    case 161:
      return 'US NOAA Office of Oceanic and Atmospheric Research'
    case 162:
      return 'Guatemala (NMC)'
    case 163:
      return 'Haiti (NMC)'
    case 164:
      return 'Honduras (NMC)'
    case 165:
      return 'Jamaica (NMC)'
    case 166:
      return 'Mexico City'
    case 167:
      return 'Netherlands Antilles and Aruba (NMC)'
    case 168:
      return 'Nicaragua (NMC)'
    case 169:
      return 'Panama (NMC)'
    case 170:
      return 'Saint Lucia (NMC)'
    case 171:
      return 'Trinidad and Tobago (NMC)'
    case 172:
      return 'French Departments in RA IV'
    case 173:
      return 'US National Aeronautics and Space Administration (NASA)'
    case 174:
      return 'Integrated System Data Management/Marine \n        Environmental Data Service (ISDM/MEDS) - Canada'
    case 175:
      return 'Reserved'
    case 176:
      return 'US Cooperative Institude for Meteorological Satellite Studies'
    case 177 - 189:
      return 'Reserved'
    case 190:
      return 'Cook Islands (NMC)'
    case 191:
      return 'French Polynesia (NMC)'
    case 192:
      return 'Tonga (NMC)'
    case 193:
      return 'Vanuatu (NMC)'
    case 194:
      return 'Brunei (NMC)'
    case 195:
      return 'Indonesia (NMC)'
    case 196:
      return 'Kiribati (NMC)'
    case 197:
      return 'Federated States of Micronesia (NMC)'
    case 198:
      return 'New Caledonia (NMC)'
    case 199:
      return 'Niue'
    case 200:
      return 'Papua New Guinea (NMC)'
    case 201:
      return 'Philippines (NMC)'
    case 202:
      return 'Samoa (NMC)'
    case 203:
      return 'Solomon Islands (NMC)'
    case 204:
      return 'Narional Institude of Water and Atmospheric Research - New Zealand'
    case 205 - 209:
      return 'Reserved'
    case 210:
      return 'Frascati (ESA/ESRIN)'
    case 211:
      return 'Lanion'
    case 212:
      return 'Lisbon'
    case 213:
      return 'Reykjavik'
    case 214:
      return 'Madrid'
    case 215:
      return 'Zurich'
    case 216:
      return 'Service ARGOS - Toulouse'
    case 217:
      return 'Bratislava'
    case 218:
      return 'Budapest'
    case 219:
      return 'Ljubljana'
    case 220:
      return 'Warsaw'
    case 221:
      return 'Zagreb'
    case 222:
      return 'Albania (NMC)'
    case 223:
      return 'Armenia (NMC)'
    case 224:
      return 'Austria (NMC)'
    case 225:
      return 'Azerbaijan (NMC)'
    case 226:
      return 'Belarus (NMC)'
    case 227:
      return 'Belgium (NMC)'
    case 228:
      return 'Bosnia and Herzegovina (NMC)'
    case 229:
      return 'Bulgaria (NMC)'
    case 230:
      return 'Cyprus (NMC)'
    case 231:
      return 'Estonia (NMC)'
    case 232:
      return 'Georgia (NMC)'
    case 233:
      return 'Dublin'
    case 234:
      return 'Israel (NMC)'
    case 235:
      return 'Jordan (NMC)'
    case 236:
      return 'Latvia (NMC)'
    case 237:
      return 'Lebanon (NMC)'
    case 238:
      return 'Lithuania (NMC)'
    case 239:
      return 'Luxembourg'
    case 240:
      return 'Malta (NMC)'
    case 241:
      return 'Monaco'
    case 242:
      return 'Romania (NMC)'
    case 243:
      return 'Syrian Arab Republic (NMC)'
    case 244:
      return 'The former Yugoslav Republic of Macedonia (NMC)'
    case 245:
      return 'Ukraine (NMC)'
    case 246:
      return 'Republic of Moldova (NMC)'
    case 247:
      return 'Operational Programme for the Exchange\n        of Weather RAdar Information (OPERA) - EUMETNET'
    case 248 - 249:
      return 'Reserved'
    case 250:
      return 'COnsortium for Small scale  MOdelling (COSMO)'
    case 251 - 253:
      return 'Reserved'
    case 254:
      return 'EUMETSAT Operations Center'
    case 255:
      return 'Missing Value'

    default:
      throw new Error(`Table 0 missing code value: ${code}`)
  }
}

/**
 *  Table C - National Sub-Centerss
 *
 * [Read more...](https://www.nco.ncep.noaa.gov/pmb/docs/on388/tablec.html)
 */
const lookupTableC = (code: number) => {
  switch (code) {
    case 1:
      return 'NCEP Re-Analysis Project'
    case 2:
      return 'NCEP Ensemble Products'
    case 3:
      return 'NCEP Central Operations'
    case 4:
      return 'Environmental Modeling Center'
    case 5:
      return 'Weather Prediction Center'
    case 6:
      return 'Ocean Prediction Center'
    case 7:
      return 'Climate Prediction Center'
    case 8:
      return 'Aviation Weather Center'
    case 9:
      return 'Storm Prediction Center'
    case 10:
      return 'National Hurricane Center'
    case 11:
      return 'NWS Techniques Development Laboratory'
    case 12:
      return 'NESDIS Office of Research and Applications'
    case 13:
      return 'Federal Aviation Administration'
    case 14:
      return 'NWS Meteorological Development Laboratory'
    case 15:
      return 'North American Regional Reanalysis Project'
    case 16:
      return 'Space Weather Prediction Center'
    case 17:
      return 'ESRL Global Systems Division'

    default:
      throw new Error(`Table 0 missing code value: $code}`)
  }
}
