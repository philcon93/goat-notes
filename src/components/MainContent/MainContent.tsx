import { useEffect, useState } from 'react';
import { Box, Input, useColorModeValue } from '@chakra-ui/react';
import firebase from 'firebase';
import { db } from '../../store/firebase';
import { useStore } from '../../store/store';
import { Quill } from '../index';
import { useDebounce } from '../../hooks';
import constants from '../../store/constants';

export type Props = {
  selectedId: string
}

export const MainContent: React.FC<Props> = ({ selectedId } : Props) => {
  const note = useStore((state) => state.notes.find(note => note.id === selectedId));
  const [ title, setTitle ] = useState(note?.title);
  const deboucedTitle = useDebounce(title);

  const updateDB = async (value: string | undefined, field: 'title' | 'body') => {
    await db.collection(constants.DB_COLLECTION).doc(note?.docId).update({
      [field]: value,
      dateUpdated: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  useEffect(() => {
    setTitle(note?.title);
  }, [note?.title]);

  useEffect(() => {
    if (deboucedTitle !== note?.title) {
      updateDB(title, 'title');
    }
  }, [deboucedTitle]);

  return (
    <Box w={'100%'} height={'100%'}>
      <Input
        variant='unstyled'
        size='lg'
        fontSize={'3xl'}
        padding={2}
        color={useColorModeValue('gray.600', 'gray.200')}
        value={title}
        onChange={event => setTitle(event.target.value)} />
      <Quill body={note?.body} updateDB={updateDB} />
    </Box>
  );
}