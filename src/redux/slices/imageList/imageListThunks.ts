import { createAsyncThunk } from "@reduxjs/toolkit";
import { Image } from "../../common/store.interface";

const APIBASE:string  = (process.env.REACT_APP_API_BASE_URL as string)

export const fetchImageList = createAsyncThunk("imageList/fetch", async (thunkApi) => {
    const response : any = await fetch(`${APIBASE}/unsplash`, {
        method: "GET",
    });
    const data = response.json();
    return data;
})

export const searchImageList = createAsyncThunk("imageList/search", async (queryString:string, thunkApi) => {
    const response : any = await fetch(`${APIBASE}/unsplash/search?queryString=${queryString}`, {
        method: "POST",
    });
    const data = response.json();
    return data;
})

export const addImage = createAsyncThunk("imageList/save", async (payload:Partial<Image>, thunkApi) => {
    const response = await fetch(`${APIBASE}/unsplash`, {
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
    const response = await fetch(`${APIBASE}/unsplash?id=${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({password})
    });

    const data = response.json();
    return data;
} )