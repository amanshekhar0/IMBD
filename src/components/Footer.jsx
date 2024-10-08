import { Box, HStack, Link, Stack, Text, Icon, Divider } from "@chakra-ui/react";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="gray.800"
      color="gray.200"
      py={{ base: 6, md: 8 }}
      px={{ base: 4, md: 16 }}
      mt={8}
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        spacing={4}
      >
        
        <HStack spacing={6} fontSize="sm" color="gray.400">
          <Link href="/" _hover={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
          <Link href="/about" _hover={{ textDecoration: "none", color: "white" }}>
            About
          </Link>
          <Link href="/contact" _hover={{ textDecoration: "none", color: "white" }}>
            Contact
          </Link>
          <Link href="/services" _hover={{ textDecoration: "none", color: "white" }}>
            Services
          </Link>
        </HStack>

     
        <HStack spacing={4}>
          <Link href="https://github.com/amanshekhar0" isExternal>
            <Icon as={FaGithub} boxSize={6} _hover={{ color: "teal.300" }} />
          </Link>
          
          <Link href="https://www.linkedin.com/in/aman-shekhar-59889027a/" isExternal>
            <Icon as={FaLinkedin} boxSize={6} _hover={{ color: "teal.300" }} />
          </Link>
         
        </HStack>
      </Stack>

    
      <Divider my={6} borderColor="gray.600" />

   
      <Text fontSize="sm" textAlign="center" color="gray.500">
        &copy; {new Date().getFullYear()} Your Website Name. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
