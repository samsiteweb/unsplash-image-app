export interface Image {
    id: string,
    image_url: string,
    label: string,
    created_at: string,
    updated_at: string
}
export interface ImageListState{
    images: Image[],
    msg: string,
    selectedImageId: string | null,
    isLoading: boolean,
    isError: boolean,
    errorMsg: string,
}