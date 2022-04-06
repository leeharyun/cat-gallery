import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGalleryList } from "../redux/modules/catGallery";
import ImageList from "../component/ImageList";
import { RootState, CatGallery } from "../type/catGalleryType";

const ImageListContainer = () => {
    const { list: imagesList, loading } = useSelector<RootState, CatGallery>((state) => state.getGalleryList);
    
    const dispatch = useDispatch();
    
    const getImageList = useCallback(() => {
        dispatch(getGalleryList());
    }, []);
    
    return <ImageList getImageList={getImageList} imagesList={imagesList} loading={loading} />
};

export default ImageListContainer;