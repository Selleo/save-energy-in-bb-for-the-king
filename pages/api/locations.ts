// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { BuildingType, InstallationType, Location, PlacementType, RoofMaterialType } from './location.type'

const locations: Location[] = [
  {
    address: {
      city: 'Bielsko Biała',
      street: 'Filarowa',
      number: '18',
      lat: '49.833664',
      long: '19.037327',
    },
    installations: [],
    buildings: [
      {
        roofArea: 300,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      }
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 30,
    estimatedDailyProduction: 40,
  },
  {
    address: {
      city: 'Bielsko Biała',
      street: 'Starobielska',
      number: '9',
      lat: '49.82965615',
      long: '19.03617025',
    },
    installations: [],
    buildings: [
      {
        roofArea: 400,
        roofMaterial: RoofMaterialType.Papa,
        type: BuildingType.Unit
      }
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 100,
    estimatedDailyProduction: 100,
  },
  {
    address: {
      city: 'Bielsko Biała',
      street: 'Mickiewicza',
      number: '31a',
      lat: '49.82760116',
      long: '19.04339766',
    },
    installations: [],
    buildings: [
      {
        roofArea: 100,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      }
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 10,
    estimatedDailyProduction: 10,
  },
  {
    address: {
      city: 'Bielsko Biała',
      street: 'Legionów',
      number: '34',
      lat: '49.82729079',
      long: '19.05502605',
    },
    installations: [],
    buildings: [
      {
        roofArea: 300,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      }
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 30,
    estimatedDailyProduction: 10,
  },
  {
    address: {
      city: 'Bielsko Biała',
      street: 'Podgórze',
      number: '24',
      lat: '49.80823027',
      long: '19.06566624',
    },
    installations: [],
    buildings: [
      {
        roofArea: 800,
        roofMaterial: RoofMaterialType.Papa,
        type: BuildingType.Unit
      }
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 340,
    estimatedDailyProduction: 120,
  },
  {
    address: {
      city: 'Bielsko Biała',
      street: 'Lipnicka',
      number: '164',
      lat: '49.81608356',
      long: '19.07765233',
    },
    installations: [],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Papa,
        type: BuildingType.House
      },
      {
        roofArea: 120,
        roofMaterial: RoofMaterialType.Papa,
        type: BuildingType.Garage
      }
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 12,
    estimatedDailyProduction: 120,
  },
  {
    address: {
      city: 'Bielsko Biała',
      street: 'Krakowska',
      number: '201',
      lat: '49.82341596',
      long: '19.0837012',
    },
    installations: [],
    buildings: [
      {
        roofArea: 300,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.House
      }
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 12,
    estimatedDailyProduction: 12,
  },
  {
    address: {
      city: 'Bielsko Biała',
      street: '',
      number: '',
      lat: '49.',
      long: '19.',
    },
    installations: [],
    buildings: [
      {
        roofArea: 300,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      }
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 30,
    estimatedDailyProduction: 40,
  },
  {
    address: {
      city: 'Bielsko Biała',
      street: 'Kępna',
      number: '21a',
      lat: '49.83850184',
      long: '19.08528727',
    },
    installations: [
      {
        createdAt: new Date('01/01/2019'),
        placement: PlacementType.Roof,
        production: 3.6,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 200,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.House
      }
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 18,
    estimatedDailyProduction: 20,
  },
  {
    address: {
      city: 'Bielsko Biała',
      street: 'Kępna',
      number: '19',
      lat: '49.83869901',
      long: '19.08503181',
    },
    installations: [
      {
        createdAt: new Date('01/01/2019'),
        placement: PlacementType.Roof,
        production: 3.8,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 330,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.House
      }
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 12,
    estimatedDailyProduction: 20,
  },
  {
    address: {
      city: 'Bielsko Biała',
      street: 'Józefa Braka',
      number: '35a',
      lat: '49.84700301',
      long: '19.08857075',
    },
    installations: [
      {
        createdAt: new Date('01/10/2019'),
        placement: PlacementType.Roof,
        production: 5.4,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 120,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.House
      }
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 11,
    estimatedDailyProduction: 20,
  },
  {
    address: {
      city: 'Bielsko Biała',
      street: 'Józefa Braka',
      number: '35a',
      lat: '49.84700301',
      long: '19.08857075',
    },
    installations: [
      {
        createdAt: new Date('01/10/2019'),
        placement: PlacementType.Roof,
        production: 5.4,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 120,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.House
      }
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 11,
    estimatedDailyProduction: 5,
  },
  {
    address: {
      city: 'Bielsko Biała',
      street: 'Żórawinowa',
      number: '14',
      lat: '49.85136481',
      long: '19.08348336',
    },
    installations: [
      {
        createdAt: new Date('01/10/2020'),
        placement: PlacementType.Roof,
        production: 8,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 120,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.House
      },
      {
        roofArea: 35,
        roofMaterial: RoofMaterialType.Papa,
        type: BuildingType.Garage
      }
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 10,
    estimatedDailyProduction: 5,
  },
  {
    address: {
      city: 'Bielsko Biała',
      street: 'Oksywka',
      number: '12',
      lat: '49.85720272',
      long: '19.08621996',
    },
    installations: [
      {
        createdAt: new Date('01/12/2020'),
        placement: PlacementType.Roof,
        production: 8,
        type: InstallationType.SolarPanels,
      },
      {
        createdAt: new Date('01/12/2020'),
        placement: PlacementType.Ground,
        production: 8,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 120,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.House
      },
      {
        roofArea: 80,
        roofMaterial: RoofMaterialType.Papa,
        type: BuildingType.Garage
      }
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 12,
    estimatedDailyProduction: 50,
  },
  {
    address: {
      city: 'Bielsko Biała',
      street: 'Jasna Rola',
      number: '111',
      lat: '49.85720272',
      long: '19.08621996',
    },
    installations: [],
    buildings: [
      {
        roofArea: 140,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.House
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 14,
    estimatedDailyProduction: 50,
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Location[]>
) {
  res.status(200).json(locations)
}
