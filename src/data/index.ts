import { Buffer } from 'buffer/'

import { DataRepresentationSectionValues } from '../sections/section-5'

import { simpleUnpacking } from './simple'
import { jpeg2000Unpacking } from './jpeg2000'
import { BitMapSectionValues } from '../sections'

/**
 * Converts data Buffer according to data representation section
 * @param drs Data Representation Section
 * @param data Data to be converted
 * @returns Converted data
 */
export const convertData = (drs: DataRepresentationSectionValues, bms:BitMapSectionValues, data: Buffer) => {
  const { dataRepresentationTemplate } = drs.contents

  switch (dataRepresentationTemplate) {
    case 0:
      return simpleUnpacking(drs, data)
    case 40:
      return jpeg2000Unpacking(drs, bms, data)
    default:
      throw new Error(`Template 7.${dataRepresentationTemplate} not defined`)
  }
}