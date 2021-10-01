import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';
import { setModal } from '../modules/main';

const MainContainer = ({
    modal,
    date,
    movies,
    setModal
}) => {
    return (
        < Main
            modal={modal}
            date={date}
            movies={movies}
            setModal={setModal}
        />
    );
};

// state :  기본변수 설정
// dispatch : 함수 설정
export default connect(
    //  State에 선언 방식은 state.[action.js].[state name]
    state => ({
        modal: state.main.modal,
        movies: state.main.movies
    }),
    dispatch =>
        bindActionCreators({
            setModal
        }, dispatch)
)(MainContainer);