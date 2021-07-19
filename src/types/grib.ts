import {
  IndicatorSection,
  IdentificationSection,
  GridDefinitionSection,
  ProductDefinitionSection,
  DataRepresentationSection,
  BitMapSection,
  DataSection,
  EndSection
} from '../sections'

import {
  IndicatorSectionValues,
  IdentificationSectionValues,
  GridDefinitionSectionValues,
  ProductDefinitionSectionValues,
  DataRepresentationSectionValues,
  BitMapSectionValues,
  DataSectionValues,
  EndSectionValues
} from '../sections'

export type GRIBPacket = IndicatorSection['contents'] &
  IdentificationSection['contents'] &
  GridDefinitionSection['contents'] &
  ProductDefinitionSection['contents'] &
  DataRepresentationSection['contents'] &
  BitMapSection['contents'] &
  DataSection['contents'] &
  EndSection['contents']

export type GRIBPacketValues = IndicatorSectionValues['contents'] &
  IdentificationSectionValues['contents'] &
  GridDefinitionSectionValues['contents'] &
  ProductDefinitionSectionValues['contents'] &
  DataRepresentationSectionValues['contents'] &
  BitMapSectionValues['contents'] &
  DataSectionValues['contents'] &
  EndSectionValues['contents']
