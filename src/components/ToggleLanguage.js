import { Box, Circle, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

function ToggleLanguage() {
  return (
    <Box w={'100px'} h={'41px'}>
      <Flex>
        <Text fontSize={14} fontWeight={700}>
          BM
        </Text>
        <Box>
          <Circle size="16px" bg="#9599B6" color="white" mx={2}></Circle>
          <Circle size={'10px'}></Circle>
        </Box>
        <Text fontSize={14} fontWeight={700}>
          EN
        </Text>
      </Flex>
    </Box>
  );
}

export default ToggleLanguage;
