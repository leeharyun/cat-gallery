import { Action, createActions, handleActions } from "redux-actions";
import { takeEvery, put, call } from "redux-saga/effects";
import { CatGalleryResponseType } from "../../type/catGalleryType";
import { getList } from "../../api/api";
import { CatGallery } from "../../type/catGalleryType";

// interface CatGallery {
//     loading: boolean;
//     error: Error | null;
//     list: Array<CatGalleryResponseType>
// };

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

const reducer = handleActions<CatGallery, Array<CatGalleryResponseType>>({
    PENDIG: (state) => ({
        ...state,
        loading: true,
        error: null
    }),
    SUCCESS: (state, action) => ({
        ...state,
        list: action.payload,
        loading: true,
        error: null
    }),
    FAIL: (state, action: any) => ({
        ...state,
        loading: true,
        error: action.payload
    })
}, initialState, {prefix});

export default reducer;

export const { getGalleryList } = createActions("GET_GALLERY_LIST", {prefix});

function* getGalleryListSaga() {
    try {
        yield put(pending());
        
        const list: Array<CatGalleryResponseType> = yield call(getList);

        yield put(success(list));
    } catch (error) {
        yield put(fail(new Error("ERROR")))
    }
}

export function* CatGallerySaga(){
    yield takeEvery(`${prefix}/GET_GALLERY_LIST`, getGalleryListSaga);
}