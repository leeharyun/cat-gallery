import { all } from "redux-saga/effects";
import { CatGallerySaga } from "./catGallery";

function* rootSaga(){
    yield all([CatGallerySaga()]);
};

export default rootSaga;