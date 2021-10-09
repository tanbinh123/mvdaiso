import { createAction, handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const SET_MODAL = 'main/SET_MODAL';

const GET_MOVIE_LIST = 'main/GET_MOVIE_LIST';
const GET_MOVIE_LIST_SUCCESS = 'main/GET_MOVIE_LIST_SUCCESS';

const GET_MOVIE_DETAIL = 'main/GET_MOVIE_DETAIL';
const GET_MOVIE_DETAIL_SUCCESS = 'main/GET_MOVIE_DETAIL_SUCCESS';

export const setModal = createAction(SET_MODAL);
export const getMain = createRequestThunk(GET_MOVIE_LIST, api.getMovie, 'movieList');
export const getDetail = createRequestThunk(GET_MOVIE_DETAIL, api.getMovieDetail, 'movieDetail');

// // Init Set
const initialState = {
    modal: false,
    list: "",
    detail: "",
    movieCd: "",
    loadingList: ""
}

const main = handleActions(
    {
        [SET_MODAL]: (state, { payload: modal }) => ({
            ...state,
            modal: modal.status,
            movieCd: modal.code
        }),
        [GET_MOVIE_LIST_SUCCESS]: (state, action) => ({
            ...state,
            list: [...state.list, ...action.payload]
            // Failer
            // list: [...state.list, ...action.payload]
            // [list]: list.concat(action.payload)
            // list: state.list.concat([...action.payload])
        }),
        [GET_MOVIE_DETAIL]: (state) => ({
            ...state,
            detail: ""
        }),
        [GET_MOVIE_DETAIL_SUCCESS]: (state, action) => ({
            ...state,
            detail: action.payload
        })
    },
    initialState,
)

// 기본 액션
// function main(state = initialState, action = null) {
//     switch (action.type) {
//         case SET_MODAL:
//             return {
//                 ...state,
//                 modal: action.status,
//                 choose: (state.movies.filter(movie => movie.id === action.id))
//                 // (state.movies.filter(movie => movie.id === action.id))
//             }
//         // 기본값으로는 state 그대로를 전달해줘야 한다.
//         default:
//             return state;
//     }
// }

export default main;