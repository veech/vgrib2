export const readGrib = (data: Buffer) => {
  const gribs = splitGribs(data)

  return gribs
}

const splitGribs = (data: Buffer): Array<Buffer> => {
  if (data.length === 0) return []

  const gribCoded = data.slice(0, 4).toString()

  if (gribCoded !== 'GRIB') throw new Error('Incorrectly Formatted GRIB')

  const length = Number(data.slice(8, 16).readBigUInt64BE())

  const gribData = data.slice(0, length)

  return [gribData, ...splitGribs(data.slice(length))]
}
