import { Building, BuildingType } from "../../../pages/api/location.type";
import styles from "./Buildings.module.scss";

interface BuildingsProps {
  buildings: Building[];
}

export function Buildings({ buildings }: BuildingsProps) {
  const getType = (type: BuildingType) => {
    switch (type) {
      case "House":
        return "dom";
      case "Garage":
        return "garaż";
      case "Unit":
        return "blok";
    }
  };

  return buildings.length > 0 ? (
    <div className={styles.buildings}>
      {buildings.map((building: Building, index) => (
        <div className={styles.building} key={index}>
          Powierzchnia dachu: {building.roofArea} m<sup>2</sup>
          <br />
          Materiał: {building.roofMaterial}
          <br />
          Typ budynku: {getType(building.type)}
          <br />
        </div>
      ))}
    </div>
  ) : (
    <div>Brak budynków</div>
  );
}
