import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MovieDetail from '../components/MovieDetail';
import { setModal } from '../modules/main';

const MovieDetailContainer = ({
    date, movies, setModal
}) => {
    return (
        <MovieDetail movies={movies} setModal={setModal} />
    );
};

export default connect(
    //  State에 선언 방식은 state.[action.js].[state name]
    state => ({
        movies: state.main.movies
    }),
    dispatch =>
        bindActionCreators({
            setModal
        }, dispatch),
)(MovieDetailContainer);