import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styled from "styled-components";
import Button from '../helper/button';

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
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const DeleteButton = styled(Button)`
 
  top: 50px;
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
   
  }
  
  & > ${ImageLabel} {
    align-self: flex-start;
    margin-bottom: 30px;
  }
`;


interface ImageMasonryProps {
  images: { src: string; label: string }[];
  onImageDelete?: (index: number) => void;
}

const ImageMasonry: React.FC<ImageMasonryProps> = ({ images, onImageDelete }) => {
  const handleImageDelete = (index: number) => {
    if (onImageDelete) {
      onImageDelete(index);
    }
  };

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="10px">
        {images.map((image, index) => (
          <ImageContainer key={index}>
            <Image src={image.src} alt={image.label} />
            <ImageOverlay>
              <ImageLabel>{image.label}</ImageLabel>
              <DeleteButton dangerOutline onClick={() => handleImageDelete(index)}>
                delete
              </DeleteButton>
            </ImageOverlay>
          </ImageContainer>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default ImageMasonry;
