import { Location } from '../../pages/api/location.type'
import { Buildings } from './Buildings'
import { Contact } from './Contact'
import { Installations } from './Installations'
import styles from './LocationsPanel.module.scss'
import { Statistics } from './Statistics'

interface LocationPanelProps {
  data: Location[],
}

export function LocationsPanel({ data }: LocationPanelProps) {
  return (
    <div className={styles.locationsPanel}>
      <h1>Miejsca</h1>

      <div className={styles.locations}>
        {data.map((location: Location) => (
          <div className={styles.location}>
            <div className={styles.address}>
              {location.address.street}{' '}  {location.address.number}<br/>
              {location.address.city}<br/>

              {location.address.lat}<br/>
              {location.address.long}<br/>
            </div>

            {location.peopleNumber && (
              <div className={styles.peopleNumber}>
                {location.peopleNumber} osób
              </div>
            )}

            <Installations installations={location.installations}/>

            <Buildings buildings={location.buildings}/>

            <Contact primaryContact={location.primaryContact} />

            <Statistics
              estimatedDailyConsumption={location.estimatedDailyConsumption}
              estimatesYearlyConsumption={location.estimatesYearlyConsumption}
              estimatesYearlyProduction={location.estimatesYearlyProduction}
              productionDataPoints={location.productionDataPoints}
              consumptionDataPoints={location.consumptionDataPoints}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
