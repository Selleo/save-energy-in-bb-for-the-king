import Map from 'react-map-gl';
import { useState } from "react"

const token = process.env.NEXT_PUBLIC_MAPBOX_KEY
const BB_CORDS = {
	longitude: 19.0386,
	latitude: 49.8121,
}

export function GridMap() {
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
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}
