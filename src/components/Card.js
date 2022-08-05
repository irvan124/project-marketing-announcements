import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import CalendarLogo from '../assets/icons/Calendar.png';

export default function Card(props) {
  return (
    <Box>
      <Stack
        borderRadius="md"
        borderWidth={props.selected ? '1px' : '0px'}
        borderColor={props.selected ? 'red' : false}
        w={'100%'}
        height={{ sm: '400px', md: '232px' }}
        direction={{ base: 'column', lg: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        padding={4}
        onClick={props.onChange}
        _selected={props.selected}
        cursor="pointer"
      >
        <Flex direction={{ base: 'column', lg: 'row' }}>
          <Image
            objectFit="cover"
            w={{ sm: '100%', md: '200px' }}
            h={{ sm: '200px', md: '200px' }}
            src={props.dataArticle.thumbnail}
          />
          <Flex flexDirection="column" mx={'16px'}>
            <Flex alignItems={'center'}>
              <Box>
                <Image src={CalendarLogo} w={'16px'} h={'16px'} />
              </Box>
              <Box mx={2} />
              <Text fontWeight={600} fontSize={'12px'} color={'#A2A5BF'}>
                Active
              </Text>
              <Box mx={'2px'} />
              <Text fontSize={'12px'} color={'black'} fontWeight={600}>
                {props.dataArticle.createdOn} - {props.dataArticle.updatedOn}
              </Text>
            </Flex>
            <Text
              fontWeight={700}
              color={'black'}
              size="sm"
              my={'16px'}
              fontSize={21}
            >
              {props.dataArticle.title.slice(0, 120) + '...'}
            </Text>
            <Text fontWeight={400} color={'#BDBFD1'} size="sm" fontSize={14}>
              {props.dataArticle.description.slice(0, 200) + '...'}
            </Text>
            <Flex alignItems={'center'} pt={'16px'}>
              <Box>
                <Image src={CalendarLogo} w={'16px'} h={'16px'} />
              </Box>
              <Box mx={2} />
              <Text fontWeight={600} fontSize={'12px'} color={'#A2A5BF'}>
                Last Updated
              </Text>
              <Box mx={'2px'} />
              <Text fontSize={'12px'} color={'black'} fontWeight={600}>
                {props.dataArticle.updatedOn}
              </Text>
              <Text
                fontSize={'12px'}
                color={'#A2A5BF'}
                fontWeight={400}
                mx={'3px'}
              >
                by
              </Text>
              <Text fontSize={'12px'} color={'black'} fontWeight={600}>
                {props.dataArticle.updatedBy}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Stack>
    </Box>
  );
}
