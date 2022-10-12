import { Buffer } from 'buffer/'

import { DataRepresentationSectionValues } from '../sections/section-5'

import { simpleUnpacking } from './simple-unpacking'

/**
 * Converts data Buffer according to data representation section
 * @param drs Data Representation Section
 * @param data Data to be converted
 * @returns Converted data
 */
export const convertData = (drs: DataRepresentationSectionValues, data: Buffer) => {
  const { dataRepresentationTemplate } = drs.contents

  switch (dataRepresentationTemplate) {
    case 0:
      return simpleUnpacking(drs, data)

    default:
      throw new Error(`Template 7.${dataRepresentationTemplate} not defined`)
  }
}
