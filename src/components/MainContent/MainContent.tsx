import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { useStore } from '../../store/store';
import { Quill } from '../index';

export type Props = {
  selectedId: string
}

export const MainContent: React.FC<Props> = ({ selectedId } : Props) => {
  const notes = useStore((state) => state.notes.find(note => note.id === selectedId));

  return (
    <Box w={'100%'} height={'100%'}>
      <Text fontSize={'3xl'} padding={2} color={useColorModeValue('gray.600', 'gray.200')}>{notes?.title}</Text>
      <Quill body={notes?.body}/>
    </Box>
  );
}