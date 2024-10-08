import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MovieList from "./MovieList";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box bg={bgColor} color={textColor} minH="100vh" py={8}>
      <Container maxW="container.xl">
        <Heading as="h1" size="2xl" textAlign="center" mb={8}>
          Popular Movies
        </Heading>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          interval={2000}  
          transitionTime={1000}  
          emulateTouch={true}
          swipeable={true}
        >
          {popularMovies.map((movie) => (
            <Box
              key={movie.id}
              position="relative"
              h={{ base: "400px", md: "500px", lg: "600px" }}
              overflow="hidden"
              borderRadius="lg"
              boxShadow="xl"
            >
              <Box
                bgImage={`url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                w="full"
                h="full"
                position="absolute"
                top="0"
                left="0"
                filter="brightness(0.5)"
              />
              <VStack
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                p={{ base: 4, md: 6, lg: 8 }}
                align="stretch"
                spacing={4}
                bgGradient="linear(to-t, blackAlpha.800, blackAlpha.300)"
              >
                <Heading
                  as="h2"
                  size={{ base: "xl", md: "2xl" }}
                  color="white"
                  textShadow="2px 2px 4px rgba(0,0,0,0.4)"
                >
                  {movie.original_title}
                </Heading>
                <HStack justify="space-between" wrap="wrap">
                  <Badge colorScheme="blue" fontSize={{ base: "xs", md: "sm" }}>
                    Release: {movie.release_date}
                  </Badge>
                  <Badge colorScheme="yellow" fontSize={{ base: "xs", md: "sm" }}>
                    <HStack spacing={1} alignItems="center">
                      <Text>Rating: {movie.vote_average.toFixed(1)}</Text>
                      <FaStar />
                    </HStack>
                  </Badge>
                </HStack>
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  noOfLines={3}
                  color="whiteAlpha.900"
                >
                  {movie.overview}
                </Text>
              </VStack>
            </Box>
          ))}
        </Carousel>
        <MovieList/>
      </Container>
    </Box>
  );
};

export default Home;