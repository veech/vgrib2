import { GRIBPacket, GRIBPacketValues } from './types/grib'
import { Sections, SectionValues } from './types/sections'

/**
 *
 * @param data Buffer containing entire GRIB file
 * @returns Array of GRIB Chunk Buffers containing individual GRIB definitions in file
 */
export const splitGribChunks = (data: Buffer): Array<Buffer> => {
  if (data.length === 0) return []

  const length = Number(data.slice(8, 16).readBigUInt64BE())

  const gribData = data.slice(0, length)

  return [gribData, ...splitGribChunks(data.slice(length))]
}

export const createPacket = <T extends Sections | SectionValues>(sections: T) => {
  return {
    ...sections[0].contents,
    ...sections[1].contents,
    // ...sections[2].contents,
    ...sections[3].contents,
    ...sections[4].contents,
    ...sections[5].contents,
    ...sections[6].contents,
    ...sections[7].contents,
    ...sections[8].contents
  } as T extends Sections ? GRIBPacket : GRIBPacketValues
}
