import { Installation, InstallationType, PlacementType } from '../../../pages/api/location.type'
import styles from './Installations.module.scss'

interface InstallationsProps {
  installations: Installation[],
}

export function Installations({ installations }: InstallationsProps) {
  const getInstallation = (type: InstallationType) => {
    switch (type) {
      case 'Wind':
        return 'wiatrowa'
      case 'SolarPanels':
        return 'panele słoneczne'
    }
  }

  const getPlacement = (type: PlacementType) => {
    switch (type) {
      case 'Ground':
        return 'ziemia'
      case 'Roof':
        return 'dach'
    }
  }

  return installations.length > 0 ? (
    <div className={styles.installations}>
      {installations.map((installation: Installation, index) => (
        <div key={index} className={styles.installation}>
          {new Date(installation.createdAt).toLocaleDateString()}<br/>
          Położenie: {getPlacement(installation.placement)}<br />
          Produkcja: {installation.production} kWh<br />
          Typ instalacji: {getInstallation(installation.type)}<br />
        </div>
      ))}
    </div>
  )
    :
  (
    <div>Brak instalacji</div>
  )
}
