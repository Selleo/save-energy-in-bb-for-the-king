import classNames from "classnames";
import { LocationWithId } from "../../pages";
import { Location } from "../../pages/api/location.type";
import { ConsumptionIcon, ProductionIcon } from "../Icon";
import { Details } from "./Details";
import { Logo } from './../Logo';

import styles from "./LocationsPanel.module.scss";

interface LocationPanelProps {
  data: LocationWithId[];
  currentIndex: number | null;
  setCurrentIndex: Function;
  hovered: string | null;
}

export function LocationsPanel({
  data,
  hovered,
  currentIndex,
  setCurrentIndex,
}: LocationPanelProps) {
  const stylesMap = {
    location: styles.location,
    hovered: styles.hovered,
  };
  const cx = classNames.bind(stylesMap);

  const decoratedData: (Location & { delta: number; h3Id: string })[] =
    data.map((loc) => {
      return {
        ...loc,
        delta:
          (loc.estimatedDailyProduction || 0) -
          (loc.estimatedDailyConsumption || 0),
      };
    });

  return (
    <div className={styles.locationsPanel}>
      <div className={styles.logo}>
        <Logo />
      </div>

      {currentIndex === null && (
        <>
          <h1>Obszary</h1>

          <div className={styles.locations}>
            {decoratedData.map((loc, index) => (
              <div
                key={`${loc.address.lat}-${loc.address.long}-${index}`}
                className={cx(styles.location, {
                  [styles.hovered]: loc.h3Id === hovered,
                })}
                onClick={() => setCurrentIndex(index)}
              >
                <div className={styles.address}>
                  <div className={styles.addressRow}>
                    {loc.address.city} - {loc.address.street}{" "}
                    {loc.address.number}
                  </div>
                  <div>
                    <div
                      className={styles.badge}
                      title="Szacowana dzienna produkcja"
                    >
                      <ProductionIcon />
                      {loc.estimatedDailyProduction} kWh
                    </div>
                    <div
                      className={styles.badge}
                      title="Szacowane dzienne zu??ycie"
                    >
                      <ConsumptionIcon />
                      {loc.estimatedDailyConsumption} kWh
                    </div>
                  </div>
                </div>
                <div className={styles.status}>
                  <div
                    className={loc.delta > 0 ? styles.green : styles.red}
                    title={loc.delta > 0 ? "Dzia??a" : "Co?? si?? popsu??o"}
                  ></div>
                </div>
                {loc.peopleNumber && (
                  <div className={styles.peopleNumber}>
                    {loc.peopleNumber} os??b
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {currentIndex !== null && (
        <Details
          location={data[currentIndex]}
          back={() => setCurrentIndex(null)}
        />
      )}
    </div>
  );
}
