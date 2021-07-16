import { lookupSections, parseSections, getSectionNumber } from './sections'

export class GRIB {
  /**
   * @param data Buffer containing entire GRIB file contents
   * @returns Parsed GRIB file object
   */
  static parse(data: Buffer) {
    const gribChunks = GRIB.splitGribChunks(data)

    const parsedGribs = gribChunks.map(gribChunk => {
      const sectionChunks = GRIB.splitSectionChunks(gribChunk)
      const sectionValues = parseSections(sectionChunks)
      const sections = lookupSections(sectionValues)

      const grib = {
        ...sections[0].contents,
        ...sections[1].contents,
        // ...sections[2].contents,
        ...sections[3].contents,
        ...sections[4].contents,
        ...sections[5].contents,
        ...sections[6].contents,
        ...sections[7].contents,
        ...sections[8].contents
      }

      return grib
    })

    return parsedGribs
  }

  /**
   *
   * @param data Buffer containing entire GRIB file contents
   * @returns Parsed GRIB file object with no values looked up (useful for adding new tables)
   */
  static parseNoLookup(data: Buffer) {
    const gribChunks = GRIB.splitGribChunks(data)

    const parsedGribs = gribChunks.map(gribChunk => {
      const sectionChunks = GRIB.splitSectionChunks(gribChunk)
      const sectionValues = parseSections(sectionChunks)

      const grib = {
        ...sectionValues[0].contents,
        ...sectionValues[1].contents,
        // ...sectionValues[2].contents,
        ...sectionValues[3].contents,
        ...sectionValues[4].contents,
        ...sectionValues[5].contents,
        ...sectionValues[6].contents,
        ...sectionValues[7].contents,
        ...sectionValues[8].contents
      }

      return grib
    })

    return parsedGribs
  }

  /**
   *
   * @param data Buffer containing entire GRIB file
   * @returns Array of GRIB Chunk Buffers containing individual GRIB definitions in file
   */
  private static splitGribChunks(data: Buffer): Array<Buffer> {
    if (data.length === 0) return []

    const length = Number(data.slice(8, 16).readBigUInt64BE())

    const gribData = data.slice(0, length)

    return [gribData, ...GRIB.splitGribChunks(data.slice(length))]
  }

  /**
   *
   * @param gribChunk Buffer containing individual GRIB definition
   * @returns Array of Section Buffers where the index of the item corresponds to the section number. If a section is missing, it will be represented as null
   */
  private static splitSectionChunks(gribChunk: Buffer): Array<Buffer | null> {
    const sections: Array<Buffer | null> = new Array(9).fill(null)

    let currentSection = gribChunk
    // Split sections in file
    while (currentSection.length !== 0) {
      const sectionNumber = getSectionNumber(currentSection)

      // First section length is always 16 bytes long and is identified by the first 4 bytes being 'GRIB'
      const length = sectionNumber === 0 ? 16 : currentSection.readUInt32BE()

      const section = currentSection.slice(0, length)
      currentSection = currentSection.slice(length)

      sections[sectionNumber] = section
    }

    return sections
  }
}
