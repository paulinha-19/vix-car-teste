// src/components/NavigationMenu.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, HStack, Spacer, Image, Button, Link as ChakraLink } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { useAuth, AuthProvider } from '../context/authContext';

const NavigationMenu: React.FC = () => {

  const { isAuthenticated, logout } = useAuth();

  return (
    <Flex borderRadius={5} p={4} align="center">
      <HStack spacing={4}>
          <Image
            borderRadius='full'
            boxSize='50px'
            src='https://bit.ly/3OUOk19'
            alt='Dan Abramov'
          />
          <Spacer/>
          <ChakraLink as={Link} to="/home">Home</ChakraLink> 
          <ChakraLink as={Link} to="/favorites">Favoritos</ChakraLink>
          <AuthProvider>
          {isAuthenticated ? (
          <Button onClick={logout} variant="link">
            Sign Out
          </Button>
          
          ) : (
          <Link to="/">logout</Link>
        )}
        </AuthProvider>
          <ColorModeSwitcher/>
      </HStack>
    </Flex>
  );
};

export default NavigationMenu;
