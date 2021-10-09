import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MoviePage from '../pages/movie';
import { getMovieDetail } from '../modules/movie';

const MovieContainer = ({
    match,
    code,
    detail,
    getMovieDetail
}) => {
    useEffect(() => {
        const code = match.params.code;
        if (code) {
            getMovieDetail(code);
        } else {
            console.log('Empty Code!')
        }

    }, [match, code, getMovieDetail])
    return (
        <MoviePage detail={detail} />
    );
};

export default connect(
    //  State에 선언 방식은 state.[action.js].[state name]
    ({ movie }) => ({
        code: movie.code,
        detail: movie.detail
    }),
    {
        getMovieDetail
    }
)(MovieContainer);