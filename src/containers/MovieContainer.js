/** 
 *  Title : Movie Container
 *  Date : 2021.10.01
 *  @honeypigman
 */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MoviePage from '../pages/movie';
import { getMovieDetail } from '../modules/movie';

const MovieContainer = ({
    match,
    history,
    detail,
    getMovieDetail
}) => {

    // * 필수값 처리
    const code = match.params.code;

    useEffect(() => {

        if (code) {
            if (!detail)
                getMovieDetail(code);
        } else {
            console.log('Empty Code!')
        }

    }, [match, code, detail, getMovieDetail])
    return (
        <MoviePage code={code} detail={detail} history={history} />
    );
};

export default connect(
    //  State에 선언 방식은 state.[action.js].[state name]
    ({ movie }) => ({
        detail: movie.detail
    }),
    {
        getMovieDetail
    }
)(MovieContainer);