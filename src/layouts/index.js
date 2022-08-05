import { Box } from '@chakra-ui/react';
import React from 'react';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <Box bg={'#F7F7F7'} width="100%">
      <Navbar />
      {children}
    </Box>
  );
}

export default Layout;
