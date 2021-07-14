import { useEffect } from 'react';
import {
  Flex,
  Box,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router';
import { auth } from '../store/firebase';
import constants from '../store/constants';

export const LoginPage: React.FC = () => {
  const [ user ] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (user !== null) {
      history.push(constants.DASHBOARD_ROUTE);
    }
  }, [ user ]);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider);
  };

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
                _hover={{ bg: 'blue.500' }}
                onClick={signInWithGoogle}>
                Sign in with Google account
              </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}