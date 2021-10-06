// import { handleActions } from 'redux-actions';
// import * as api from '../lib/api';
// import createRequestThunk from '../lib/createRequestThunk';

// const GET_POST = 'test/GET_POST';
// const GET_POST_SUCCESS = 'test/GET_POST_SUCCESS';
// const GET_POST_FAIL = 'test/GET_POST_FAIL';

// const GET_USERS = 'test/GET_USERS';
// const GET_USERS_SUCCESS = 'test/GET_USERS_SUCCESS';
// const GET_USERS_FAIL = 'test/GET_USERS_FAIL';

// export const getUsers = createRequestThunk('GET_USERS', api.getUsers);

// // export const getPost = id => async dispatch => {
// //     dispatch({ TYPE: GET_POST });
// //     try {
// //         const reponse = await api.getPost(id);
// //         dispatch({
// //             type: GET_POST_SUCCESS,
// //             payload: reponse.data
// //         });
// //     } catch (e) {
// //         dispatch({
// //             type: GET_POST_FAIL,
// //             payload: e,
// //             error: true
// //         });
// //         throw e;
// //     }
// // }

// // export const getUsers = () => async dispatch => {
// //     dispatch({ type: GET_USERS });
// //     try {
// //         const response = await api.getUsers();
// //         dispatch({
// //             type: GET_USERS_SUCCESS,
// //             payload: response.data
// //         })

// //     } catch (e) {
// //         dispatch({
// //             type: GET_USERS_FAIL,
// //             payload: e,
// //             error: true
// //         })
// //         throw e;
// //     }
// // }


// const initialState = {

//     post: null,
//     users: null
// }

// const test = handleActions(
//     {
//         [GET_USERS_SUCCESS]: (state, action) => ({
//             ...state,
//             users: action.payload
//         })
//     },
//     initialState
// )

// export default test;0