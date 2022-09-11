	export const getColor = (data: any, feature: any) => {
		const locationsWithinHexagon = data.filter(loc => loc.h3Id === feature.id)
		const consumption = locationsWithinHexagon.reduce((acc, loc) => { 
			return acc + (loc.estimatedDailyConsumption || 0)
		}, 0)
		const production = locationsWithinHexagon.reduce((acc, loc) => { 
			return acc + (loc.estimatedDailyProduction || 0)
		}, 0)
		const delta = production - consumption;

		switch(true) {
			case(delta < 0): {
				return "#ff0000"
			}

			case(delta > 0): {
				return "#00ff00"
			}

			case(delta === 0): {
				return "#0000ff"
			}
		}
	}
