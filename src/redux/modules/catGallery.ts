import { Action, createActions, handleActions } from "redux-actions";
import { takeEvery, put, call } from "redux-saga/effects";
import { CatGalleryDataType } from "../../type/catGalleryType";
import { getList } from "../../api/api";
import { CatGallery } from "../../type/catGalleryType";

const initialState: CatGallery = {
    loading: false,
    error: null,
    list: []
};

const prefix = "/main";

export const { pending, success, fail } = createActions(
    "PENDING", 
    "SUCCESS",
    "FAIL",
    { prefix }
);

const reducer = handleActions<CatGallery, Array<CatGalleryDataType>>({
    PENDING: (state) => ({
        ...state,
        loading: true,
        error: null
    }),
    SUCCESS: (state, action) => ({
        ...state,
        list: action.payload,
        loading: false,
        error: null
    }),
    FAIL: (state, action: any) => ({
        ...state,
        loading: false,
        error: action.payload
    })
}, initialState, {prefix});

export default reducer;

export const { getGalleryList } = createActions("GET_GALLERY_LIST", {prefix});

function* getGalleryListSaga() {
    try {
        yield put(pending());
        
        const list: Array<CatGalleryDataType> = yield call(getList);

        yield put(success(list));
    } catch (error) {
        yield put(fail(new Error("ERROR")))
    }
}

export function* CatGallerySaga(){
    yield takeEvery(`${prefix}/GET_GALLERY_LIST`, getGalleryListSaga);
}