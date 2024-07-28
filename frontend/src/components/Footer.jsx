import React from 'react'
import { Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
  <Box
      as="footer"
      width="100%"
      py={4}
      fontSize={'large'}
      textAlign="center"
      bg="black"
      color="white"
    >
      © 2024 H4RISH FITNESS. All rights reserved.
    </Box>
    </>
  )
}

export default Footer