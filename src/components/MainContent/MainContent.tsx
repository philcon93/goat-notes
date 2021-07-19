import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import firebase from 'firebase';
import { db } from '../../store/firebase';
import { useStore } from '../../store/store';
import { Quill } from '../index';

export type Props = {
  selectedId: string
}

export const MainContent: React.FC<Props> = ({ selectedId } : Props) => {
  const note = useStore((state) => state.notes.find(note => note.id === selectedId));

  const updateDB = async (value: string | undefined) => {
    await db.collection('notes').doc(note?.docId).update({
      body: value,
      dateUpdated: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  return (
    <Box w={'100%'} height={'100%'}>
      <Text fontSize={'3xl'} padding={2} color={useColorModeValue('gray.600', 'gray.200')}>{note?.title}</Text>
      <Quill body={note?.body} update={updateDB} />
    </Box>
  );
}