import { splitGribChunks, splitSectionChunks } from './helpers'

import { parseSections } from './sections'
import { convertData } from './data'
import { lookupSection3 } from './sections/section-3'

export const readGrib = (data: Buffer) => {
  const gribChunks = splitGribChunks(data)

  const parsedGribs = parseGribChunk(gribChunks[0])

  return parsedGribs
}

const parseGribChunk = (gribChunk: Buffer) => {
  const sectionChunks = splitSectionChunks(gribChunk)
  const sections = parseSections(sectionChunks)

  console.log(lookupSection3(sections[3]))

  const convertedData = convertData(sections[5], sections[7].data.data)

  return { data: convertedData }
}
