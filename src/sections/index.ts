import { getSectionNumber } from '../helpers'

import { IndicatorSection, parseSection0 } from './section-0'
import { IdentificationSection, parseSection1 } from './section-1'
import { LocalUseSection, parseSection2 } from './section-2'
import { GridDefinitionSection, parseSection3 } from './section-3'
import { ProductDefinitionSection, parseSection4 } from './section-4'
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

  const sectionNumber = getSectionNumber(section)

  switch (sectionNumber) {
    case 0:
      return parseSection0(section)
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
    case 8:
      return parseSection8(section)

    default:
      throw new Error(`Unknown section number: ${sectionNumber}`)
  }
}
