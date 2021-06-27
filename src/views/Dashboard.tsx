import { Flex } from '@chakra-ui/react';
import { NavBar, MainContent, SideBar } from '../components';

const notes = [
  {
    id: '123',
    title: 'Portfolio',
    body: 'I work within a cross-functional product development team to bring together the design (user interface, accessibility, and user experience) and engineering (front-end development) functions of the business.',
    timeStamp: '31 May'
  }
]

export const DashboardPage: React.FC = () => {

  return (
    <>
      <NavBar />
      <Flex>
        <SideBar notes={notes} />
        <MainContent />
      </Flex>
    </>
  );
}