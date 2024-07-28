import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState();
  const toast = useToast();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !email || !message) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
      return;
    }


    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:4000/contact",
        { name, email,message },
        config
      );

      toast({
        title: "Response Submit",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
  
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
    }
  

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <Box
        bgImage="url('./m.jpg')"
        bgSize="cover"
        bgPosition="center"
        minHeight="100vh"
        color="white"
        p={4}
      >
        <Flex
          justifyContent={{ base: "center", md: "flex-end" }}
          alignItems="center"
          height="100%"
        >
          <Box
            mt={12}
            bg="rgba(0, 0, 0, 0.7)"
            p={6}
            borderRadius="md"
            width={{ base: "100%", md: "50%" }}
            maxWidth="600px"
          >
            <Heading as="h2" size="xl" mb={6}>
              Contact Us
            </Heading>
            <form onSubmit={submitHandler} method="post">
              <VStack spacing={4}>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    
                  />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                   
                  />
                </FormControl>
                <FormControl id="message">
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                   
                  />
                </FormControl>
                <Button
                  colorScheme="teal"
                  type="submit"
                  width="full"
                  isLoading={loading}
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Contact;
