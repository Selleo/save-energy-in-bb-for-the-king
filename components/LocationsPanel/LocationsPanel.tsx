import { Installation, Location, Building } from '../../pages/api/location.type'
import styles from './LocationsPanel.module.scss'

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

            {location.installations.length > 0 && (
              <div className={styles.installations}>
                {location.installations.map((installation: Installation) => (
                  <div className={styles.installation}>
                    {new Date(installation.createdAt).toLocaleDateString()}
                    Położenie: {installation.placement}<br/>
                    Produkcja: {installation.production} kWh<br/>
                    Typ instalacji: {installation.type}<br/>
                  </div>
                ))}
              </div>
            )}

            {location.buildings.length > 0 && (
              <div className={styles.buildings}>
                {location.buildings.map((building: Building) => (
                  <div className={styles.building}>
                    Powierzchnia dachu: {building.roofArea}<br/>
                    Materiał: {building.roofMaterial}<br/>
                    Typ budynku: {building.type}<br/>
                  </div>
                ))}
              </div>
            )}

            {location.primaryContact && (
              <div className={styles.person}>
                {location.primaryContact.name}<br/>
                Tel.: {location.primaryContact.phone}<br/>
                E-mail: {location.primaryContact.email}<br/>
              </div>
            )}

            {location.peopleNumber && (
              <div className={styles.peopleNumber}>
                {location.peopleNumber} osób
              </div>
            )}

            {location.estimatedDailyConsumption && (
              <div className={styles.estimatedDailyConsumption}>
                Przewidywana dzienna konsumpcja {location.estimatedDailyConsumption} kWh
              </div>
            )}

            {location.estimatesYearlyConsumption && (
              <div className={styles.estimatesYearlyConsumption}>
                Przewidywana roczna konsumpcja {location.estimatesYearlyConsumption} kWh
              </div>
            )}

            {location.estimatesYearlyProduction && (
              <div className={styles.estimatesYearlyProduction}>
                Przewidywana roczna produkcja {location.estimatesYearlyProduction} kWh
              </div>
            )}

            {/* productionDataPoints */}
            {/* consumptionDataPoints */}
          </div>
        ))}
      </div>
    </div>
  )
}
