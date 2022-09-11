import { useState, useEffect, useMemo } from 'react'
import type { NextPage } from 'next'
import { GridMap } from '../components/GridMap'
import { LocationsPanel } from '../components/LocationsPanel'
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { latLngToCell } from 'h3-js'
import { Location } from '../pages/api/location.type';

const queryClient = new QueryClient()
const resolution = 8;

export type LocationWithId = Location & { h3Id: string }

const GridMapPage: NextPage = () => {
	const [selectedCellId, selectCell] = useState<null | string>(null);
	const [hovered, setHovered] = useState<null | string>(null);
  const { isLoading, error, data } = useQuery(['locations'], async () => {
			const response = await fetch('/api/locations')
			const data = await response.json();

			return data.map((loc: Location) => {
				return {
					...loc,
					h3Id: latLngToCell(parseFloat(loc.address.lat), parseFloat(loc.address.long), resolution),
				}
			})
  })

	const filteredData = useMemo(() => {
		if (!data) return [];
		if (!selectedCellId) return data;

		return data.filter((location: LocationWithId) => location.h3Id === selectedCellId)
	}, [data, selectedCellId])

  if (isLoading) return <p>Wczytywanie...</p>
  if (error) return <p>Błąd przy pobieraniu danych!</p>


  return (
    <QueryClientProvider client={queryClient}>
      <LocationsPanel data={filteredData} hovered={hovered}/>
      <GridMap selectCell={selectCell} data={data} setHovered={setHovered}/>
    </QueryClientProvider>
  )
}

export default GridMapPage
