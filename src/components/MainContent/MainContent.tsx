import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { Quill } from '../index';

export const MainContent: React.FC = () => {
  return (
    <Flex
        w={'80vw'}
        h={`calc(100vh - 64px)`}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Box w={'100%'} height={'100%'}>
            <Text fontSize={'3xl'} padding={2} color={useColorModeValue('gray.600', 'gray.200')}>Title</Text>
            <Quill />
        </Box>
    </Flex>
  );
}