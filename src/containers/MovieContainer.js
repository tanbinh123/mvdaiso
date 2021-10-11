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

    const goBack = () => {
        history.goBack();
    }

    useEffect(() => {
        if (code) {
            getMovieDetail(code);
        } else {
            console.log('Empty Code!')
        }

    }, [match, code, getMovieDetail])
    return (
        <MoviePage code={code} detail={detail} goBack={goBack} />
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