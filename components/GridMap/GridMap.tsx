import Map, { Layer, Source } from 'react-map-gl';
import { useState } from "react"
import geojson2h3 from 'geojson2h3';
import {latLngToCell} from "h3-js";

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

	const h3Index = latLngToCell(49.8219, 19.0434, 9);
	const feature = geojson2h3.h3SetToFeature([h3Index]);

  return (
    <Map
			// onViewportChange={(nextViewport) => setViewport(nextViewport)}
			mapboxAccessToken={token}
      initialViewState={viewport}
  		style={{width: '100vw', height: '100vh'}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Source id="h3-hexes" type="geojson" data={feature}>
        <Layer
          id="h3-hexes-layer"
          source="h3-hexes"
          type="fill"
          interactive={true}
          paint={{
            "fill-outline-color": "rgba(0,0,0,3)",
            "fill-opacity": 0.6,
            "fill-color": "rgba(0,0,0,0.3)"
          }}
        />
      </Source>
			</Map>
  );
}
