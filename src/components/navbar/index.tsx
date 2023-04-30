import React from 'react'
import Button from '../helper/button';
import SearchInput from '../helper/search';

import {
    Container
} from "./styles"

const Navbar:React.FC = ()=> (
    <>
      <Container>
        
        <SearchInput placeholder='Search by name' />
        <Button primary >Add a photo</Button>
      </Container>
    </>
  )
  
  export default Navbar;