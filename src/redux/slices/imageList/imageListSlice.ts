import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Image, ImageListState } from "../../common/store.interface";
import { addImage, deleteImage, fetchImageList, searchImageList } from "./imageListThunks";

const initialState: ImageListState = {
  images: [],
  isLoading: false,
  selectedImageId: null,
  msg: "",
};

export const ImageListSlice = createSlice({
  name: "imageList",
  initialState,
  reducers: {
    selectImage: (state, action) => {
      return {
        ...state,
        selectedImageId: action.payload?.id,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImageList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchImageList.fulfilled, (state, action) => {
        state.images.push(...action.payload.data);
        state.isLoading = false;
      })
      .addCase(fetchImageList.rejected, (state, action) => {
        state.isLoading = false;
        state.msg = "Failed to fetch image list.";
      })
      .addCase(addImage.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addImage.fulfilled, (state, action) => {
        state.images.unshift(action.payload.data);
        state.isLoading = false;
      })
      .addCase(addImage.rejected, (state, action) => {
        state.isLoading = false;
        state.msg = "Failed to add image.";
      })
      .addCase(deleteImage.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteImage.fulfilled, (state, action) => {
        if (action.payload && action.payload.status !== "error") {
          state.images = state.images.filter(
            (image) => image.id !== state.selectedImageId
          );
        }
        state.isLoading = false;
      })
      .addCase(deleteImage.rejected, (state, action) => {
        state.isLoading = false;
        state.msg = "Failed to delete image.";
      })
      .addCase(searchImageList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(searchImageList.fulfilled, (state, action) => {
        state.images.splice(0, state.images.length, ...action.payload.data);
        state.isLoading = false;
      })
      .addCase(searchImageList.rejected, (state, action) => {
        state.isLoading = false;
        state.msg = "Failed to search image list.";
      });
  },
});

export default ImageListSlice.reducer;
export const { selectImage } = ImageListSlice.actions;
