import Map, { Layer, Source } from 'react-map-gl';
import { useMemo, useState } from "react"
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

export function GridMap() {
  const { isLoading, error, data } = useQuery(['locations'], async () => {
			const response = await fetch('/api/locations')
			const data = await response.json();

			return data.map((loc: Location) => {
				return {
					...location,
					h3Id: latLngToCell(parseFloat(loc.address.lat), parseFloat(loc.address.long), resolution)
				}
			})
		})

	const hexagonFeatures = useMemo(() => {
		const locations = data ?? []
		const locHexagonIds = locations.map((loc: LocationWithId) => loc.h3Id)
		const uniq = [...new Set<string>(locHexagonIds)]

		return geojson2h3.h3SetToFeatureCollection(uniq);
	}, [data])


  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: BB_CORDS.latitude,
    longitude: BB_CORDS.longitude,
    zoom: 11
  });

  return (
    <Map
			// onViewportChange={(nextViewport) => setViewport(nextViewport)}
			mapboxAccessToken={token}
      initialViewState={viewport}
  		style={{width: '100vw', height: '100vh'}}
      // mapStyle="mapbox://styles/petermain/cko1ewc0p0st918lecxa5c8go"
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
			<Source id="h3-hexes" type="geojson" data={hexagonFeatures}>
				<Layer
					id="h3-hexes-layer"
					source="h3-hexes"
					type="fill"
					interactive={true}
					paint={{
						"fill-outline-color": "rgba(0,0,0,3)",
						"fill-opacity": 0.6,
						"fill-color": "rgba(0,0,0,1)"
					}}
				/>
			</Source>
		</Map>
  );
}
