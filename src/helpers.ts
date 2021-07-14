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
  const sections: Array<Buffer> = []

  let currentSection = gribChunk
  // Split sections in file
  while (currentSection.length !== 0) {
    const first4Bytes = currentSection.slice(0, 4)

    // First section length is always 16 bytes long and is identified by the first 4 bytes being 'GRIB'
    const length = first4Bytes.toString() === 'GRIB' ? 16 : first4Bytes.readUInt32BE()

    const section = currentSection.slice(0, length)
    sections.push(section)

    currentSection = currentSection.slice(length)
  }

  const allSections: Array<Buffer | null> = [...sections]

  const missingSections = getMissingSections(sections)
  missingSections.forEach(sectionNumber => allSections.splice(sectionNumber, 0, null))

  return allSections
}

/**
 *
 * @param sections Array of Section Buffers where sections are in order but could have missing sections
 * @returns Array of section numbers that are missing from the input array
 */
export const getMissingSections = (sections: Array<Buffer>): Array<number> => {
  const missingSections: Array<number> = []

  sections.forEach((section, index) => {
    const sectionNumber = getSectionNumber(section)
    if (sectionNumber > index + missingSections.length) missingSections.push(index)
  })

  return missingSections
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
