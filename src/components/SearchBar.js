import { Input } from '@chakra-ui/react';
import React from 'react';

function SearchBar(props) {
  return (
    <Input
      placeholder="Search Title or Description"
      w={{ md: '540px' }}
      backgroundColor={'#FFFFFF'}
      border={'1px'}
      borderColor="#CCCCCC"
      fontSize={'14px'}
      onChange={props.onSearch}
      value={props.value}
    />
  );
}

export default SearchBar;
