import {
  Flex,
  Box,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

export const LoginPage: React.FC = () => {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Box align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to view the goats notes</Heading>
        </Box>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                Sign in with Google account
              </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}