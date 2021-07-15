import { splitGribChunks, splitSectionChunks } from './helpers'

import { lookupSections, parseSections } from './sections'

export const readGrib = (data: Buffer) => {
  const gribChunks = splitGribChunks(data)

  const parsedGribs = gribChunks.map(parseGribChunk)

  return parsedGribs
}

const parseGribChunk = (gribChunk: Buffer) => {
  const sectionChunks = splitSectionChunks(gribChunk)
  const sectionValues = parseSections(sectionChunks)
  const sections = lookupSections(sectionValues)

  return sections
}
