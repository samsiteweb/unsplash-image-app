import React from 'react';
import Navbar from './components/navbar';

import styled from "styled-components"

export const Container = styled.div`
  margin: 32px 99px;
`

const  App: React.FC = () => {
  return (
       <Container>
          <Navbar/>
       </Container>
  );
}

export default App;
