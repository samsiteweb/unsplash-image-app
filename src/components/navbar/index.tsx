import React, { useState } from 'react'
import { PrimaryButton as AddImageButton } from '../reusable/Button';
import myUnsplashLogo from '../../assets/my_unsplash_logo.svg';

import {
    Container,
    Logo,
    LogoAndSearchBarContainer,
    SearchBarWrapper
} from "./styles"
import CustomInput from '../reusable/CustomInput';
import debounce from '../../utility/helperFunctions';
import { useAppDispatch, useAppSelector } from '../../redux/common/store';
import { searchImageList } from '../../redux/slices/imageList/imageListThunks';
import { AddImageModal } from '../Modals/AddImageModal';



const Navbar:React.FC = ()=> {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch()
    const handleOpenModal = () => {
      setIsOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsOpen(false);
    };

    const handleChange = debounce((value: string) => {
        if (value === '' || value.length > 2) {
          dispatch(searchImageList(value));
        }
      }, 500);

return(
    <>
      <Container>
        <LogoAndSearchBarContainer>
            <Logo src={myUnsplashLogo} alt="" />
          <SearchBarWrapper>
            <CustomInput width='300px' icon='search' onChange={(event) => handleChange(event.target.value)} placeholder='Search by name' />
         </SearchBarWrapper>
        </LogoAndSearchBarContainer>
        <AddImageButton onClick={handleOpenModal}>Add a photo</AddImageButton>
      </Container>
      <AddImageModal isOpen={isOpen} handleCloseModal={handleCloseModal} />
    </>
  )
}
  
  export default Navbar;