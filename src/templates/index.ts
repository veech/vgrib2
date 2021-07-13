import { template30 } from './template-3'

import { template42 } from './template-4'

import { template50 } from './template-5'

export const getTemplate = (templateNumber: string) => {
  switch (templateNumber) {
    case '3.0':
      return template30
    case '4.2':
      return template42
    case '5.0':
      return template50
    default:
      throw new Error(`No template definition for Template ${templateNumber}`)
  }
}
