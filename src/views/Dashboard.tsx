import { Flex, useColorModeValue } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router';
import { useStore } from '../store/store';
import { NavBar, MainContent, SideBar } from '../components';
import { auth } from '../index';
import constants from '../store/constants';

const dummyNotes = [
  {
    id: '123',
    title: 'Portfolio 01',
    body: '<p>I work within a cross-functional product development team to bring together the design (user interface, accessibility, and user experience) and engineering (front-end development) functions of the business.</p>',
    timeStamp: '31 May'
  },
  {
    id: '456',
    title: 'Portfolio 02',
    body: '<h1>Hey friend!</h1>',
    timeStamp: '31 May'
  },
  {
    id: '789',
    title: 'Portfolio 03',
    body: '<ul><li>aaa</li><li>bbb</li><li>ccc</li></ul>',
    timeStamp: '31 May'
  }
]

export const DashboardPage: React.FC = () => {
  const notes = useStore((state) => state.notes);
  const setNotes = useStore((state) => state.setNotes);
  const selectedId = useStore((state) => state.selectedId);
  const [ user ] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (user === null) {
      history.push(constants.LOGIN_ROUTE);
    }
  }, [ user ]);

  useEffect(() => {
    setNotes(dummyNotes);
  }, []);

  return (
    <>
      <NavBar />
      <Flex>
        <SideBar notes={notes} />
        <Flex w={'80vw'} h={`calc(100vh - 64px)`} bg={useColorModeValue('gray.50', 'gray.800')}>
        {
          selectedId.length > 0 ? <MainContent selectedId={selectedId} /> : null
        }
        </Flex>
      </Flex>
    </>
  );
}