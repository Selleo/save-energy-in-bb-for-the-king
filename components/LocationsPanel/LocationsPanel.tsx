import classNames from 'classnames'
import { useState } from 'react'
import { LocationWithId } from '../../pages'
import { Location } from '../../pages/api/location.type'
import { ConsumptionIcon, ProductionIcon } from '../Icon'
import { Details } from './Details'

import styles from './LocationsPanel.module.scss'

interface LocationPanelProps {
  data: LocationWithId[],
  hovered: string | null,
}

export function LocationsPanel({ data, hovered }: LocationPanelProps) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const stylesMap = {
    location: styles.location,
    hovered: styles.hovered,
  }
  const cx = classNames.bind(stylesMap);

  const decoratedData: (Location & { delta: number, h3Id: string })[] = data.map(loc => {
    return {
      ...loc,
      delta: (loc.estimatedDailyProduction || 0) - (loc.estimatedDailyConsumption || 0)
    }

  })

  return (
    <div className={styles.locationsPanel}>
      {currentIndex === null && (
        <>
          <h1>Miejsca</h1>

          <div className={styles.locations}>
            {decoratedData.map((loc, index) => (
              <div
                key={`${loc.address.lat}-${loc.address.long}-${index}`}
                className={cx(styles.location, { [styles.hovered]: loc.h3Id === hovered })}
                onClick={() => setCurrentIndex(index)}
              >
                <div className={styles.address}>
                  <div className={styles.addressRow}>
                    {loc.address.city} - {loc.address.street} {loc.address.number}
                  </div>
                  <div>
                    <div className={styles.badge}>
                      <ProductionIcon />
                      {loc.estimatedDailyProduction} kWh
                    </div>
                    <div className={styles.badge}>
                      <ConsumptionIcon />
                      {loc.estimatedDailyConsumption} kWh
                    </div>
                  </div>
                </div>
                <div className={styles.status}>
                  <div className={loc.delta > 0 ? styles.green : styles.red}></div>
                </div>
                {loc.peopleNumber && (
                  <div className={styles.peopleNumber}>
                    {loc.peopleNumber} osób
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )
      }

      {currentIndex !== null && <Details location={data[currentIndex]} back={() => setCurrentIndex(null)} />}
    </div>
  )
}
