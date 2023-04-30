import React from 'react';
import Navbar from './components/navbar';
import { ChakraProvider } from '@chakra-ui/react'

const  App: React.FC = () => {
  return (
    <ChakraProvider>
       <Navbar/>
    </ChakraProvider>
  );
}

export default App;
