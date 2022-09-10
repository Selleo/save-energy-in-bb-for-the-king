import { Installation, Location, Building } from '../../pages/api/location.type'
import styles from './LocationsPanel.module.scss'

interface LocationPanelProps {
  data: Location[],
}

export function LocationsPanel({ data }: LocationPanelProps) {
  return (
    <div className={styles.locationsPanel}>
      <h1>Locations</h1>

      <div className={styles.locations}>
        {data.map((location: Location) => (
          <div className={styles.location}>
            <div className={styles.address}>
              {location.address.street}
              {location.address.number}
              {location.address.city}

              {location.address.lat}
              {location.address.long}
            </div>

            {location.installations.length > 0 && (
              <div className={styles.installations}>
                {location.installations.map((installation: Installation) => (
                  <div className={styles.installation}>
                    {new Date(installation.createdAt).toLocaleDateString()}
                    {installation.pacement}
                    {installation.production}
                    {installation.type}
                  </div>
                ))}
              </div>
            )}

            {location.buildings.length > 0 && (
              <div className={styles.buildings}>
                {location.buildings.map((building: Building) => (
                  <div className={styles.building}>
                    Powierzchnia dachu: {building.roofArea}
                    Materiał: {building.roofMaterial}
                    Typ budynku: {building.type}
                  </div>
                ))}
              </div>
            )}

            {location.primaryContact && (
              <div className={styles.person}>
                {location.primaryContact.name}
                Tel.: {location.primaryContact.phone}
                E-mail: {location.primaryContact.email}
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
