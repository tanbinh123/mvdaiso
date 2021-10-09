import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_MOVIE_DETAIL = 'main/GET_MOVIE_DETAIL';
const GET_MOVIE_DETAIL_SUCCESS = 'main/GET_MOVIE_DETAIL_SUCCESS';

export const getMovieDetail = createRequestThunk(GET_MOVIE_DETAIL, api.getMovieDetail, 'movieDetail');

// Init Set
const initialState = {
    detail: "",
    loadingList: ""
}

const movie = handleActions(
    {
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

export default movie;