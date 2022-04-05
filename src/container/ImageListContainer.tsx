import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGalleryList } from "../redux/modules/catGallery";
import ImageList from "../component/ImageList";
import { RootState, CatGalleryResponseType } from "../type/catGalleryType";

const ImageListContainer = () => {
    const imagesList = useSelector<RootState, Array<CatGalleryResponseType>>((state) => state.getGalleryList.list);
    
    const dispatch = useDispatch();
    
    const getImageList = useCallback(() => {
        dispatch(getGalleryList());
    }, []);
    
    return <ImageList getImageList={getImageList} imagesList={imagesList}/>
};

export default ImageListContainer;