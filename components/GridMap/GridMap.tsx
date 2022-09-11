import InteractiveMap, { Layer, MapLayerMouseEvent, Source } from 'react-map-gl';
import { useCallback, useMemo, useState } from "react"
import geojson2h3 from 'geojson2h3';
import {latLngToCell} from "h3-js";
import { useQuery } from '@tanstack/react-query'
import { Location } from '../../pages/api/location.type';

type LocationWithId = Location & { h3Id: string }

const token = process.env.NEXT_PUBLIC_MAPBOX_KEY
const BB_CORDS = {
	longitude: 19.0386,
	latitude: 49.8121,
}
const resolution = 8;

export interface GridMapProps {
	selectCell: (id: string | null) => void
	data: LocationWithId[]
}

export function GridMap({selectCell, data}: GridMapProps) {
	const getColor = (feature: any) => {
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

	const hexagonFeatures = useMemo(() => {
		const locations = data ?? []
		const locHexagonIds = locations.map((loc: LocationWithId) => loc.h3Id)
		const uniq = [...new Set<string>(locHexagonIds)]

		const collection = geojson2h3.h3SetToFeatureCollection(uniq)
		return {
			...collection,
			features: collection.features.map(feature => ({...feature, properties: { color: getColor(feature)}}))
		}
	}, [data])


  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: BB_CORDS.latitude,
    longitude: BB_CORDS.longitude,
    zoom: 11
  });

	const handleClick = (event: MapLayerMouseEvent) => {
		if (!event.features) return;
		const isHex = event.features.find(feature => feature.source === "h3-hexagons")
		if (!isHex) {
			return selectCell(null)
		};

		const cell = latLngToCell(event.lngLat.lat, event.lngLat.lng, resolution);
		selectCell(cell)
	}

	const [cursor, setCursor] = useState<string>('auto');
  const onMouseEnter = useCallback((event: MapLayerMouseEvent) => {
		if (event.features?.find(feature => feature.source === "h3-hexagons")) {
			setCursor('pointer')
		}
		}, []);
  const onMouseLeave = useCallback(() => setCursor('auto'), []);

  return (
    <InteractiveMap
			// onViewportChange={(nextViewport) => setViewport(nextViewport)}
			mapboxAccessToken={token}
      initialViewState={viewport}
  		style={{width: '100vw', height: '100vh'}}
			interactiveLayerIds={["hexagons"]}
      // mapStyle="mapbox://styles/petermain/cko1ewc0p0st918lecxa5c8go"
      mapStyle="mapbox://styles/mapbox/streets-v9"
			onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      cursor={cursor}
    >
			<Source id="h3-hexagons" type="geojson" data={hexagonFeatures}>
				<Layer
					id="hexagons"
					source="h3-hexes"
					type="fill"
					interactive={true}
					paint={{
						"fill-outline-color": "rgba(0,0,0,3)",
						"fill-opacity": 0.6,
						'fill-color': ['get', 'color']
					}}
				/>
			</Source>
		</InteractiveMap>
  );
}
