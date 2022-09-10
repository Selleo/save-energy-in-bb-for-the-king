import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import { GridMap } from '../../components/GridMap'
import { LocationsPanel } from '../../components/LocationsPanel'
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const GridMapPage: NextPage = () => {
  const { isLoading, error, data } = useQuery(['locations'], async () => {
    const response = await fetch('/api/locations')
    const data = await response.json();

    return data
  })

  if (isLoading) return <p>Wczytywanie...</p>
  if (error) return <p>Błąd przy pobieraniu danych!</p>

  return (
    <QueryClientProvider client={queryClient}>
      <LocationsPanel data={data}/>
      <GridMap/>
    </QueryClientProvider>
  )
}

export default GridMapPage
