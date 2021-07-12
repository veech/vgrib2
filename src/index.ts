export const readGrib = (data: Buffer) => {
  const gribChunks = splitGribChunks(data)

  const parsedGribs = gribChunks.map(splitSectionChunks)

  return parsedGribs
}

const splitGribChunks = (data: Buffer): Array<Buffer> => {
  if (data.length === 0) return []

  const length = Number(data.slice(8, 16).readBigUInt64BE())

  const gribData = data.slice(0, length)

  return [gribData, ...splitGribChunks(data.slice(length))]
}

const splitSectionChunks = (data: Buffer): Array<Buffer> => {
  const first4Bytes = data.slice(0, 4)

  // First section is always 16 octets and starts with GRIB
  if (first4Bytes.toString() === 'GRIB') return [data.slice(0, 16), ...splitSectionChunks(data.slice(16))]
  // Final section should equal 7777
  if (first4Bytes.equals(Buffer.from('7777'))) return [data]

  const length = first4Bytes.readUInt32BE()

  const section = data.slice(0, length)

  return [section, ...splitSectionChunks(data.slice(length))]
}
