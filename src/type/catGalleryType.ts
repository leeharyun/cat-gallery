interface CatGallery {
    loading: boolean;
    error: Error | null;
    list: Array<CatGalleryDataType>
};

type CatGalleryDataType = {};

interface RootState {
    getGalleryList: CatGallery;
}

export type { CatGallery, CatGalleryDataType, RootState };