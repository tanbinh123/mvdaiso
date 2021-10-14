/** 
 *  Title : Modules - search Action
 *  Date : 2021.10.12
 *  Des : 검색처리 액션
 *  @honeypigman
 */

import { createAction, handleActions } from 'redux-actions';

const SET_SEARCH = 'main/SET_SEARCH';

export const setSearch = createAction(SET_SEARCH);

// // Init Set
const initialState = {
    search: false
}

const search = handleActions(
    {
        [SET_SEARCH]: (state, action) => ({
            ...state,
            search: action.payload,
        }),
    },
    initialState,
)

export default search;