import { createAction, handleActions } from 'redux-actions';

const SET_SEARCH = 'main/SET_SEARCH';

export const setSearch = createAction(SET_SEARCH);

// // Init Set
const initialState = {
    status: false
}

const search = handleActions(
    {
        [SET_SEARCH]: (state, action) => ({
            ...state,
            status: false,
        }),
    },
    initialState,
)

export default search;