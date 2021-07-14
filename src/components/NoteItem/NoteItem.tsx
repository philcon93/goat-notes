import { Box, Divider, Text, useColorModeValue } from '@chakra-ui/react';
import { NoteItemData, useStore } from '../../store/store';
import { removeHTMLTags } from '../../helpers';

export const NoteItem: React.FC<NoteItemData> = ({ id, title, body, dateCreated }: NoteItemData) => {
  const selectedId = useStore((state) => state.selectedId);
  const setSelectedId = useStore((state) => state.setSelectedId);

  const updateSelect = () => {
    if (selectedId === id) {
      setSelectedId('')
    } else {
      setSelectedId(id)
    }
  }

  return (
    <Box w={'100%'} border={id == selectedId ? '1px' : 0} _hover={{ cursor: 'pointer' }} onClick={updateSelect}>
        <Box py={4} px={2}>
          <Text fontSize={'lg'} color={useColorModeValue('gray.900', 'gray.200')}>{title}</Text>
          { body && <Text fontSize={'sm'} paddingBottom={8} color={useColorModeValue('gray.600', 'gray.200')}>{removeHTMLTags(body).substr(0, 30)}...</Text>}
          <Text fontSize={'xs'} color={useColorModeValue('gray.600', 'gray.200')}>{new Date(dateCreated.seconds).toDateString()}</Text>
        </Box>
        <Divider />
    </Box>
  );
}