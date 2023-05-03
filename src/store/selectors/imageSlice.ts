import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';
import {Image} from '../features/imageSlice'
export const  useImageListLoadingStatus = ()  =>{
  return useSelector((state: RootState) => state.imageList.isLoading);
}

const getImageList = (state: RootState) => state.imageList.images;
const getImageListId = (state: RootState) => state.imageList.selectedImageId;
export const getSelectedImage = createSelector(
  getImageList,
  getImageListId,
  (imageList, selectedImageId) => imageList.find((image: Image) => image.id === selectedImageId)
);
