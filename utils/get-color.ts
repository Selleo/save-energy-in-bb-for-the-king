import { LocationWithId } from "../pages/index";
export const getColor = (data: any, feature: any) => {
  const locationsWithinHexagon = data.filter(
    (loc: any) => loc.h3Id === feature.id
  );
  const consumption = locationsWithinHexagon.reduce(
    (acc: number, loc: LocationWithId) => {
      return acc + (loc.estimatedDailyConsumption || 0);
    },
    0
  );
  const production = locationsWithinHexagon.reduce(
    (acc: number, loc: LocationWithId) => {
      return acc + (loc.estimatedDailyProduction || 0);
    },
    0
  );
  const delta = production - consumption;

  switch (true) {
    case delta > 10: {
      return "#1f6f45";
    }

    case delta > 0: {
      return "#38ac93";
    }

    case delta === 0: {
      return "#458174";
    }

    case delta < 0: {
      return "#903531";
    }
  }
};
