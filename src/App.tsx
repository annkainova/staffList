import { ChakraProvider } from '@chakra-ui/react';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <ChakraProvider>
      <MainPage />
    </ChakraProvider>
  );
}

export default App;
