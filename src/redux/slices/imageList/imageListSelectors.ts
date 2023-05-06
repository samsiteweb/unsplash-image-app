import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import { createSelector } from '@reduxjs/toolkit';
import { Image } from '../../common/store.interface';

export const  useImageListLoadingStatus = ()  =>{
  return useSelector((state: RootState) => state.imageList.isLoading);
}

const getImageList = (state: RootState) => state.imageList.images;
const getImageListId:any = (state: RootState) => state.imageList.selectedImageId;

export const getSelectedImage = createSelector(
  getImageList,
  getImageListId,
  (imageList, selectedImageId) => {  

    if (imageList.length > 0) {
        return imageList.find((image: Image) => image.id === selectedImageId)
     }else {
        return []
     }

  })
