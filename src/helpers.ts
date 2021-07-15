/**
 *
 * @param data Buffer containing entire GRIB file
 * @returns Array of GRIB Chunk Buffers containing individual GRIB definitions in file
 */
export const splitGribChunks = (data: Buffer): Array<Buffer> => {
  if (data.length === 0) return []

  const length = Number(data.slice(8, 16).readBigUInt64BE())

  const gribData = data.slice(0, length)

  return [gribData, ...splitGribChunks(data.slice(length))]
}

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
    const length = sectionNumber === 0 ? 16 : currentSection.readUInt32BE()

    const section = currentSection.slice(0, length)
    currentSection = currentSection.slice(length)

    sections[sectionNumber] = section
  }

  return sections
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
