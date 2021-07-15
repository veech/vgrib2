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
}
