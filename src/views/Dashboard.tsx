import { useEffect } from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router';
import { NoteItemData, useStore } from '../store/store';
import { NavBar, MainContent, SideBar } from '../components';
import { auth, db } from '../store/firebase';
import constants from '../store/constants';

export const DashboardPage: React.FC = () => {
  const notes = useStore(state => state.notes);
  const setNotes = useStore(state => state.setNotes);
  const selectedId = useStore(state => state.selectedId);
  const [ user ] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (user === null) {
      history.push(constants.LOGIN_ROUTE);
    }
  }, [ user ]);

  useEffect(() => {
    db
      .collection('notes')
      .orderBy('dateCreated', 'desc')
      .limit(100)
      .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => {
          const data = doc.data();
          data.docId = doc.id;

          return data;
        }) as NoteItemData[];

        setNotes(data);
      })
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