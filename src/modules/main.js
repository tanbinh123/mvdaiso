/** 
 *  Title : Modules - main Action
 *  Date : 2021.10.01
 *  Des : 메인 액션
 *  @honeypigman
 */
import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_MOVIE_LIST = 'main/GET_MOVIE_LIST';
const GET_MOVIE_LIST_SUCCESS = 'main/GET_MOVIE_LIST_SUCCESS';

export const getMain = createRequestThunk(GET_MOVIE_LIST, api.getMovie, 'movieList');

// // Init Set
const initialState = {
    list: "",
    loadingList: ""
}

const main = handleActions(
    {
        [GET_MOVIE_LIST_SUCCESS]: (state, action) => ({
            ...state,
            list: [...state.list, ...action.payload]
        })
    },
    initialState,
)

export default main;