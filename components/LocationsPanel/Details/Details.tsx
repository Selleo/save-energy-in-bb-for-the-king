import { Buildings } from '../Buildings'
import { Contact } from '../Contact'
import { Installations } from '../Installations'
import { Statistics } from '../Statistics'
import { Location } from '../../../pages/api/location.type'

interface DetailsProps {
  location: Location,
}

export function Details({ location }: DetailsProps) {
  return (
    <>
      <Installations installations={location.installations} />
      <Buildings buildings={location.buildings} />
      <Contact primaryContact={location.primaryContact} />
      <Statistics
        estimatedDailyConsumption={location.estimatedDailyConsumption}
        estimatesYearlyConsumption={location.estimatesYearlyConsumption}
        estimatesYearlyProduction={location.estimatesYearlyProduction}
        productionDataPoints={location.productionDataPoints}
        consumptionDataPoints={location.consumptionDataPoints}
      />
    </>
  )
}
