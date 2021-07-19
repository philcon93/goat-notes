import { Box, Flex, Divider, Text, useColorModeValue } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import firebase from 'firebase';
import { db } from '../../store/firebase';
import { useStore } from '../../store/store';
import { removeHTMLTags } from '../../helpers';

type Props = {
  id: string,
  title: string,
  body?: string,
  date: firebase.firestore.Timestamp,
}

export const NoteItem: React.FC<Props> = ({ id, title, body, date }: Props) => {
  const selectedId = useStore((state) => state.selectedId);
  const setSelectedId = useStore((state) => state.setSelectedId);

  const updateSelect = () => {
    if (selectedId === id) {
      setSelectedId('')
    } else {
      setSelectedId(id)
    }
  }

  const deleteNote = async (event : React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (window.confirm('Are you sure you want to delete this item?')) {
      const query = await db.collection('notes').where('id', '==', id).get();

      query.forEach(element => {
          element.ref.delete();
      });
    }
  }

  return (
    <Box w={'100%'} border={id == selectedId ? '1px' : 0} _hover={{ cursor: 'pointer' }} onClick={updateSelect}>
        <Box py={4} px={2}>
          <Text fontSize={'lg'} color={useColorModeValue('gray.900', 'gray.200')}>{title}</Text>
          { body && <Text fontSize={'sm'} paddingBottom={8} color={useColorModeValue('gray.600', 'gray.200')}>{removeHTMLTags(body).substr(0, 30)}...</Text> }
          <Flex justifyContent={'space-between'}>
          { date !== null &&
            <Text fontSize={'xs'} color={useColorModeValue('gray.600', 'gray.200')}>
              {date.toDate().toLocaleTimeString('en-AU') + ' ' + date.toDate().toDateString()}
            </Text>
          }
          <Text
            onClick={deleteNote}
            fontSize={'xs'}
            color={useColorModeValue('gray.600', 'gray.200')}
            _hover={{ color: 'red.500' }}>
              <DeleteIcon />
            </Text>
          </Flex>
        </Box>
        <Divider />
    </Box>
  );
}