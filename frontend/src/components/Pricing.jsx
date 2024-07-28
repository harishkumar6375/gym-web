import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Text, Button, VStack, SimpleGrid } from '@chakra-ui/react';
import Card from "./Card";

const Pricing = () => {
    const cardData = [
        {
          heading: "QUARTERLY",
          head:"PACKAGE",
          price: "Rs 18000",
          days: "For 3 Months",
          benefits: [
            "Equipment",
            "All Day Free Training",
            "Free Restroom",
            "24/7 Skilled Support",
            "20 Days Freezing Option",
          ],
          image: "./g4.jpg"
        },
        {
            heading: "HALF YEARLY",
            head:"PACKAGE",
            price: "Rs 34000",
            days: "For 6 Months",
            benefits: [
              "Equipment",
              "All Day Free Training",
              "Free Restroom",
              "24/7 Skilled Support",
              "20 Days Freezing Option",
            ],
            image: "./g2.jpg"
          },
          {
            heading: "YEARLY",
            head:"PACKAGE",
            price: "Rs 67000",
            days: "For 12 Months",
            benefits: [
              "Equipment",
              "All Day Free Training",
              "Free Restroom",
              "24/7 Skilled Support",
              "20 Days Freezing Option",
            ],
            image: "./gym2.jpg"
          },
      ];
  return (
    <>
       <Box p={4} minHeight="100vh">
       <Heading size={'xl'} textAlign={'center'} color={'teal'} mt={6} mb={8}>H4RISH FITNESS PLANS</Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
        {cardData.map((card, index) => (
          <Card 
            key={index} 
            heading={card.heading} 
            head={card.head}
            price={card.price} 
            days={card.days} 
            benefits={card.benefits} 
            image={card.image} 
          />
        ))}
      </SimpleGrid>
    </Box>
    </>
  );
};

export default Pricing;
