import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { NavBar } from '../components';

export const DashboardPage: React.FC = () => {

  return (
    <>
    <NavBar />
    <Flex>
      <Flex
        w={'20vw'}
        h={`calc(100vh - 64px)`}
        bg={useColorModeValue('gray.200', 'gray.800')}>
          <Text fontSize={'lg'} color={'gray.600'}>Sidebar</Text>
      </Flex>
      <Flex
        w={'80vw'}
        h={`calc(100vh - 64px)`}
        bg={useColorModeValue('gray.50', 'gray.800')}>
          <Text fontSize={'lg'} color={'gray.600'}>Main Content</Text>
      </Flex>
      </Flex>
    </>
  );
}