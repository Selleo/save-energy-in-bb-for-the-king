// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { BuildingType, InstallationType, Location, PlacementType, RoofMaterialType } from './location.type'

const locations: Location[] = [
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Filarowa',
      number: '18',
      lat: '49.833664',
      long: '19.037327',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
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
    estimatedYearlyProduction: 30,
    estimatedYearlyConsumption: 30,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Starobielska',
      number: '9',
      lat: '49.82965615',
      long: '19.03617025',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
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
    estimatedYearlyProduction: 100,
    estimatedYearlyConsumption: 100,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Mickiewicza',
      number: '31a',
      lat: '49.82760116',
      long: '19.04339766',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
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
    estimatedYearlyProduction: 10,
    estimatedYearlyConsumption: 10,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Legionów',
      number: '34',
      lat: '49.82729079',
      long: '19.05502605',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
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
    estimatedYearlyProduction: 30,
    estimatedYearlyConsumption: 30,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Podgórze',
      number: '24',
      lat: '49.80823027',
      long: '19.06566624',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
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
    estimatedYearlyProduction: 340,
    estimatedYearlyConsumption: 340,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Lipnicka',
      number: '164',
      lat: '49.81608356',
      long: '19.07765233',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
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
    estimatedYearlyProduction: 12,
    estimatedYearlyConsumption: 12,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Krakowska',
      number: '201',
      lat: '49.82341596',
      long: '19.0837012',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
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
    estimatedDailyProduction: 0,
    estimatedYearlyProduction: 12,
    estimatedYearlyConsumption: 12,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
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
    estimatedYearlyProduction: 18,
    estimatedYearlyConsumption: 18,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
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
    estimatedYearlyProduction: 12,
    estimatedYearlyConsumption: 12,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
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
    estimatedYearlyProduction: 11,
    estimatedYearlyConsumption: 11,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
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
    estimatedYearlyProduction: 11,
    estimatedYearlyConsumption: 11,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Żurawinowa',
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
    estimatedYearlyProduction: 10,
    estimatedYearlyConsumption: 10,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
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
    estimatedYearlyProduction: 12,
    estimatedYearlyConsumption: 12,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Jasna Rola',
      number: '111',
      lat: '49.85720272',
      long: '19.08621996',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
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
    estimatedDailyProduction: 0,
    estimatedYearlyProduction: 14,
    estimatedYearlyConsumption: 14,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Żywiecka',
      number: '23',
      lat: '49.81723614',
      long: '19.05579815',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 120,
        roofMaterial: RoofMaterialType.Papa,
        type: BuildingType.House
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 14,
    estimatedDailyProduction: 0,
    estimatedYearlyProduction: 14,
    estimatedYearlyConsumption: 14,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Władysława Broniewskiego',
      number: '21',
      lat: '49.81843914',
      long: '19.05252062',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 30,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 800,
        roofMaterial: RoofMaterialType.Blacha,
        type: BuildingType.Unit
      },
      {
        roofArea: 100,
        roofMaterial: RoofMaterialType.Papa,
        type: BuildingType.Unit
      }
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 150,
    estimatedDailyProduction: 38,
    estimatedYearlyProduction: 150,
    estimatedYearlyConsumption: 150,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Helmunta Kajzara',
      number: '22',
      lat: '49.81403732',
      long: '19.06504764',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.House
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 15,
    estimatedDailyProduction: 60,
    estimatedYearlyProduction: 15,
    estimatedYearlyConsumption: 15,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Krakowska',
      number: '2',
      lat: '49.82209138',
      long: '19.05903656',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.House
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 200,
    estimatedDailyProduction: 200,
    estimatedYearlyProduction: 200,
    estimatedYearlyConsumption: 200,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Wałowa',
      number: '21',
      lat: '49.82577898',
      long: '19.04689129',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 200,
    estimatedDailyProduction: 150,
    estimatedYearlyProduction: 200,
    estimatedYearlyConsumption: 200,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Warszawska',
      number: '28',
      lat: '49.83242004',
      long: '19.04343466',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 250,
    estimatedDailyProduction: 500,
    estimatedYearlyProduction: 250,
    estimatedYearlyConsumption: 250,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Michała Grażyńskiego',
      number: '141',
      lat: '49.84235753',
      long: '19.04586378',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 2500,
    estimatedDailyProduction: 500,
    estimatedYearlyProduction: 2500,
    estimatedYearlyConsumption: 2500,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Michała Grażyńskiego',
      number: '141',
      lat: '49.84716353',
      long: '19.04315163',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 2500,
    estimatedDailyProduction: 500,
    estimatedYearlyProduction: 2500,
    estimatedYearlyConsumption: 2500,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Wajedoty',
      number: '50',
      lat: '49.84747552',
      long: '19.05632368',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 250,
    estimatedDailyProduction: 500,
    estimatedYearlyProduction: 250,
    estimatedYearlyConsumption: 250,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Zawilców',
      number: '14',
      lat: '49.83900429',
      long: '19.05921184',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 280,
    estimatedDailyProduction: 300,
    estimatedYearlyProduction: 280,
    estimatedYearlyConsumption: 280,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Krzysztofa Kamila Baczyńskiego',
      number: '8',
      lat: '49.8404155',
      long: '19.06689997',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 50,
    estimatedDailyProduction: 51,
    estimatedYearlyProduction: 50,
    estimatedYearlyConsumption: 50,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Braterska',
      number: '68',
      lat: '49.84873202',
      long: '19.06622118',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 50,
    estimatedDailyProduction: 60,
    estimatedYearlyProduction: 50,
    estimatedYearlyConsumption: 50,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Ignacego Daszyńskiego',
      number: '56',
      lat: '49.85056081',
      long: '19.0509084',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 50,
    estimatedDailyProduction: 49,
    estimatedYearlyProduction: 50,
    estimatedYearlyConsumption: 50,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Komorowicka',
      number: '211',
      lat: '49.85215349',
      long: '19.03988069',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 51,
    estimatedDailyProduction: 70,
    estimatedYearlyProduction: 51,
    estimatedYearlyConsumption: 51,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Węglowa',
      number: '85',
      lat: '49.84872544',
      long: '19.03625473',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 51,
    estimatedDailyProduction: 80,
    estimatedYearlyProduction: 51,
    estimatedYearlyConsumption: 51,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Wincentego Witosa',
      number: '7',
      lat: '49.84064786',
      long: '19.08133531',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 51,
    estimatedDailyProduction: 75,
    estimatedYearlyProduction: 51,
    estimatedYearlyConsumption: 51,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Wyzwolenia',
      number: '113',
      lat: '49.83714174',
      long: '19.07311124',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 51,
    estimatedDailyProduction: 49,
    estimatedYearlyProduction: 51,
    estimatedYearlyConsumption: 51,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Oliwkowa',
      number: '23',
      lat: '49.83611677',
      long: '19.08124739',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 51,
    estimatedDailyProduction: 150,
    estimatedYearlyProduction: 51,
    estimatedYearlyConsumption: 51,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Chryzantemowa',
      number: '5',
      lat: '49.83453356',
      long: '19.08011335',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 51,
    estimatedDailyProduction: 150,
    estimatedYearlyProduction: 51,
    estimatedYearlyConsumption: 51,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Wyzwolenia',
      number: '84',
      lat: '49.8287834',
      long: '19.07122792',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 2000,
    estimatedDailyProduction: 150,
    estimatedYearlyProduction: 2000,
    estimatedYearlyConsumption: 2000,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Krakowska',
      number: '91',
      lat: '49.82119245',
      long: '19.07254685',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 20,
    estimatedDailyProduction: 150,
    estimatedYearlyProduction: 20,
    estimatedYearlyConsumption: 20,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Lipnicka',
      number: '228',
      lat: '49.818645',
      long: '19.08448368',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 200,
    estimatedDailyProduction: 150,
    estimatedYearlyProduction: 200,
    estimatedYearlyConsumption: 200,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Sarni Stok',
      number: '93',
      lat: '49.84246521',
      long: '19.02918617',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 2000,
    estimatedDailyProduction: 0,
    estimatedYearlyProduction: 2000,
    estimatedYearlyConsumption: 2000,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Pienińska',
      number: '98B',
      lat: '49.83737996',
      long: '19.02028091',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 20,
    estimatedDailyProduction: 0,
    estimatedYearlyProduction: 20,
    estimatedYearlyConsumption: 20,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Pienińska',
      number: '31',
      lat: '49.83088281',
      long: '19.0217907',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 20,
    estimatedDailyProduction: 40,
    estimatedYearlyProduction: 20,
    estimatedYearlyConsumption: 20,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'hetm. Jana Zamoyskiego',
      number: '26',
      lat: '49.82327762',
      long: '19.02820983',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 20,
    estimatedDailyProduction: 40,
    estimatedYearlyProduction: 20,
    estimatedYearlyConsumption: 20,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Marcina Lutra',
      number: '8',
      lat: '49.8228307',
      long: '19.04001318',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 20,
    estimatedDailyProduction: 80,
    estimatedYearlyProduction: 20,
    estimatedYearlyConsumption: 20,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Młyńska',
      number: '6',
      lat: '49.80964339',
      long: '19.05268377',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 20,
    estimatedDailyProduction: 150,
    estimatedYearlyProduction: 20,
    estimatedYearlyConsumption: 20,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Młyńska',
      number: '45',
      lat: '49.81176155',
      long: '19.04218915',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 20,
    estimatedDailyProduction: 150,
    estimatedYearlyProduction: 20,
    estimatedYearlyConsumption: 20,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Aleksandrowicka',
      number: '18',
      lat: '49.81450008',
      long: '19.0300332',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 20,
    estimatedDailyProduction: 150,
    estimatedYearlyProduction: 20,
    estimatedYearlyConsumption: 20,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Doliny Miętusiej',
      number: '8',
      lat: '49.80222569',
      long: '19.03453378',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 5000,
    estimatedDailyProduction: 80,
    estimatedYearlyProduction: 5000,
    estimatedYearlyConsumption: 5000,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Pięciu Stawów',
      number: '5',
      lat: '49.80612955',
      long: '19.03495403',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 2000,
    estimatedDailyProduction: 0,
    estimatedYearlyProduction: 2000,
    estimatedYearlyConsumption: 2000,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Partyzantów',
      number: '63',
      lat: '49.80632313',
      long: '19.04327058',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 2000,
    estimatedDailyProduction: 80,
    estimatedYearlyProduction: 2000,
    estimatedYearlyConsumption: 2000,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Bystrzańska',
      number: '38',
      lat: '49.79275891',
      long: '19.05509163',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 20,
    estimatedDailyProduction: 80,
    estimatedYearlyProduction: 20,
    estimatedYearlyConsumption: 20,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Przełom',
      number: '1b',
      lat: '49.79431067',
      long: '19.0505593',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 20,
    estimatedDailyProduction: 80,
    estimatedYearlyProduction: 20,
    estimatedYearlyConsumption: 20,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Barska',
      number: '25',
      lat: '49.79976068',
      long: '19.05837273',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 200,
    estimatedDailyProduction: 80,
    estimatedYearlyProduction: 200,
    estimatedYearlyConsumption: 200,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Miodowa',
      number: '15',
      lat: '49.79874935',
      long: '19.06546566',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 20,
    estimatedDailyProduction: 80,
    estimatedYearlyProduction: 20,
    estimatedYearlyConsumption: 20,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Miernicza',
      number: '35',
      lat: '49.80579465',
      long: '19.07755976',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 20,
    estimatedDailyProduction: 800,
    estimatedYearlyProduction: 20,
    estimatedYearlyConsumption: 20,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Kaliska',
      number: '55',
      lat: '49.81265835',
      long: '19.08514522',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 20,
    estimatedDailyProduction: 20,
    estimatedYearlyProduction: 20,
    estimatedYearlyConsumption: 20,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Wielkopolska',
      number: '28',
      lat: '49.81521999',
      long: '19.09476451',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 200,
    estimatedDailyProduction: 80,
    estimatedYearlyProduction: 200,
    estimatedYearlyConsumption: 200,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Polna',
      number: '81c',
      lat: '49.8231589',
      long: '19.09638233',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 20,
    estimatedDailyProduction: 80,
    estimatedYearlyProduction: 20,
    estimatedYearlyConsumption: 20,
  },
  {
    primaryContact: {
      name: 'Jan Kowalski',
      phone: '+482987484',
      email: 'jan.kowalski@gmail.com'
    },
    address: {
      city: 'Bielsko Biała',
      street: 'Krakowska',
      number: '315e',
      lat: '49.82768537',
      long: '19.09563557',
    },
    installations: [
      {
        createdAt: new Date('10/02/20209'),
        placement: PlacementType.Roof,
        production: 60,
        type: InstallationType.SolarPanels,
      }
    ],
    buildings: [
      {
        roofArea: 150,
        roofMaterial: RoofMaterialType.Dachowka,
        type: BuildingType.Unit
      },
    ],
    consumptionDataPoints: [],
    productionDataPoints: [],
    estimatedDailyConsumption: 20,
    estimatedDailyProduction: 80,
    estimatedYearlyProduction: 20,
    estimatedYearlyConsumption: 20,
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Location[]>
) {
  res.status(200).json(locations)
}
