import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Image {
    id: string,
    image_url: string,
    label: string,
    created_at: string,
    updated_at: string
}
interface ImageListState{
    images: Image[]
    msg: string,
    selectedImageId: string | null,
    isLoading: boolean
}

const initialState: ImageListState = {
    images:  [],
    isLoading: false,
    selectedImageId: null,
    msg: ""
}

export const fetchImageList = createAsyncThunk("imageList/fetch", async (thunkApi) => {
    const response : any = await fetch("http://localhost:3210/v1/dev/unsplash", {
        method: "GET",
    });
    const data = response.json();
    return data;
})

export const searchImageList = createAsyncThunk("imageList/search", async (queryString: string, thunkApi) => {
    const response : any = await fetch(`http://localhost:3210/v1/dev/unsplash/search?queryString=${queryString}`, {
        method: "POST",
    });
    const data = response.json();
    return data;
})

export const addImage = createAsyncThunk("imageList/save", async (payload:Partial<Image>, thunkApi) => {
        console.log(payload)
    const response = await fetch("http://localhost:3210/v1/dev/unsplash", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    const data = response.json();
    return data;
} )

export const deleteImage = createAsyncThunk("imageList/delete", async ({id, password}: {id: string, password:string}, thunkApi) => {
    const response = await fetch(`http://localhost:3210/v1/dev/unsplash?id=${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({password})
    });

    const data = response.json();
    return data;
} )


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
            state.isLoading = true
        });
        builder.addCase(fetchImageList.fulfilled, (state,   action) => {
            state.images = action.payload.data
            state.isLoading = false;
        });
        builder.addCase(fetchImageList.rejected, (state, action) => {
            state.msg = "error fetching image list"
            state.isLoading = false;
        });
        builder.addCase(addImage.fulfilled, (state, action) => {
            state.images = [...state.images, action.payload.data]
            state.isLoading = false;
        });
        builder.addCase(addImage.rejected, (state, action) => {
            state.msg = "error adding to image list"
            state.isLoading = false;
        });

        builder.addCase(deleteImage.fulfilled, (state,   action) => {
            state.isLoading = false
        });
        builder.addCase(searchImageList.fulfilled, (state,   action) => {
            state.images = action.payload.data
            state.isLoading = false
        });
    }
})

export default ImageListSlice.reducer;
export const { addImageToList, selectImage } = ImageListSlice.actions;