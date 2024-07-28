import React from 'react'
import { Box, Flex, Heading, Text, Image, SimpleGrid, GridItem } from '@chakra-ui/react';

const WorkoutSession = () => {
  return (
   <>
<Box p={10} maxW="100%" minHeight="100vh" >
      <Flex direction={{ base: 'column', md: 'row' }} gap={8}>
        {/* Left Side */}
        <Box flex="1">
          <Heading as="h2" size="2xl" mb={4} color='teal'>TOP WORKOUT SESSION</Heading>
          <Text mt={10} >Join us for the top workout sessions tailored to your fitness goals.</Text>
          <Text mt={2} mb={12}>Get ready to push your limits and achieve new heights!</Text>
          <Image 
            src="./man.jpg" 
            alt="Workout Session" 
            borderRadius="md"
            width="350px"
          />
        </Box>

        {/* Right Side */}
        <Box flex="1">
          <Heading as="h2" size="2xl" mb={4} color='teal'>FEATURED BOOTCAMPS</Heading>
          <Text mt={10}>Discover our featured bootcamps designed for all fitness levels.</Text>
          <Text mt={2} mb={12}>Whether you're a beginner or a pro, we have a bootcamp for you!</Text>
          <SimpleGrid columns={{ base: 1, md: 1 }} spacing={4}>
            <Box p={2} pl={6} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md" mb={2}>Bootcamp 1</Heading>
              <Text>Intense full-body workout.</Text>
              <Text>Starts every Monday and Wednesday.</Text>
            </Box>
            <Box p={2} pl={6} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md" mb={2}>Bootcamp 2</Heading>
              <Text>Cardio and strength training.</Text>
              <Text>Join us on Tuesdays and Thursdays.</Text>
            </Box>
            <Box  p={2} pl={6} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md" mb={2}>Bootcamp 3</Heading>
              <Text>High-intensity interval training.</Text>
              <Text>Sessions on Wednesdays and Fridays.</Text>
            </Box>
            <Box  p={2} pl={6} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md" mb={2}>Bootcamp 4</Heading>
              <Text>Strength and conditioning.</Text>
              <Text>Available on Mondays and Thursdays.</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
   </>
  )
}

export default WorkoutSession