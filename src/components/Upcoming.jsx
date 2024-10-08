import React, { useEffect, useState } from 'react'
import { Box, Grid, Heading, Spinner, Image, Text, Stack, Badge } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Upcoming = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setIsLoading(true)
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
    const data = await res.json()
    setMovies(data.results)
    setIsLoading(false)
  }

  return (
    <Box p={6} w="100%" minH="100vh" bg="gray.900" color="white">
      <Heading as="h1" size="xl" mb={6} textAlign="center" color="teal.300">
        UPCOMING MOVIES
      </Heading>

      {isLoading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
          <Spinner size="xl" color="teal.400" />
        </Box>
      ) : (
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
          gap={8}
        >
          {movies.map((movie) => (
            <motion.div 
              key={movie.id}
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Box 
                borderWidth="1px" 
                borderRadius="lg" 
                overflow="hidden" 
                bg="gray.800"
                shadow="lg"
                p={4}
                _hover={{ bg: "gray.700" }}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                  alt={movie.title} 
                  borderRadius="md"
                  mb={4}
                />
                <Stack spacing={3}>
                  <Heading fontSize="lg" noOfLines={2}>
                    {movie.title}
                  </Heading>
                  <Badge colorScheme="purple" fontSize="0.8em">
                    Release Date: {movie.release_date}
                  </Badge>
                  <Text fontSize="sm" noOfLines={3} color="gray.300">
                    {movie.overview}
                  </Text>
                </Stack>
              </Box>
            </motion.div>
          ))}
        </Grid>
      )}
    </Box>
  )
}

export default Upcoming
