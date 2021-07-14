import { IndicatorSection, parseSection0 } from './section-0'
import { IdentificationSection, parseSection1 } from './section-1'
import { LocalUseSection, parseSection2 } from './section-2'
import { GridDefinitionSection, parseSection3 } from './section-3'
import { parseSection4, ProductDefinitionSection } from './section-4'
import { DataRepresentationSection, parseSection5 } from './section-5'
import { BitMapSection, parseSection6 } from './section-6'
import { DataSection, parseSection7 } from './section-7'
import { EndSection, parseSection8 } from './section-8'

export type ParsedSections = [
  IndicatorSection,
  IdentificationSection,
  LocalUseSection,
  GridDefinitionSection,
  ProductDefinitionSection,
  DataRepresentationSection,
  BitMapSection,
  DataSection,
  EndSection
]

export const parseSections = (sections: Array<Buffer | null>) => {
  const parsedSections = sections.map(parseSection)

  return parsedSections as ParsedSections
}

const parseSection = (section: Buffer | null) => {
  if (!section) return null

  const first4Bytes = section.slice(0, 4)

  if (first4Bytes.toString() === 'GRIB') return parseSection0(section)
  if (first4Bytes.toString() === '7777') return parseSection8(section)

  const sectionNumber = section.readUInt8(4)

  switch (sectionNumber) {
    case 1:
      return parseSection1(section)
    case 2:
      return parseSection2(section)
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
