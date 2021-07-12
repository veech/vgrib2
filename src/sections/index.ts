import { parseSection0 } from './section-0'
import { parseSection1 } from './section-1'

export const parseSection = (section: Buffer) => {
  const first4Bytes = section.slice(0, 4)

  if (first4Bytes.toString() === 'GRIB') return parseSection0(section)
  if (first4Bytes.toString() === '7777') return 'OK'

  const sectionNumber = section.readUInt8(4)

  switch (sectionNumber) {
    case 1:
      return parseSection1(section)
    default:
      return null
  }
}
