import { Box } from '@chakra-ui/react';
import { NoteItemData } from '../../store/store';
import { NoteItem } from '../index';

type Props = {
    notes: NoteItemData[]
}

export const SideBar: React.FC<Props> = ({ notes }: Props) => {
  return (
    <Box w={'20vw'} h={`calc(100vh - 64px)`}>
      {notes.map(note =>
          <NoteItem
            key={note.id}
            id={note.id} 
            title={note.title}
            body={note.body}
            userId={note.userId}
            dateCreated={note.dateCreated} />
      )}
    </Box>
  );
}