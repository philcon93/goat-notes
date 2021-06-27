import { Box, Divider, Text, useColorModeValue } from '@chakra-ui/react';

export type NoteItemProps = {
  id?: string,
  title: string,
  body?: string,
  timeStamp?: string
}

export const NoteItem: React.FC<NoteItemProps> = ({ title, body, timeStamp }: NoteItemProps) => {
  return (
    <Box w={'100%'}>
        <Box py={4} px={2}>
        <Text fontSize={'lg'} color={useColorModeValue('gray.900', 'gray.200')}>{title}</Text>
        { body && <Text fontSize={'sm'} paddingBottom={8} color={useColorModeValue('gray.600', 'gray.200')}>{body.substr(0, 30)}...</Text>}
        <Text fontSize={'xs'} color={useColorModeValue('gray.600', 'gray.200')}>{timeStamp}</Text>
        </Box>
        <Divider />
    </Box>
  );
}