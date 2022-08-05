import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import CompanyTag from '../components/CompanyTag';

function Navbar() {
  return (
    <Box w="100%" h={'70px'} bg="#FFFFFF" boxShadow="sm">
      <Flex flexDir={'row-reverse'} px={'38px'} py={'20px'}>
        <CompanyTag />
      </Flex>
    </Box>
  );
}

export default Navbar;
