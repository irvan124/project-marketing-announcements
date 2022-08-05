import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import ToggleLanguage from '../components/ToggleLanguage';
import Layout from '../layouts';

function AdminPortal() {
  const [article, setArticle] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isCardSelected, setIsCardSelected] = useState(null);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = () => {
    Axios.get(`https://62ec465a818ab252b6fa1aa1.mockapi.io/articles`)
      .then(response => {
        return response.data;
      })
      .then(data => {
        setArticle(data);
      })
      .catch(error => {
        console.log(error.response.data.error);
      });
  };

  const onSearch = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <Layout>
      <Box
        w={'100%'}
        //bg="green.400"
        color="#262626"
        px={'40px'}
        pt={'36px'}
        h={'100vh'}
      >
        <Navigation />
        <Flex py={'16px'} justifyContent="space-between" alignItems={'center'}>
          <SearchBar value={searchTerm} onSearch={onSearch} />
          <ToggleLanguage />
        </Flex>

        <SimpleGrid columns={{ lg: 2 }} spacing={5}>
          {article
            .filter(val => {
              if (searchTerm === '') {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val, key) => {
              return (
                <Card
                  dataArticle={val}
                  key={key}
                  selected={isCardSelected === key}
                  onChange={() => setIsCardSelected(key)}
                />
              );
            })}
        </SimpleGrid>
      </Box>
    </Layout>
  );
}

export default AdminPortal;
