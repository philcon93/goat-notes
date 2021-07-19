import { Box, Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons'
import firebase from 'firebase';
import { v4 as uuidv4 } from 'uuid';
import { NoteItemData, useStore } from '../../store/store';
import { auth, db } from '../../store/firebase';
import { NoteItem } from '../index';

type Props = {
  notes: NoteItemData[]
}

export const SideBar: React.FC<Props> = ({ notes }: Props) => {
  const setSelectedId = useStore((state) => state.setSelectedId);

  const addNewNote = async () => {
    const uid = auth.currentUser?.uid;
    const noteId = uuidv4();

    await db.collection('notes').add({
      id: noteId,
      title: 'Untitled Note',
      body: '',
      dateCreated: firebase.firestore.FieldValue.serverTimestamp(),
      dateUpdated: firebase.firestore.FieldValue.serverTimestamp(),
      userId: uid
    });
    setSelectedId(noteId);
  };

  return (
    <Box w={'20vw'} h={`calc(100vh - 64px)`}>
      <Button
        onClick={addNewNote}
        leftIcon={<AddIcon />}
        colorScheme='teal'
        w={'100%'}
        borderRadius={0}>New Note</Button>
      {notes.map(note =>
        <NoteItem
          key={note.id}
          id={note.id} 
          title={note.title}
          body={note.body}
          dateCreated={note.dateCreated} />
      )}
    </Box>
  );
}