import { createAction, handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const SET_MODAL = 'main/SET_MODAL';

const GET_MOVIE_ALL = 'main/GET_MOVIE_ALL';
const GET_MOVIE_ALL_SUCCESS = 'main/GET_MOVIE_ALL_SUCCESS';

const GET_MOVIE_DETAIL = 'main/GET_MOVIE_DETAIL';
const GET_MOVIE_DETAIL_SUCCESS = 'main/GET_MOVIE_DETAIL_SUCCESS';


export const setModal = createAction(SET_MODAL, id => id, status => status);
export const getMain = createRequestThunk(GET_MOVIE_ALL, api.getMovie, 'movieList');
export const getDetail = createRequestThunk(GET_MOVIE_DETAIL, api.getMovieDetail, 'movieDetail');

// // Init Set
const initialState = {
    modal: false,
    list: null,
    detail: null
}

const main = handleActions(
    {
        [GET_MOVIE_ALL_SUCCESS]: (state, action) => ({
            ...state,
            list: action.payload
        }),
        [SET_MODAL]: (state, { payload: movieCd, payload: modal }) => ({
            ...state,
            modal: modal,
            movieCd: movieCd
            // detail: (state.list.filter(list => list.movieCd === movieCd))

        }),
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