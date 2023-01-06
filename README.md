[![npm version](https://badge.fury.io/js/vgrib2.svg)](https://badge.fury.io/js/vgrib2)

# vgrib2

A library for parsing GRIB files written entirely in Typescript

## Installation

```
$ npm install vgrib2
```

## Usage

### Parse GRIB File

```typescript
import fs from 'fs'
import { GRIB } from 'vgrib2'

const gribFile = fs.readFileSync('./path/to/file.grib2')

const grib = GRIB.parse(gribFile)
// Lookup grid data point from the first packet
const point = GRIB.lookupDataPoint(grib[0], -39.75, 146.15)
// No Table Lookup (useful for adding new tables)
const gribNoLookup = GRIB.parseNoLookup(gribFile)
```

# Tables

List of tables that have been ported from [GRIB2 Doc](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/)

## Table 0

| Table Name                               | Status |
| ---------------------------------------- | :----: |
| Table 0.0 - Discipline of Processed Data |   ✅   |

## Table 1

| Table Name                                    | Status |
| --------------------------------------------- | :----: |
| Table 1.0 - GRIB Master Tables Version Number |   ❌   |
| Table 1.1 - GRIB Local Tables Version Number  |   ❌   |
| Table 1.2 - Significance of Reference Time    |   ✅   |
| Table 1.3 - Production Status of Data         |   ❌   |
| Table 1.4 - Type of Data                      |   ✅   |
| Table 1.5 - Identification Template Number    |   ❌   |
| Table 1.6 - Type of Calendar                  |   ❌   |

## Table 2

N/A

## Table 3

| Table Name                                                         | Status |
| ------------------------------------------------------------------ | :----: |
| Table 3.0 - Source of Grid Definition                              |   ❌   |
| Table 3.1 - Grid Definition Template Number                        |   ✅   |
| Table 3.2 - Shape of the Reference System                          |   ✅   |
| Table 3.3 - Resolution and Component Flags                         |   ❌   |
| Table 3.4 - Scanning Mode                                          |   ❌   |
| Table 3.5 - Projection Center                                      |   ❌   |
| Table 3.6 - Spectral Data Representation Type                      |   ❌   |
| Table 3.7 - Spectral Data Representation Mode                      |   ❌   |
| Table 3.8 - Grid Point Position                                    |   ❌   |
| Table 3.9 - Numbering Order of Diamonds                            |   ❌   |
| Table 3.10 - Scanning Mode for One Diamond                         |   ❌   |
| Table 3.11 - Interpretation of List of Numbers at end of section 3 |   ❌   |
| Table 3.15 - Physical Meaning of Vertical Coordinate               |   ❌   |
| Table 3.20 - Type of Horizontal Line                               |   ❌   |
| Table 3.21 - Vertical Dimension Coordinate Values Definition       |   ❌   |

## Table 4

| Table Name                                                                | Status |
| ------------------------------------------------------------------------- | :----: |
| Table 4.0 - Product Definition Template Number                            |   ✅   |
| Table 4.1 - Parameter Category by Product Discipline                      |   ✅   |
| Table 4.2 - Parameter Number by Product Discipline and Parameter Category |   ✅   |
| Table 4.3 - Type of Generating Process                                    |   ✅   |
| Table 4.4 - Indicator of Unit of Time Range                               |   ✅   |
| Table 4.5 - Fixed Surface Types and Units                                 |   ✅   |
| Table 4.6 - Type of Ensemble Forecast                                     |   ❌   |
| Table 4.7 - Derived Forecast                                              |   ❌   |
| Table 4.8 - Clustering Method                                             |   ❌   |
| Table 4.9 - Probability Type                                              |   ❌   |
| Table 4.10 - Type of Statistical Processing                               |   ❌   |
| Table 4.11 - Type of Time Intervals                                       |   ❌   |
| Table 4.12 - Operating Mode                                               |   ❌   |
| Table 4.13 - Quality Control Indicator                                    |   ❌   |
| Table 4.14 - Clutter Filter Indicator                                     |   ❌   |
| Table 4.15 - Type of Spatial Processing used                              |   ❌   |
| Table 4.16 - Quality Value Associated with Parameter                      |   ❌   |
| Table 4.91 - Type of Interval                                             |   ❌   |
| Table 4.201 - Precipitation Type                                          |   ❌   |
| Table 4.202 - Precipitable Water Category                                 |   ❌   |
| Table 4.203 - Cloud Type                                                  |   ❌   |
| Table 4.204 - Thunderstorm Coverage                                       |   ❌   |
| Table 4.205 - Presence of Aerosol                                         |   ❌   |
| Table 4.206 - Volcanic Ash                                                |   ❌   |
| Table 4.207 - Icing                                                       |   ❌   |
| Table 4.208 - Turbulence                                                  |   ❌   |
| Table 4.209 - Planetary Boundary-Layer Regime                             |   ❌   |
| Table 4.210 - Contrail Intensity                                          |   ❌   |
| Table 4.211 - Contrail Engine Type                                        |   ❌   |
| Table 4.212 - Land Use                                                    |   ❌   |
| Table 4.213 - Soil Type                                                   |   ❌   |
| Table 4.215 - Remotely Sensed Snow Coverage                               |   ❌   |
| Table 4.216 - Elevation of Snow Covered Terrain                           |   ❌   |
| Table 4.217 - Cloud Mask Type                                             |   ❌   |
| Table 4.218 - Pixel Scene Type                                            |   ❌   |
| Table 4.219 - Cloud Top Height Quality Indicator                          |   ❌   |
| Table 4.220 - Horizontal Dimension Processed                              |   ❌   |
| Table 4.221 - Treatment of Missing Data                                   |   ❌   |
| Table 4.222 - Categorical Result                                          |   ❌   |
| Table 4.223 - Fire Detection Indicator                                    |   ❌   |
| Table 4.224 - Categorical Outlook                                         |   ❌   |
| Table 4.225 - Weather                                                     |   ❌   |
| Table 4.227 - Icing Scenario (Weather/Cloud Classification)               |   ❌   |
| Table 4.230 - Atmospheric Chemical or Physical Type                       |   ❌   |
| Table 4.233 - Aerosol Type                                                |   ❌   |
| Table 4.234 - Canopy Cover Fraction                                       |   ❌   |
| Table 4.235 - Wave-Generated Wave Spectral Description                    |   ❌   |
| Table 4.236 - Soil Texture Cover Fraction                                 |   ❌   |
| Table 4.240 - Type of Distribution Function                               |   ❌   |
| Table 4.241 - Coverage Attributes                                         |   ❌   |
| Table 4.242 - Tile Classification                                         |   ❌   |
| Table 4.243 - Tile Class                                                  |   ❌   |
| Table 4.244 - Quality Indicator                                           |   ❌   |

## Table 4.2-X-X

### Discipline 0 - Meteorological products

| Table Name                                         | Status |
| -------------------------------------------------- | :----: |
| Table 4.2-0-0 - Temperature                        |   ✅   |
| Table 4.2-0-1 - Moisture                           |   ❌   |
| Table 4.2-0-2 - Momentum                           |   ✅   |
| Table 4.2-0-3 - Mass                               |   ❌   |
| Table 4.2-0-4 - Short wave radiation               |   ❌   |
| Table 4.2-0-5 - Long wave radiation                |   ❌   |
| Table 4.2-0-6 - Cloud                              |   ❌   |
| Table 4.2-0-7 - Thermodynamic stability indices    |   ❌   |
| Table 4.2-0-13 - Aerosols                          |   ❌   |
| Table 4.2-0-14 - Trace gases (e.g. Ozone, CO2)     |   ❌   |
| Table 4.2-0-15 - Radar                             |   ❌   |
| Table 4.2-0-16 - Forecast Radar Imagery            |   ❌   |
| Table 4.2-0-17 - Electrodynamics                   |   ❌   |
| Table 4.2-0-18 - Nuclear/radiology                 |   ❌   |
| Table 4.2-0-19 - Physical atmospheric Properties   |   ❌   |
| Table 4.2-0-20 - Atmospheric Chemical Constituents |   ❌   |
| Table 4.2-0-190 - CCITT IA5 string                 |   ❌   |
| Table 4.2-0-191 - Miscellaneous                    |   ❌   |

### Discipline 1 - Hydrologic products

| Table Name                                           | Status |
| ---------------------------------------------------- | :----: |
| Table 4.2-1-0 - Hydrology Basic                      |   ❌   |
| Table 4.2-1-1 - Hydrology Probabilities              |   ❌   |
| Table 4.2-1-2 - Inland Water and Sediment Properties |   ❌   |

### Discipline 2 - Land Surface products

| Table Name                                                 | Status |
| ---------------------------------------------------------- | :----: |
| Table 4.2-2-0 - Vegetation/Biomass                         |   ❌   |
| Table 4.2-2-1 - Agricultural/aquacultural special products |   ❌   |
| Table 4.2-2-2 - Transportation related products            |   ❌   |
| Table 4.2-2-3 - Soil Products                              |   ❌   |
| Table 4.2-2-4 - Fire Weather Products                      |   ❌   |
| Table 4.2-2-5 - Glaciers and Inland Ice Products           |   ❌   |

### Discipline 3 - Space products

| Table Name                              | Status |
| --------------------------------------- | :----: |
| Table 4.2-3-0 - Image format Products   |   ❌   |
| Table 4.2-3-1 - Quantitative Products   |   ❌   |
| Table 4.2-3-2 - Cloud Properties        |   ❌   |
| Table 4.2-3-3 - Flight Rules Conditions |   ❌   |
| Table 4.2-3-4 - Volcanic Ash            |   ❌   |
| Table 4.2-3-5 - Sea-surface Temperatur  |   ❌   |
| Table 4.2-3-6 - Solar radiation         |   ❌   |

### Discipline 4 - Space Weather products

| Table Name                                            | Status |
| ----------------------------------------------------- | :----: |
| Table 4.2-4-0 - Temperature                           |   ❌   |
| Table 4.2-4-1 - Momentum                              |   ❌   |
| Table 4.2-4-2 - Charged Particle Mass and Number      |   ❌   |
| Table 4.2-4-3 - Electric and Magnetic Fields          |   ❌   |
| Table 4.2-4-4 - Energetic Particles                   |   ❌   |
| Table 4.2-4-5 - Waves                                 |   ❌   |
| Table 4.2-4-6 - Solar Electromagnetic Emissions       |   ❌   |
| Table 4.2-4-7 - Terrestrial Electromagnetic Emissions |   ❌   |
| Table 4.2-4-8 - Imagery                               |   ❌   |
| Table 4.2-4-9 - Ion-Neutral Coupling                  |   ❌   |

### Discipline 10 - Oceanographic products

| Table Name                              | Status |
| --------------------------------------- | :----: |
| Table 4.2-10-0 - Waves                  |   ❌   |
| Table 4.2-10-1 - Currents               |   ❌   |
| Table 4.2-10-2 - Ice                    |   ❌   |
| Table 4.2-10-3 - Surface Properties     |   ❌   |
| Table 4.2-10-4 - Sub-surface Properties |   ❌   |

## Table 5

| Table Name                                               | Status |
| -------------------------------------------------------- | :----: |
| Table 5.0 - Data Representation Template Number          |   ✅   |
| Table 5.1 - Type of Original Field Values                |   ✅   |
| Table 5.2 - Matrix Coordinate Value Function Definition  |   ❌   |
| Table 5.3 - Matrix Coordinate Parameter                  |   ❌   |
| Table 5.4 - Group Splitting Method                       |   ❌   |
| Table 5.5 - Missing Value Management for Complex Packing |   ❌   |
| Table 5.6 - Order of Spatial Differencing                |   ❌   |
| Table 5.7 - Precision of Floating Point Numbers          |   ❌   |
| Table 5.40 - Type of Compression                         |   ❌   |

## Table 6

| Table Name                    | Status |
| ----------------------------- | :----: |
| Table 6.0 - Bit Map Indicator |   ❌   |

## Table 7

| Table Name                       | Status |
| -------------------------------- | :----: |
| Table 7.0 - Data Template Number |   ❌   |
