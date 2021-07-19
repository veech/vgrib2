/**
 * Calculate Forecast Time
 * @param refTime Reference time of GRIB Packet
 * @param offset Number of units to offset the ref time by
 * @param unitOfTime unit of time of offset
 */
export const calculateForecastTime = (refTime: Date, offset: number, unitOfTime: string) => {
  switch (unitOfTime) {
    case 'Hour':
      return new Date(refTime.getTime() + offset * 1000 * 60 * 60)

    default:
      throw new Error(`Unable to calculate foercast time for unit: ${unitOfTime}`)
  }
}
