import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import 'lato-font';
import React from 'react';
import AdminPortal from './pages/AdminPortal';

const theme = extendTheme({
  fonts: {
    heading: `'lato'`,
    body: `'Lato'`,
  },
});

function App() {
  return (
    <Box>
      <ChakraProvider theme={theme}>
        <AdminPortal />
      </ChakraProvider>
    </Box>
  );
}

export default App;
