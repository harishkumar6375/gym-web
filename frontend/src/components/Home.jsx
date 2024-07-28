import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Container,
  HStack,
  Flex
} from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Box
        bgImage="url('./gym2.jpg')"
        bgSize="cover"
        bgPosition="center"
        height="100vh"
        color="white"
      >
        <Container maxW="container.lg" height="100%">
          <VStack
            align="flex-start"
            spacing={6}
            justifyContent={"center"}
            height="100%"
          >
            <Heading as="h1" size="3xl">
              LET'S
            </Heading>
            <Heading as="h1" size="3xl">
              GET
            </Heading>
            <Heading as="h1" size="3xl">
              MOVING
            </Heading>
            <Text fontSize="xl" mt={4}>
              Your Journey to Fitness Starts Here
            </Text>
            <Text fontSize="xl" color="blue.400">
              Unleash Your Potential
            </Text>
            <Box justifyContent={"flex-start"}>
              <Flex
                direction={{ base: "column", md: "row" }}
                justify="flex-start"
                align="center"
                gap={{ base: 4, md: 8 }}
              >
                <Button colorScheme="teal">Start Your Journey</Button>
                <Button colorScheme="blue" >
                  Discover Your Plan            
                </Button>
              </Flex>
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default Home;
