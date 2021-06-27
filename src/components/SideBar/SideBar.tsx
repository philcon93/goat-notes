import { Flex } from '@chakra-ui/react';
import { NoteItem } from '../index';
import { NoteItemProps } from '../NoteItem/NoteItem';

type Props = {
    notes: NoteItemProps[]
}

export const SideBar: React.FC<Props> = ({ notes }: Props) => {
  return (
    <Flex
        w={'20vw'}
        h={`calc(100vh - 64px)`}>
        {notes.map(note =>
            <NoteItem key={note.id} title={note.title} body={note.body} timeStamp={note.timeStamp} />
        )}
    </Flex>
  );
}