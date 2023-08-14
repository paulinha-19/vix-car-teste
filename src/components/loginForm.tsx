import React, { useState, useEffect  } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Box
} from '@chakra-ui/react';
import { useAuth } from '../context/authContext';
import { useNavigate } from "react-router-dom";

export const LoginForm: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  

  const handleLogin = () => {
    const mockUser = {
      email: 'admin@vix.com.br',
      password: 'admin',
    };

    if (email === mockUser.email && password === mockUser.password) {
      login(email, password);
      navigate("/home")
    } else {
      setLoginError(true);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home"); // Redireciona para a página home se estiver autenticado
    }
  }, [isAuthenticated, navigate]);

  return (
    <Box maxW="100%" boxShadow='dark-lg' p={6} rounded='md'>
      <VStack spacing={3}>
        <FormControl>
          <FormLabel mb={5}>Email</FormLabel>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        {loginError && <Text color="red">Credenciais inválidas</Text>}
        <Button mb={5} colorScheme="linkedin" onClick={handleLogin}>
          Login
        </Button>
      </VStack>
    </Box>
  );
};

export default LoginForm;