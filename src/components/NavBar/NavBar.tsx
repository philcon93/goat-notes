import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useColorMode,
    useDisclosure,
    useColorModeValue,
    Stack,
  } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { auth } from '../../index';
  
type NavLinkProps = {
  children: React.ReactNode,
  onClick?: () => void
}

const NavLink: React.FC<NavLinkProps> = ({ children, ...props }: NavLinkProps) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    {...props}>
    {children}
  </Link>
);
  
export const NavBar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const signOut = () => {
    return auth.currentUser && auth.signOut()
  };

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Box alignItems={'center'}>Logo</Box>
        <Flex alignItems={'center'}>
        <HStack spacing={8} alignItems={'center'}>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            <NavLink onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</NavLink>
          </HStack>
        </HStack>
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}>
              <Avatar
                size={'sm'}
                src={
                  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                }
              />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={signOut}>Log Out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <NavLink onClick={toggleColorMode}>{colorMode === "light" ? "Dark" : "Light"} Mode</NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};