import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

function CompanyTag() {
  return (
    <Box>
      <Flex alignItems={'center'}>
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          size={'sm'}
        />
        <Box ml={'12px'}>
          <Text fontSize={'12px'} fontWeight={'bold'}>
            Company A
          </Text>
          <Text fontSize={'12px'} fontWeight={'normal'} color={'#9599B6'}>
            Marketing Administrator
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default CompanyTag;
