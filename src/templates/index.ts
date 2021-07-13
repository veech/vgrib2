import { template30 } from './template-3'

export const getTemplate = (templateNumber: string) => {
  switch (templateNumber) {
    case '3.0':
      return template30
    default:
      throw new Error(`No template definition for Templat ${templateNumber}`)
  }
}
