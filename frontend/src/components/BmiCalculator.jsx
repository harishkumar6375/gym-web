import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Image,
  VStack,
} from "@chakra-ui/react";

const BmiCalculator = () => {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [gender, setGender] = useState();
  const [bmi, setBmi] = useState();
  const [loading ,setLoading]= useState()
  const toast = useToast();

  const calculateBMI = (e) => {
    e.preventDefault();
    setLoading(true)

    if (!height || !weight || !gender) {
      toast({
        title: "Invalid Value",
        description: "Please enter the valid height ,weight and gender.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      setLoading(false)
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      toast({
        title: "Take Advise",
        description:
          "You are underweight. Consider seeking advise from a healthcare provider",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      setLoading(false)
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast({
        title: "Take Advise",
        description:
          "You have normal weight. Consider seeking advise from a healthcare provider",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      setLoading(false)
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast({
        title: "Take Advise",
        description:
          "You are overweight. Consider seeking advise from a healthcare provider",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      setLoading(false)
    } else {
      toast({
        title: "Take Advise",
        description:
          "You are in the obese range. It is recommended to seek advise from a healthcare specialist..",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      setLoading(false)
    }
  };
  return (
    <>
      <Box
        bgImage="url('./l.jpg')"
        bgSize="cover"
        bgPosition="center"
        minHeight="100vh"
        color="white"
        p={4}
      >
        <Heading
          as="h1"
          size="xl"
          color={"teal"}
          mb={12}
          mt={12}
          textAlign="center"
        >
          BMI CALCULATOR
        </Heading>
        <form onSubmit={calculateBMI}>
          <Flex
            direction={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-around"
            height="calc(100% - 80px)"
          >
            {/* Left Side Form */}

            <Box
              bg="rgba(0, 0, 0, 0.7)"
              p={6}
              borderRadius="md"
              width={{ base: "100%", md: "45%" }}
              mb={{ base: 6, md: 0 }}
            >
              <VStack spacing={4}>
                <FormControl id="height">
                  <FormLabel>Height (cm)</FormLabel>
                  <Input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required
                  />
                </FormControl>
                <FormControl id="weight">
                  <FormLabel>Weight (kg)</FormLabel>
                  <Input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                  />
                </FormControl>
                <FormControl id="gender">
                  <FormLabel>Gender</FormLabel>
                  <Select
                    placeholder="Select option"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Select>
                </FormControl>
                <Button
                  colorScheme="teal"
                  width="full"
                  type="submit"
                  isLoading={loading}
                >
                  Calculate BMI
                </Button>
              </VStack>
            </Box>

            {/* Right Side Image */}
            <Box width={{ base: "100%", md: "45%" }}>
              <Image
                src="https://img.freepik.com/free-photo/data-stats-around-person-doing-physical-activity_23-2150165162.jpg?t=st=1722102754~exp=1722106354~hmac=5cc3c4a01a37f7918c74f188de098ab3f9539ed2d64eaed89f621d057522ed73&w=996"
                alt="BMI Illustration"
                borderRadius="md"
                width="100%"
                height="auto"
              />
            </Box>
          </Flex>
        </form>
      </Box>
    </>
  );
};

export default BmiCalculator;
