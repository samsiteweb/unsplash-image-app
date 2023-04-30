import React from 'react'
import Button from '../helper/button';
import SearchBar from '../helper/search';

import {
    Container
} from "./styles"

const Navbar:React.FC = ()=> (
    <>
      <Container>
        <SearchBar placeholder='Search by name' onChange={() => {}} />
        <Button primary >Add a photo</Button>
      </Container>
    </>
  )
  
  export default Navbar;