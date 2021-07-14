import { parseSection0 } from './section-0'
import { parseSection1 } from './section-1'
import { parseSection3 } from './section-3'
import { parseSection4 } from './section-4'
import { parseSection5 } from './section-5'
import { parseSection6 } from './section-6'
import { parseSection7 } from './section-7'
import { parseSection8 } from './section-8'

export const parseSection = (section: Buffer | null) => {
  if (!section) return null

  const first4Bytes = section.slice(0, 4)

  if (first4Bytes.toString() === 'GRIB') return parseSection0(section)
  if (first4Bytes.toString() === '7777') return parseSection8(section)

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
    case 5:
      return parseSection5(section)
    case 6:
      return parseSection6(section)
    case 7:
      return parseSection7(section)

    default:
      throw new Error(`Unknown section number: ${sectionNumber}`)
  }
}
