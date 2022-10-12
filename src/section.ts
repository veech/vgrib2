import { Buffer } from 'buffer/'

import { parseSection0, parseSection1, parseSection2, parseSection3, parseSection4, parseSection5, parseSection6, parseSection7, parseSection8 } from './sections'
import { lookupSection0, lookupSection1, lookupSection3, lookupSection4, lookupSection5, lookupSection7 } from './sections'

import { Sections, SectionValues } from './types/sections'

/**
 *
 * @param gribChunk Buffer containing individual GRIB definition
 * @returns Array of Section Buffers where the index of the item corresponds to the section number. If a section is missing, it will be represented as null
 */
export const splitSectionChunks = (gribChunk: Buffer): Array<Buffer | null> => {
  const sections: Array<Buffer | null> = new Array(9).fill(null)

  let currentSection = gribChunk
  // Split sections in file
  while (currentSection.length !== 0) {
    const sectionNumber = getSectionNumber(currentSection)

    // First section length is always 16 bytes long and is identified by the first 4 bytes being 'GRIB'
    const length = sectionNumber === 0 ? 16 : currentSection.readUInt32BE(0)

    const section = currentSection.slice(0, length)
    currentSection = currentSection.slice(length)

    sections[sectionNumber] = section
  }

  return sections
}

/**
 *
 * @param sections Array of GRIB Section Buffers
 * @returns Array of Parsed Sections where index corresponds to section number
 */
export const parseSections = (sections: Array<Buffer | null>) => {
  const parsedSections = sections.map(parseSection)

  return parsedSections as SectionValues
}

/**
 *
 * @param section Buffer containing GRIB Section data
 * @returns Parsed Section Values
 */
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

/**
 *
 * @param parsedSections Array of Parsed Sections
 * @returns Array of Sections with values looked up in tables
 */
export const lookupSections = (parsedSections: SectionValues) => {
  const [ins, ids, lus, gds, pds, drs, bms, ds, es] = parsedSections

  return [lookupSection0(ins), lookupSection1(ids), lus, lookupSection3(gds), lookupSection4(pds, ins, ids), lookupSection5(drs), bms, lookupSection7(ds, drs), es] as Sections
}

/**
 *
 * @param section Buffer containing GRIB Section data
 * @returns Section number of the input GRIB Section data
 */
export const getSectionNumber = (section: Buffer): number => {
  const first4Bytes = section.slice(0, 4)

  if (first4Bytes.toString() === 'GRIB') return 0
  if (first4Bytes.toString() === '7777') return 8

  const sectionNumber = section.readUInt8(4)

  return sectionNumber
}
