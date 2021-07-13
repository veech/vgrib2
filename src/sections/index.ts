import { parseSection0 } from './section-0'
import { parseSection1 } from './section-1'
import { parseSection3 } from './section-3'
import { parseSection4 } from './section-4'

export const parseSection = (section: Buffer) => {
  const first4Bytes = section.slice(0, 4)

  if (first4Bytes.toString() === 'GRIB') return parseSection0(section)
  if (first4Bytes.toString() === '7777') return 'OK'

  const sectionNumber = section.readUInt8(4)

  switch (sectionNumber) {
    case 1:
      return parseSection1(section)
    case 2:
      throw new Error('Section 2 is not supported')
    case 3:
      return parseSection3(section)
    case 4:
      return parseSection4(section)
    default:
      return null
  }
}
