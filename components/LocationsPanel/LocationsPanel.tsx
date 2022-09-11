import { useState } from 'react'
import { Location } from '../../pages/api/location.type'
import { Details } from './Details'

import styles from './LocationsPanel.module.scss'

interface LocationPanelProps {
  data: Location[],
}

export function LocationsPanel({ data }: LocationPanelProps) {
  const [currentIndex, setCurrentIndex] = useState<number|null>(null)

  return (
    <div className={styles.locationsPanel}>
      {currentIndex === null && (
          <>
            <h1>Miejsca</h1>

            <div className={styles.locations}>
              {data.map((location: Location, index) => (
                <div className={styles.location} onClick={() => setCurrentIndex(index)}>
                  <div className={styles.address}>
                    {location.address.street}{' '}  {location.address.number}<br />
                    {location.address.city}<br />
                    {location.address.lat}<br />
                    {location.address.long}<br />
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

      {currentIndex !== null && <Details location={data[currentIndex]} />}
    </div>
  )
}
