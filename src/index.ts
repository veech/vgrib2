import { parseSection } from './sections'

import { splitGribChunks, splitSectionChunks } from './helpers'

export const readGrib = (data: Buffer) => {
  const gribChunks = splitGribChunks(data)

  const parsedGribs = parseGribChunk(gribChunks[0])

  return parsedGribs
}

const parseGribChunk = (data: Buffer) => {
  const sections = splitSectionChunks(data)

  const parsedSections = sections.map(parseSection)

  return parsedSections
}
