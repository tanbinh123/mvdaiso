// import { startLoading, endLoading } from '../modules/loading';

export default function createRequestThunk(type, request, div = null) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAIL = `${type}_FAIL`;
    return params => async dispatch => {
        dispatch({ type });
        // dispatch(startLoading(type));
        try {
            const response = await request(params);

            // 영화내역
            if (div == 'movieList') {
                response.data = response.data.movieListResult['movieList'];
            }
            // 영화 상세정보
            else if (div == 'movieDetail') {
                response.data = response.data.movieInfoResult['movieInfo'];
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