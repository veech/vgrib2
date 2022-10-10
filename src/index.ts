import { splitGribChunks, createPacket } from './grib'
import { splitSectionChunks, parseSections, lookupSections } from './section'
import { GRIBPacket, GRIBPacketValues } from './types/grib'

/**
 * @param data Buffer containing entire GRIB file contents
 * @returns Parsed GRIB file object
 */
const parse = (data: Buffer | ArrayBuffer): Array<GRIBPacket> => {
  const buffer = Buffer.from(data)
  const gribChunks = splitGribChunks(buffer)

  const packets = gribChunks.map((gribChunk: Buffer) => {
    const sectionChunks = splitSectionChunks(gribChunk)
    const sectionValues = parseSections(sectionChunks)
    const sections = lookupSections(sectionValues)

    return createPacket(sections)
  })

  return packets
}

/**
 * @param data Buffer containing entire GRIB file contents
 * @returns Parsed GRIB file object with value numbers
 */
const parseNoLookup = (data: Buffer | ArrayBuffer): Array<GRIBPacketValues> => {
  const buffer = Buffer.from(data)
  const gribChunks = splitGribChunks(buffer)

  const packets = gribChunks.map((gribChunk: Buffer) => {
    const sectionChunks = splitSectionChunks(gribChunk)
    const sectionValues = parseSections(sectionChunks)

    return createPacket(sectionValues)
  })

  return packets
}

export const GRIB = { parse, parseNoLookup }

export * from './types/grib'
