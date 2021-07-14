// import { parseSection } from './sections'

export const readGrib = (data: Buffer) => {
  const gribChunks = splitGribChunks(data)

  const parsedGribs = parseGribChunk(gribChunks[0])

  return parsedGribs
}

const splitGribChunks = (data: Buffer): Array<Buffer> => {
  if (data.length === 0) return []

  const length = Number(data.slice(8, 16).readBigUInt64BE())

  const gribData = data.slice(0, length)

  return [gribData, ...splitGribChunks(data.slice(length))]
}

const parseGribChunk = (data: Buffer) => {
  const sections = splitSectionChunks(data)

  return sections
}

const splitSectionChunks = (data: Buffer): Array<Buffer | null> => {
  const sections: Array<Buffer> = []

  let currentSection = data
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

const getMissingSections = (sections: Array<Buffer>) => {
  const missingSections: Array<number> = []

  sections.forEach((section, index) => {
    const sectionNumber = getSectionNumber(section)
    if (sectionNumber > index + missingSections.length) missingSections.push(index)
  })

  return missingSections
}

const getSectionNumber = (section: Buffer) => {
  const first4Bytes = section.slice(0, 4)

  if (first4Bytes.toString() === 'GRIB') return 0
  if (first4Bytes.toString() === '7777') return 8

  const sectionNumber = section.readUInt8(4)

  return sectionNumber
}
