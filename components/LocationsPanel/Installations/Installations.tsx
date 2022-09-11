import { Installation } from '../../../pages/api/location.type'
import styles from './Installations.module.scss'

interface InstallationsProps {
  installations: Installation[],
}

export function Installations({ installations }: InstallationsProps) {
  return installations.length > 0 ? (
    <div className={styles.installations}>
      {installations.map((installation: Installation) => (
        <div className={styles.installation}>
          {new Date(installation.createdAt).toLocaleDateString()}
          Położenie: {installation.placement}<br />
          Produkcja: {installation.production} kWh<br />
          Typ instalacji: {installation.type}<br />
        </div>
      ))}
    </div>
  )
    :
  (
    <div>Brak instalacji</div>
  )
}
