import axios from 'axios';
import { CatGalleryDataType } from "../type/catGalleryType";

const API_CAT_GALLERY = process.env.REACT_APP_CAT_GALLERY_API_URL;

const baseApi = (apiUrl: string = "https://api.thecatapi.com") => {
    return axios.create({
        baseURL: apiUrl,
        timeout: 5000,
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache"
        }
    });
};


const getList = async (): Promise<Array<CatGalleryDataType>> => {
    const response: Array<CatGalleryDataType> = await (await baseApi(API_CAT_GALLERY).get("/v1/breeds")).data;
    
    return response;
};

export { getList };