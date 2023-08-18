import { 
  Box,
  Center,
  Grid,
  GridItem,
  Heading } from '@chakra-ui/react';
import LoginForm from '../components/loginForm';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export const Login: React.FC = () => {
    return (
      <Grid templateColumns="repeat(3, 1fr)" gap={2}>
        <GridItem colSpan={1} p={4}>
        </GridItem>
        <Center h="100vh">
          <GridItem colSpan={1} p={4}>
            <Center h="100%">
              <Box w="100%">
                <Heading mb="4">Login</Heading>
                <LoginForm />
              </Box>
            </Center>
          </GridItem>
        </Center>
        <GridItem display="end" colSpan={1} p={4}>
          <ColorModeSwitcher/>
        </GridItem>
      </Grid>
  );
  };

export default Login;