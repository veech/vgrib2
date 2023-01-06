import fs from 'fs'
import { GRIB } from '.'

const filepath = '/Users/dmitry/projects/glowing-fork/mirror/ftp.bom.gov.au/anon/sample/catalogue/ADFD/Victoria/IDV71000_VIC_T_SFC.grb'

const gribFile = fs.readFileSync(filepath)

console.time('vgrib parse')
const grib = GRIB.parse(gribFile)
// let i = 0
// for (const packet of grib) console.log(i++, packet)

console.timeEnd('vgrib parse')

console.log(GRIB.lookupDataPoint(grib[0], -39.75, 146.15), 'should be 285.86')
console.log(GRIB.lookupDataPoint(grib[0], -39.75, 146.12), 'should be null')
console.log(GRIB.lookupDataPoint(grib[0], -39.72, 146.12), 'should be 285.96')
console.log(GRIB.lookupDataPoint(grib[0], -39.42, 145.1065), 'should be 286.06')
