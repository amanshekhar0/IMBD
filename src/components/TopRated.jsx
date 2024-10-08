import React, { useEffect, useState } from 'react'
import { Box, Grid, Heading, Spinner } from '@chakra-ui/react'
import Card from './Card'

const TopRated = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setIsLoading(true)
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
    const data = await res.json()
    setMovies(data.results)
    setIsLoading(false)
  }

  return (
    <Box p={4} w="100%">
      <Heading as="h1" size="lg" mb={4} textAlign="center">
        TOP RATED MOVIES
      </Heading>

      {isLoading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
          <Spinner size="xl" color="teal.400" />
        </Box>
      ) : (
        <Grid 
          templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }}
          gap={6}
        >
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </Grid>
      )}
    </Box>
  )
}

export default TopRated
