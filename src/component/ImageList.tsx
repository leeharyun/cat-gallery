import { useEffect, useMemo } from 'react';
import {CatGalleryResponseType} from "../type/catGalleryType";

interface ImageListPops {
    getImageList: () => void;
    imagesList: Array<CatGalleryResponseType>;
};

const ImageList = ({ getImageList, imagesList }: ImageListPops) => {
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
        </section>
    );
};

export default ImageList;