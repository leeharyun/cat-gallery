import { useEffect, useMemo } from 'react';
import {CatGalleryDataType} from "../type/catGalleryType";
import Loading from './Loading';

interface ImageListPops {
    getImageList: () => void;
    imagesList: Array<CatGalleryDataType>;
    loading: boolean;
};

const ImageList = ({ getImageList, imagesList, loading }: ImageListPops) => {
    
    useEffect(() => {
        getImageList();    
    }, [getImageList]);
    
    const renderImageList = useMemo(() => {
        return imagesList.map((item: any) => {
            const { image } = item;

            return (
                <div className="image-container__item" key={Math.random()}>
                    <div className="image-area">
                        <a href="javascript:;">
                            <img src={image ? image.url : ""} alt={item.name} />
                        </a>
                        <div className="cover">{item.name}</div>
                    </div>
                </div>
            );
        });
    }, [imagesList]);
    
    return (
        <section className="image-container">
            {renderImageList}
            {
                loading && 
                <Loading type="spin" />
            }
        </section>
    );
};

export default ImageList;