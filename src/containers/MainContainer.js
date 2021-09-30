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
        date: [
            { year: 2021 }, { year: 2020 }, { year: 2019 }, { year: 2018 }, { year: 2017 },
            { year: 2016 }, { year: 2015 }, { year: 2014 }, { year: 2013 }, { year: 2012 },
            { year: 2011 }, { year: 2010 }, { year: 2009 }, { year: 2008 }, { year: 2007 },
            { year: 2006 }, { year: 2005 }, { year: 2004 }, { year: 2003 }, { year: 2002 },
            { year: 2001 }, { year: 2000 },
        ],
        movies: state.main.movies
    }),
    dispatch =>
        bindActionCreators({
            setModal
        }, dispatch)
)(MainContainer);