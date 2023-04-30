import React from 'react'
import Button from '../helper/button';
import {
    Container
} from "./styles"

const Navbar:React.FC = ()=> (
    <>
      <Container>
        <Button primary >Add a photo</Button>
      </Container>
    </>
  )
  
  export default Navbar;