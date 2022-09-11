import { Building } from '../../../pages/api/location.type'
import styles from './Buildings.module.scss'

interface BuildingsProps {
  buildings: Building[],
}

export function Buildings({ buildings }: BuildingsProps) {
  return buildings.length > 0 ? (
    <div className={styles.buildings}>
      {buildings.map((building: Building) => (
        <div className={styles.building}>
          Powierzchnia dachu: {building.roofArea}<br />
          Materiał: {building.roofMaterial}<br />
          Typ budynku: {building.type}<br />
        </div>
      ))}
    </div>
  )
    :
    (
      <div>Brak budynków</div>
    )
}
