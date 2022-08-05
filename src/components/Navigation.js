import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

function Navigation() {
  return (
    <Flex borderBottom="2px" borderColor="#E5EAEE" py={'12px'}>
      <Text fontWeight={'bold'} fontSize={'16px'} color={'#000000'}>
        Marketing Announcements
      </Text>
    </Flex>
  );
}

export default Navigation;
