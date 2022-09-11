import { ResponsiveLine } from '@nivo/line'
import { ProductionDataPoint } from '../../../pages/api/location.type'
import styles from './Statistics.module.scss'

const data = [
  {
    "id": "japan",
    "color": "hsl(133, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 55
      },
      {
        "x": "helicopter",
        "y": 4
      },
      {
        "x": "boat",
        "y": 239
      },
      {
        "x": "train",
        "y": 159
      },
      {
        "x": "subway",
        "y": 129
      },
      {
        "x": "bus",
        "y": 239
      },
      {
        "x": "car",
        "y": 67
      },
      {
        "x": "moto",
        "y": 105
      },
      {
        "x": "bicycle",
        "y": 230
      },
      {
        "x": "horse",
        "y": 8
      },
      {
        "x": "skateboard",
        "y": 129
      },
      {
        "x": "others",
        "y": 94
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(230, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 72
      },
      {
        "x": "helicopter",
        "y": 144
      },
      {
        "x": "boat",
        "y": 59
      },
      {
        "x": "train",
        "y": 131
      },
      {
        "x": "subway",
        "y": 158
      },
      {
        "x": "bus",
        "y": 201
      },
      {
        "x": "car",
        "y": 40
      },
      {
        "x": "moto",
        "y": 267
      },
      {
        "x": "bicycle",
        "y": 154
      },
      {
        "x": "horse",
        "y": 219
      },
      {
        "x": "skateboard",
        "y": 243
      },
      {
        "x": "others",
        "y": 96
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(136, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 229
      },
      {
        "x": "helicopter",
        "y": 23
      },
      {
        "x": "boat",
        "y": 208
      },
      {
        "x": "train",
        "y": 216
      },
      {
        "x": "subway",
        "y": 45
      },
      {
        "x": "bus",
        "y": 153
      },
      {
        "x": "car",
        "y": 32
      },
      {
        "x": "moto",
        "y": 283
      },
      {
        "x": "bicycle",
        "y": 5
      },
      {
        "x": "horse",
        "y": 185
      },
      {
        "x": "skateboard",
        "y": 139
      },
      {
        "x": "others",
        "y": 269
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(220, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 151
      },
      {
        "x": "helicopter",
        "y": 3
      },
      {
        "x": "boat",
        "y": 136
      },
      {
        "x": "train",
        "y": 69
      },
      {
        "x": "subway",
        "y": 108
      },
      {
        "x": "bus",
        "y": 159
      },
      {
        "x": "car",
        "y": 253
      },
      {
        "x": "moto",
        "y": 209
      },
      {
        "x": "bicycle",
        "y": 71
      },
      {
        "x": "horse",
        "y": 65
      },
      {
        "x": "skateboard",
        "y": 165
      },
      {
        "x": "others",
        "y": 283
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(162, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 259
      },
      {
        "x": "helicopter",
        "y": 186
      },
      {
        "x": "boat",
        "y": 239
      },
      {
        "x": "train",
        "y": 105
      },
      {
        "x": "subway",
        "y": 274
      },
      {
        "x": "bus",
        "y": 60
      },
      {
        "x": "car",
        "y": 92
      },
      {
        "x": "moto",
        "y": 285
      },
      {
        "x": "bicycle",
        "y": 279
      },
      {
        "x": "horse",
        "y": 40
      },
      {
        "x": "skateboard",
        "y": 197
      },
      {
        "x": "others",
        "y": 240
      }
    ]
  }
]


const MyResponsiveLine = ({ data }: { data: any }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
      min: 'auto',
      max: 'auto',
      stacked: true,
      reverse: false
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      // orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'transportation',
      legendOffset: 36,
      legendPosition: 'middle'
    }}
    axisLeft={{
      // orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'count',
      legendOffset: -40,
      legendPosition: 'middle'
    }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
)


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
      <div className={styles.statisticsWrapper}>
        <MyResponsiveLine data={data} />
      </div>

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
