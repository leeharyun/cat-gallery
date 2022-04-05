import axios from 'axios';
import { CatGalleryResponseType } from "../type/catGalleryType";

const API_CAT_GALLERY = process.env.REACT_APP_CAT_GALLERY_API_URL;

const baseApi = (apiUrl: string = "https://api.thecatapi.com") => {
    return axios.create({
        baseURL: apiUrl,
        timeout: 5000,
        headers: {
            'Content-Type': 'application/json',
            'UserAgent':  "",
            'UserType': ''
        }
    });
};


const getList = async (): Promise<Array<CatGalleryResponseType>> => {
    const response: Array<CatGalleryResponseType> = await (await baseApi(API_CAT_GALLERY).get("/v1/breeds")).data;
    
    return response;
};

export { getList };