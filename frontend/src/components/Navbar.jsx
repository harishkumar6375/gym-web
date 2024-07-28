import React from "react";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Box
        bg="black"
        py={4}
        boxShadow="md"
      >
        <Container maxW="container.lg">
          <Flex justify="flex-start" align={"flex-start"}>
            <Heading
              as="h1"
              size="lg"
              border={"2px"}
              borderRadius={"5px"}
              borderColor="teal"
              p={2}
              color={"teal"}
            >
              H4RISH FITNESS
            </Heading>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
