export class Address {
  street: string = "";
  number: string = "";
  city: string = "";
  long: string = "";
  lat: string = "";
}

export enum InstallationType {
  Wind = "Wind",
  SolarPanels = "SolarPanels",
}

export enum PlacementType {
  Ground = "Ground",
  Roof = "Roof",
}

export class Installation {
  type: InstallationType = InstallationType.SolarPanels;
  production: number = 0;
  createdAt: Date = new Date();
  placement: PlacementType = PlacementType.Ground;
}

export enum BuildingType {
  House = "House",
  Garage = "Garage",
  Unit = "Unit",
}

export enum RoofMaterialType {
  Papa = "Papa",
  Dachowka = "Dachówka",
  Blacha = "Blacha",
}

export class Building {
  roofArea: number = 0;
  roofMaterial: RoofMaterialType = RoofMaterialType.Blacha;
  type: BuildingType = BuildingType.House;
}

export class Person {
  name: string = "";
  phone: string = "";
  email: string = "";
}

export class ConsumptionDataPoint {
  value: number = 0;
  date: Date = new Date();
}

export class ProductionDataPoint {
  value: number = 0;
  date: Date = new Date();
}

export class Location {
  address: Address = new Address();
  installations: Installation[] = [];
  buildings: Building[] = [];
  primaryContact?: Person;
  peopleNumber?: number;
  estimatedDailyConsumption?: number;
  estimatedDailyProduction?: number;
  estimatedYearlyConsumption?: number;
  estimatedYearlyProduction?: number;
  productionDataPoints: ProductionDataPoint[] = [];
  consumptionDataPoints: ConsumptionDataPoint[] = [];
}
