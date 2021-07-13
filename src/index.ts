import { parseSection } from './sections'

export const readGrib = (data: Buffer) => {
  const gribChunks = splitGribChunks(data)

  const parsedGribs = parseGribChunk(gribChunks[0])

  return parsedGribs
}

const splitGribChunks = (data: Buffer): Array<Buffer> => {
  if (data.length === 0) return []

  const length = Number(data.slice(8, 16).readBigUInt64BE())

  const gribData = data.slice(0, length)

  return [gribData, ...splitGribChunks(data.slice(length))]
}

const parseGribChunk = (data: Buffer) => {
  const sections = splitSectionChunks(data)
  const parsedSections = sections.map(parseSection)

  const grib = parsedSections.reduce((acc, section) => ({ ...acc, ...section.data }), {})

  return grib
}

const splitSectionChunks = (data: Buffer): Array<Buffer> => {
  const first4Bytes = data.slice(0, 4)

  // Final section should equal '7777'
  if (first4Bytes.equals(Buffer.from('7777'))) return [data]

  // First section length is always 16 bytes long and is identified by the first 4 bytes being 'GRIB'
  const length = first4Bytes.toString() === 'GRIB' ? 16 : first4Bytes.readUInt32BE()

  const section = data.slice(0, length)

  return [section, ...splitSectionChunks(data.slice(length))]
}
