import { startLoading, endLoading } from '../modules/loading';

export default function createRequestThunk(type, request, div = null) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAIL = `${type}_FAIL`;
    return params => async dispatch => {
        dispatch({ type });
        dispatch(startLoading(type));
        try {
            const response = await request(params);

            setTimeout(() => {
                dispatch({
                    type: SUCCESS,
                    payload: response.data.data
                });
                dispatch(endLoading(type));
            }, 1000)

        } catch (e) {
            dispatch({
                type: FAIL,
                payload: e,
                error: true
            })
            dispatch(startLoading(type));
            throw e;
        }
    };
}