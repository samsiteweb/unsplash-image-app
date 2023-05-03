import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { setTextRange } from "typescript"
import { Image, ImageListState } from "../common/store.interface"
import { addImage, deleteImage, fetchImageList, searchImageList } from "../thunks"


const initialState: ImageListState = {
    images:  [],
    isLoading: false,
    selectedImageId: null,
    msg: ""
}


export const ImageListSlice = createSlice({
    name: 'imageList',
    initialState,
    reducers:  {
        addImageToList: (state, action: PayloadAction<Image> ) => {
            state.images.push({...action.payload})
        },
        selectImage: (state, action) => {
            state.selectedImageId = action.payload?.id;
          },
        loading: (state, action: PayloadAction<Image> ) => {
            state.images.push({...action.payload})
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchImageList.pending, (state,   action) => {
            state.isLoading = false;
        });
        builder.addCase(fetchImageList.fulfilled, (state,   action) => {
            state.images = action.payload.data
            state.isLoading = false;
        });
        builder.addCase(addImage.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addImage.fulfilled, (state, action) => {
            state.images = [action.payload.data, ...state.images]
            state.isLoading = false;
        });
        builder.addCase(deleteImage.pending, (state,   action) => {
            state.isLoading = true;
        });
        builder.addCase(deleteImage.fulfilled, (state,   action) => {
            state.images = state.images.filter(image => image.id !== state.selectedImageId)
            state.isLoading = false;
        });
        builder.addCase(searchImageList.fulfilled, (state,   action) => {
            state.images = action.payload.data
        });
    }
})

export default ImageListSlice.reducer;
export const { addImageToList, selectImage } = ImageListSlice.actions;