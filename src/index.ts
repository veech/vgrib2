import { splitGribChunks, splitSectionChunks } from './helpers'

import { parseSections } from './sections'

export const readGrib = (data: Buffer) => {
  const gribChunks = splitGribChunks(data)

  const parsedGribs = gribChunks.map(parseGribChunk)

  return parsedGribs
}

const parseGribChunk = (gribChunk: Buffer) => {
  const sectionChunks = splitSectionChunks(gribChunk)
  const sections = parseSections(sectionChunks)

  return sections
}
