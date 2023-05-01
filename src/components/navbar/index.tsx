import React from 'react'
import Button from '../helper/button';
import SearchBar from '../helper/search';
import myUnsplashLogo from '../../assets/my_unsplash_logo.svg';

import {
    Container,
    Logo,
    LogoAndSearchBarContainer
} from "./styles"


const Navbar:React.FC = ()=> (
    <>
      <Container>
        <LogoAndSearchBarContainer>
            <Logo src={myUnsplashLogo} alt="" />
            <SearchBar placeholder='Search by name' onChange={() => {}} />
        </LogoAndSearchBarContainer>
        <Button primary >Add a photo</Button>
      </Container>
    </>
  )
  
  export default Navbar;