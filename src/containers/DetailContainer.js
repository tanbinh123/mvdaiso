import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Detail from '../components/Detail';
import { setModal } from '../modules/main';

const { useEffect } = React;

const DetailContainer = ({
    movieCd, setModal
}) => {
    useEffect(() => {

    }, []);
    return (
        <Detail code={movieCd} setModal={setModal} />
    );
};

export default connect(
    //  State에 선언 방식은 state.[action.js].[state name]
    ({ main }) => ({
        movieCd: main.movieCd
    }),
    {
        setModal
    }
)(DetailContainer);