import React, { useState } from 'react'
import { PrimaryButton as AddImageButton } from '../helper/button';
import myUnsplashLogo from '../../assets/my_unsplash_logo.svg';

import {
    Container,
    Logo,
    LogoAndSearchBarContainer
} from "./styles"
import { AddImageModal } from '../Modals/addImageModal';
import CustomInput from '../helper/customInput';


const Navbar:React.FC = ()=> {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
      setIsOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsOpen(false);
    };

return(
    <>
      <Container>
        <LogoAndSearchBarContainer>
            <Logo src={myUnsplashLogo} alt="" />
            <CustomInput icon='search' placeholder='Search by name' onChange={() => {}} />
        </LogoAndSearchBarContainer>
        <AddImageButton onClick={handleOpenModal} >Add a photo</AddImageButton>
      </Container>
      <AddImageModal isOpen={isOpen} handleCloseModal={handleCloseModal} />
    </>
  )
}
  
  export default Navbar;