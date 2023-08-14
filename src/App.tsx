import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './context/authContext';
import AppRoutes from './routes/routes';

export const App: React.FC = () => (
  <ChakraProvider>
    <AuthProvider>
      <AppRoutes/>
    </AuthProvider>  
  </ChakraProvider>
);

export default App;
