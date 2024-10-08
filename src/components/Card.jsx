import { Box, HStack, Image, Text, Skeleton, SkeletonText, Link } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Card = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <Box 
      maxW="sm" 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden" 
      bg="gray.800"
      color="white"
      boxShadow="md"
      _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
    >
      {
        isLoading ? (
          <Box>
            <Skeleton height="300px" />
            <SkeletonText mt="4" noOfLines={3} spacing="4" />
          </Box>
        ) : (
          <Link as={RouterLink} to={`movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
            <Box>
              <Image 
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
                alt={movie?.original_title} 
                objectFit="cover" 
                w="100%" 
                h={{ base: "200px", md: "300px" }} 
              />
              <Box p="6">
                <Text fontSize="xl" fontWeight="bold">
                  {movie?.original_title || "Not Found"}
                </Text>
                <Text fontSize="sm" color="gray.400">
                  {movie?.release_date || "Not Found"}
                </Text>
                <HStack mt="2" spacing="3">
                  <Text fontSize="md">Rating: {movie?.vote_average || "N/A"}</Text>
                </HStack>
                <Box mt="4">
                  <Text fontSize="sm" noOfLines={3}>
                    {movie?.overview || "Not Found"}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Link>
        )
      }
    </Box>
  )
}

export default Card
