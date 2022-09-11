import { ProductionDataPoint } from '../../../pages/api/location.type'
import styles from './Statistics.module.scss'

interface StatisticsProps {
  estimatedDailyConsumption?: number,
  estimatesYearlyConsumption?: number,
  estimatesYearlyProduction?: number,
  productionDataPoints: ProductionDataPoint[],
  consumptionDataPoints: ProductionDataPoint[],
}

export function Statistics({ estimatedDailyConsumption, estimatesYearlyConsumption, estimatesYearlyProduction }: StatisticsProps) {
  return (
    <>
      {estimatedDailyConsumption && (
        <div className={styles.estimatedDailyConsumption}>
          Przewidywana dzienna konsumpcja {estimatedDailyConsumption} kWh
        </div>
      )}

      {estimatesYearlyConsumption && (
        <div className={styles.estimatesYearlyConsumption}>
          Przewidywana roczna konsumpcja {estimatesYearlyConsumption} kWh
        </div>
      )}

      {estimatesYearlyProduction && (
        <div className={styles.estimatesYearlyProduction}>
          Przewidywana roczna produkcja {estimatesYearlyProduction} kWh
        </div>
      )}

      {/* productionDataPoints */}
      {/* consumptionDataPoints */}
    </>
  )
}
