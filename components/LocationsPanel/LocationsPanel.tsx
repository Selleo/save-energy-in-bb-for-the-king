import { useState } from 'react'
import { Location } from '../../pages/api/location.type'
import { ConsumptionIcon, ProductionIcon } from '../Icon'
import { Details } from './Details'

import styles from './LocationsPanel.module.scss'

interface LocationPanelProps {
  data: Location[],
}

export function LocationsPanel({ data }: LocationPanelProps) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)

	const decoratedData: (Location & { delta: number })[] = data.map(loc => {
		return {
			...loc,
			delta: (loc.estimatedDailyProduction || 0) - (loc.estimatedDailyConsumption || 0)
		}

	})

                  // {location.address.street}{' '}  {location.address.number}<br />
                  // {location.address.city}<br />
                  // {location.address.lat}<br />
                  // {location.address.long}<br />
  return (
    <div className={styles.locationsPanel}>
      {currentIndex === null && (
        <>
          <h1>Miejsca</h1>

          <div className={styles.locations}>
            {decoratedData.map((location, index) => (
              <div className={styles.location} onClick={() => setCurrentIndex(index)}>
                <div className={styles.address}>
									<div className={styles.addressRow}>
										{location.address.city} - {location.address.street} {location.address.number}
									</div>
									<div>
										<div className={styles.badge}>
											<ProductionIcon /> 
											{location.estimatedDailyProduction} kWh
										</div>
										<div className={styles.badge}>
											<ConsumptionIcon /> 
											{location.estimatedDailyConsumption} kWh
										</div>
									</div>
                </div>
								<div className={styles.status}>
									<div className={location.delta > 0 ? styles.green : styles.red}></div>		
								</div>
                {location.peopleNumber && (
                  <div className={styles.peopleNumber}>
                    {location.peopleNumber} osób
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
