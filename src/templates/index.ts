import { template30 } from './template-3'

import { template42 } from './template-4'

export const getTemplate = (templateNumber: string) => {
  switch (templateNumber) {
    case '3.0':
      return template30
    case '4.2':
      return template42
    default:
      throw new Error(`No template definition for Template ${templateNumber}`)
  }
}
