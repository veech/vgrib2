import { splitGribChunks, splitSectionChunks } from './helpers'

import { parseSections } from './sections'
import { convertData } from './data'

export const readGrib = (data: Buffer) => {
  const gribChunks = splitGribChunks(data)

  const parsedGribs = gribChunks.map(parseGribChunk)

  return parsedGribs
}

const parseGribChunk = (gribChunk: Buffer) => {
  const sectionChunks = splitSectionChunks(gribChunk)
  const sections = parseSections(sectionChunks)

  const convertedData = convertData(sections[5], sections[7].data.data)

  return { data: convertedData }
}
