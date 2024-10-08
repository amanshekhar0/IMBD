import { Box, Button, HStack, IconButton, Image, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import { useColorMode } from '@chakra-ui/react'

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

  return (
    <Box 
      px={{ base: "10px", md: "40px" }} 
      py="20px" 
      boxShadow="lg" 
      bg={isDark ? "gray.900" : "white"}
      transition="background-color 0.3s ease"
    >
      <HStack justifyContent="space-between" alignItems="center">
   
        <Box>
          <NavLink to={"/"}>
            <Image
              width={{ base: "80px", md: "100px" }}
              height={{ base: "50px", md: "60px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxje-uEYZhlNag2v9J33cRmRJTKEid_K0V5w&s"
              alt="Logo"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.05)" }}
            />
          </NavLink>
        </Box>


        <HStack 
          spacing={{ base: "10px", md: "30px" }}
          display={{ base: "flex", md: "flex" }}
          fontSize={{ base: "sm", md: "lg" }}
          fontWeight="bold"
          color={isDark ? "gray.200" : "gray.700"}
          transition="color 0.3s ease"
        >
          <NavLink to={"/home"}>
            <Link 
              _hover={{ color: "teal.300", textDecoration: "none" }} 
              _focus={{ outline: "none" }}
            >
              Popular
            </Link>
          </NavLink>
          <NavLink to={"/types"}>
            <Link 
              _hover={{ color: "teal.300", textDecoration: "none" }} 
              _focus={{ outline: "none" }}
            >
              Top Rated
            </Link>
          </NavLink>
          <NavLink to={"/details"}>
            <Link 
              _hover={{ color: "teal.300", textDecoration: "none" }} 
              _focus={{ outline: "none" }}
            >
              Upcoming
            </Link>
          </NavLink>


          <IconButton 
            icon={isDark ? <FaMoon /> : <GoSun />} 
            onClick={toggleColorMode} 
            isRound 
            size="lg"
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.1)" }}
            bg={isDark ? "gray.800" : "gray.200"}
            color={isDark ? "yellow.300" : "orange.400"}
          />
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
