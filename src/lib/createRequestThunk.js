// import { startLoading, endLoading } from '../modules/loading';

export default function createRequestThunk(type, request, div = null) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAIL = `${type}_FAIL`;
    return params => async dispatch => {
        dispatch({ type });
        // dispatch(startLoading(type));
        try {
            const response = await request(params);

            //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_const_assignment
            if (div == 'movieList') {
                response.data = response.data.movieListResult['movieList'];
            }

            dispatch({
                type: SUCCESS,
                payload: response.data
            });
            // dispatch(endLoading(type));
        } catch (e) {
            dispatch({
                type: FAIL,
                payload: e,
                error: true
            })
            // dispatch(startLoading(type));
            throw e;
        }
    };
}