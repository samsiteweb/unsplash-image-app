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
    images:  [
        // { id: '1',
        //   image_url: "https://images.pexels.com/photos/16237228/pexels-photo-16237228.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        //   label: "hek",
        //   created_at: "2015-10-10",
        //   updated_at: "2015-10-10"
        // },
        // { 
        //   id: '2',
        //   image_url:"https://images.unsplash.com/photo-1682005418978-d7ccb6595fa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        //   label: "hek",
        //   created_at: "2015-10-10",
        //   updated_at: "2015-10-10"
        // },
        // {
        //   id: '3',
        //   image_url:"https://images.unsplash.com/photo-1681913781833-6bfe4a576997?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        //   label: "Chaina Town",
        //   created_at: "2015-10-10",
        //   updated_at: "2015-10-10"
        // },
        // {
        //   id: 4,
        //   image_url:"https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609938772793-GBKK33H813K5S0S1C4AY/5.jpg?format=750w",
        //   label: "Chaina Town"
        // },
        // {
        //   id: 5,
        //   image_url:"https://images.unsplash.com/photo-1681913783442-e551ea742373?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        //   label: "Chaina Town"
        // },
        // {
        //   id: 6,
        //   image_url:"https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609939081376-VOEQ5FXHERI9ADPPWZAG/21.jpg?format=750w",
        //   label: "Chaina Town"
        // },
        // {
        //   id: 7,
        //   image_url:"https://images.pexels.com/photos/12755777/pexels-photo-12755777.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        //   label: "Chaina Town"
        // },
        // {
        //   id: 8,
        //   image_url:"https://images.pexels.com/photos/5956834/pexels-photo-5956834.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        //   label: "Chaina Town"
        // },
        // {
        //   id: 9,
        //   image_url:"https://images.pexels.com/photos/12215102/pexels-photo-12215102.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        //   label: "Chaina Town"
        // },
        // {
        //   id: 10,
        //   image_url:"https://images.pexels.com/photos/13989976/pexels-photo-13989976.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        //   label: "Chaina Town"
        // }
      ],
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
} )

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
            // state.images = [...state.images.filter((image) => image.id !== state.selectedImageId)]
            state.isLoading = true
        });
    }
})

export default ImageListSlice.reducer;
export const { addImageToList, selectImage } = ImageListSlice.actions;