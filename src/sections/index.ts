import { parseSection0 } from './section-0'

export const parseSection = (section: Buffer) => {
  const first4Bytes = section.slice(0, 4)

  if (first4Bytes.toString() === 'GRIB') return parseSection0(section)
  if (first4Bytes.toString() === '7777') return 'OK'

  return null
}
