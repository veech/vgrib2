import { getSectionNumber } from '../helpers'

import { IndicatorSection, IndicatorSectionValues, lookupSection0, parseSection0 } from './section-0'
import { IdentificationSection, IdentificationSectionValues, lookupSection1, parseSection1 } from './section-1'
import { LocalUseSection, LocalUseSectionValues, parseSection2 } from './section-2'
import { GridDefinitionSection, GridDefinitionSectionValues, lookupSection3, parseSection3 } from './section-3'
import { ProductDefinitionSectionValues, parseSection4, lookupSection4, ProductDefinitionSection } from './section-4'
import { DataRepresentationSection, DataRepresentationSectionValues, lookupSection5, parseSection5 } from './section-5'
import { BitMapSection, BitMapSectionValues, parseSection6 } from './section-6'
import { DataSection, DataSectionValues, lookupSection7, parseSection7 } from './section-7'
import { EndSection, EndSectionValues, parseSection8 } from './section-8'

export type ParsedSections = [
  IndicatorSectionValues,
  IdentificationSectionValues,
  LocalUseSectionValues,
  GridDefinitionSectionValues,
  ProductDefinitionSectionValues,
  DataRepresentationSectionValues,
  BitMapSectionValues,
  DataSectionValues,
  EndSectionValues
]

export type LookedupSections = [
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

export const lookupSections = (parsedSections: ParsedSections) => {
  const [ins, ids, lus, gds, pds, drs, bms, ds, es] = parsedSections

  return [lookupSection0(ins), lookupSection1(ids), lus, lookupSection3(gds), lookupSection4(pds, ins), lookupSection5(drs), bms, lookupSection7(ds, drs), es] as LookedupSections
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
