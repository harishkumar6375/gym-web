import { Box, Button,Text, Heading, VStack } from '@chakra-ui/react';
import React from 'react'


const Card = ({ heading, head,price, days, benefits, image }) => {
    return (
        <>
      <Box 
        bgImage={`url(${image})`}
        bgSize="cover"
        bgPosition="center"
        p={6}
        borderRadius="md"
        color="white"
        boxShadow="lg"
        minHeight="400px"
      >
        <VStack align="start" spacing={4} p={4} borderRadius="md">
          <Heading as="h3" size="lg" color={'teal'}>{heading}</Heading>
          <Heading as="h3" size="lg" color={'teal'}>{head}</Heading>
          <Text fontSize="xl">{price}</Text>
          <Text fontSize="md">{days}</Text>
          <VStack align="start" spacing={2}>
            {benefits.map((benefit, index) => (
              <Text key={index}>&bull; {benefit}</Text>
            ))}
          </VStack>
          <Button colorScheme="teal" mt={4}>Join Now</Button>
        </VStack>
      </Box>
      </>
    );
  };

export default Card;