import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styled from "styled-components";
import { Image as StoredImage, selectImage } from "../../store/features/imageSlice";
import { getSelectedImage } from "../../store/selectors/imageSlice";
import {DangerOutlineButton} from '../helper/button'
import { DeleteImageModal } from "../Modals/DeleteImageModal";

const ImageContainer = styled.div`
  margin: 10px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-radius: 24px;
  }
`;


const Image = styled.img`
  width: 100%;
  height: auto;
`;


const ImageLabel = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const DeleteButton = styled(DangerOutlineButton)`
top: 10px;
right: 10px;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.38);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;

  ${ImageContainer}:hover & {
    opacity: 1;
  }
  
  &:hover {
    opacity: 1;
  }

  & > ${DeleteButton} {
    align-self: flex-end;
    margin: 10px 30px;
  }
  
  & > ${ImageLabel} {
    align-self: flex-start;
    margin-bottom: 30px;
  }
`;


interface ImageMasonryProps {
  images: Partial<StoredImage[]>;
  onImageDelete?: (index: number) => void;
}

const ImageMasonry: React.FC<ImageMasonryProps> = ({ images, onImageDelete }) => {

    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();
    const selectedImage = useSelector(getSelectedImage);


    const handleOpenModal = (events:any, image: any) => {
        console.log(image)
        dispatch(selectImage(image))
      setIsOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsOpen(false);
    };

  const handleImageDelete = (index: number) => {
    if (onImageDelete) {
      onImageDelete(index);
    }
  };

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="10px">
        {images.length > 0 ? images.map((image, index) => (
          <ImageContainer key={index}>
            <Image src={image?.image_url} alt={image?.label} />
            <ImageOverlay>
              <ImageLabel>{image?.label}</ImageLabel>
              <DeleteButton  onClick={(events) => handleOpenModal(events, image)}>
                delete
              </DeleteButton>
            </ImageOverlay>
          </ImageContainer>
        )) : null}
      </Masonry>
      <DeleteImageModal isOpen={isOpen} handleCloseModal={handleCloseModal} />
    </ResponsiveMasonry>
  );
};

export default ImageMasonry;
