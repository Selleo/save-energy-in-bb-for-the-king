import { ProductionDataPoint } from '../../../pages/api/location.type'
import { ConsumptionIcon, ProductionIcon } from '../../Icon'
import { LineChart } from '../../LineChart'
import styles from './Statistics.module.scss'

const production = [
  {
    id: "production",
    color: "hsl(151, 74%, 42%)",
    data: [
      {
        x: "7:00",
        y: 259,
      },
      {
        x: "8:00",
        y: 186,
      },
      {
        x: "9:00",
        y: 239,
      },
      {
        x: "10:00",
        y: 105,
      },
      {
        x: "11:00",
        y: 274,
      },
      {
        x: "12:00",
        y: 60,
      },
      {
        x: "13:00",
        y: 92,
      },
      {
        x: "14:00",
        y: 285,
      },
      {
        x: "15:00",
        y: 279,
      },
      {
        x: "16:00",
        y: 40,
      },
      {
        x: "17:00",
        y: 197,
      },
      {
        x: "20:00",
        y: 240,
      },
      {
        x: "22:00",
        y: 100,
      },
    ],
  },
];

const consumption = [
  {
    id: "consumption",
    color: "#FF8700",
    data: [
      {
        x: "7:00",
        y: 59,
      },
      {
        x: "8:00",
        y: 16,
      },
      {
        x: "9:00",
        y: 23,
      },
      {
        x: "10:00",
        y: 10,
      },
      {
        x: "11:00",
        y: 2,
      },
      {
        x: "12:00",
        y: 6,
      },
      {
        x: "13:00",
        y: 92,
      },
      {
        x: "14:00",
        y: 2,
      },
      {
        x: "15:00",
        y: 2,
      },
      {
        x: "16:00",
        y: 4,
      },
      {
        x: "17:00",
        y: 19,
      },
      {
        x: "20:00",
        y: 2,
      },
      {
        x: "22:00",
        y: 10,
      },
    ],
  },
];

interface StatisticsProps {
  estimatedDailyConsumption?: number;
  estimatedDailyProduction?: number;
  estimatedYearlyConsumption?: number;
  estimatedYearlyProduction?: number;
  productionDataPoints: ProductionDataPoint[];
  consumptionDataPoints: ProductionDataPoint[];
}

export function Statistics({
  estimatedDailyConsumption,
  estimatedDailyProduction,
  estimatedYearlyConsumption,
  estimatedYearlyProduction,
  productionDataPoints,
  consumptionDataPoints,
}: StatisticsProps) {
  return (
    <>
      <h4 className={`${styles.title} ${styles.green}`}>Dzienna produkcja energii</h4>
      <div className={styles.statisticsWrapper}>
        <LineChart data={production} />
      </div>

      <h4 className={`${styles.title} ${styles.orange}`}>Dzienne zużycie energii</h4>
      <div className={styles.statisticsWrapper}>
        <LineChart data={consumption} />
      </div>

      {estimatedDailyConsumption && (
        <div className={styles.estimatedDailyConsumption}>
          <h4 className={`${styles.title} ${styles.orange}`}>Przewidywana dzienna konsumpcja</h4>
          <div className={styles.value}>
          <ConsumptionIcon/> {estimatedDailyConsumption} kWh
          </div>
        </div>
      )}
      {estimatedDailyProduction && (
        <div className={styles.estimatedDailyProduction}>
          <h4 className={`${styles.title} ${styles.green}`}>Przewidywana dzienna produkcja</h4>
          <div className={styles.value}>
            <ProductionIcon/> {estimatedDailyProduction} kWh
          </div>
        </div>
      )}
      {estimatedYearlyConsumption && (
        <div className={styles.estimatedYearlyConsumption}>
          <h4 className={`${styles.title} ${styles.orange}`}>Przewidywana roczna konsumpcja</h4>
          <div className={styles.value}>
            <ConsumptionIcon/> {estimatedYearlyConsumption} kWh
          </div>
        </div>
      )}
      {estimatedYearlyProduction && (
        <div className={styles.estimatedYearlyProduction}>
          <h4 className={`${styles.title} ${styles.green}`}>Przewidywana roczna produkcja</h4>
          <div className={styles.value}>
            <ProductionIcon/> {estimatedYearlyProduction} kWh
          </div>
        </div>
      )}
    </>
  );
}
