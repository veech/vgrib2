import { Buffer } from 'buffer/'

import { splitGribChunks, createPacket } from './grib'
import { splitSectionChunks, parseSections, lookupSections } from './section'
import { GRIBPacket, GRIBPacketValues } from './types/grib'

/**
 * @param data Buffer containing entire GRIB file contents
 * @returns Parsed GRIB file object
 */
const parse = (data: ArrayBuffer): Array<GRIBPacket> => {
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
const parseNoLookup = (data: ArrayBuffer): Array<GRIBPacketValues> => {
  const buffer = Buffer.from(data)
  const gribChunks = splitGribChunks(buffer)

  const packets = gribChunks.map((gribChunk: Buffer) => {
    const sectionChunks = splitSectionChunks(gribChunk)
    const sectionValues = parseSections(sectionChunks)

    return createPacket(sectionValues)
  })

  return packets
}

/**
 * Lookup data point from GRIB packet based on lat/lon coordinates.
 *
 * @param packet GRIB packet
 * @param lat Latitude
 * @param lon Longitude
 */
const lookupDataPoint = (packet: GRIBPacket, lat: number, lon: number): number | null => {
  const { la1, lo1, la2, lo2, dx, dy, ny } = packet.gridDefinition
  if (lat < la1 || lat > la2 || lon < lo1 || lon > lo2) return null

  // lon (W-E) is x
  // lat (N-S) is y
  const x = Math.abs(Math.round((lo1 - lon) / dx))
  const y = Math.abs(Math.round((la1 - lat) / dy))

  const idx = y * ny + x
  return packet.data[idx]
}

export const GRIB = { parse, parseNoLookup, lookupDataPoint }

export * from './types/grib'
