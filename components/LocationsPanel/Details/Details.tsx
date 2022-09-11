import { Buildings } from '../Buildings'
import { Contact } from '../Contact'
import { Installations } from '../Installations'
import { Statistics } from '../Statistics'
import { Location } from '../../../pages/api/location.type'
import { useState } from 'react'
import styles from './Details.module.scss'
import { BackArrowIcon } from '../../Icon'

interface DetailsProps {
  location: Location,
  back: Function,
}

type DetailTabs = 'statistics' | 'installations' | 'buildings' | 'contact'

export function Details({ location, back }: DetailsProps) {
  const [currentTab, setCurrentTab] = useState<DetailTabs>('statistics')

  return (
    <div className={styles.details}>
      <div className={styles.backArrow} onClick={() => back()} title="Wstecz">
        <BackArrowIcon />
      </div>

      <h2>{location.address.street} {location.address.number}, {location.address.city}</h2>

      <div className={styles.tabs}>
        <div
          className={`${styles.tab} ${currentTab === 'statistics' && styles.currentTab}`}
          onClick={() => setCurrentTab('statistics')}
        >
          Statystyki
        </div>
        <div
          className={`${styles.tab} ${currentTab === 'installations' && styles.currentTab}`}
          onClick={() => setCurrentTab('installations')}
        >
          Instalacje
        </div>
        <div
          className={`${styles.tab} ${currentTab === 'buildings' && styles.currentTab}`}
          onClick={() => setCurrentTab('buildings')}
        >
          Budynki
        </div>
        <div
          className={`${styles.tab} ${currentTab === 'contact' && styles.currentTab}`}
          onClick={() => setCurrentTab('contact')}
        >
            Kontakt
          </div>
      </div>

      <div className={styles.content}>
        {currentTab === 'statistics' && <Statistics
          estimatedDailyConsumption={location.estimatedDailyConsumption}
          estimatesYearlyConsumption={location.estimatesYearlyConsumption}
          estimatesYearlyProduction={location.estimatesYearlyProduction}
          productionDataPoints={location.productionDataPoints}
          consumptionDataPoints={location.consumptionDataPoints}
        />}
        {currentTab === 'installations' && <Installations installations={location.installations} />}
        {currentTab === 'buildings' && <Buildings buildings={location.buildings} />}
        {currentTab === 'contact' && <Contact primaryContact={location.primaryContact} />}
      </div>
    </div>
  )
}
