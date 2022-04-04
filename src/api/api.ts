import axios from 'axios';

const API_CAT_GALLERY = process.env.REACT_APP_CAT_GALLERY_API_URL;

const baseApi = (apiUrl: string = "https://api.thecatapi.com") => {
    return axios.create({
        baseURL: apiUrl,
        timeout: 5000,
        headers: {
            'Content-Type': 'application/json',
            'UserAgent':  "",
            'UserType': '',
            'AppVersion': '1.0.0'
        }
    })
}


const getGalleryList = baseApi(API_CAT_GALLERY).get("/v1/breeds");

export default {
    getGalleryList
}