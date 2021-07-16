import { lookupSections, parseSection, splitSectionChunks } from './section'
import { SectionValues } from './types/sections'

/**
 * @param data Buffer containing entire GRIB file contents
 * @returns Parsed GRIB file object
 */
export const parse = (data: Buffer) => {
  const gribChunks = splitGribChunks(data)

  const parsedGribs = gribChunks.map(gribChunk => {
    const sectionChunks = splitSectionChunks(gribChunk)

    const sectionValues = sectionChunks.map(parseSection) as SectionValues
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
 * @param data Buffer containing entire GRIB file
 * @returns Array of GRIB Chunk Buffers containing individual GRIB definitions in file
 */
const splitGribChunks = (data: Buffer): Array<Buffer> => {
  if (data.length === 0) return []

  const length = Number(data.slice(8, 16).readBigUInt64BE())

  const gribData = data.slice(0, length)

  return [gribData, ...splitGribChunks(data.slice(length))]
}
