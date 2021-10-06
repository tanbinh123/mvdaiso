import React from 'react';
import { connect } from 'react-redux';
import Detail from '../components/Detail';
import { getDetail, setModal } from '../modules/main';

const { useEffect } = React;

const DetailContainer = ({
    detail, movieCd, setModal, getDetail
}) => {
    useEffect(() => {
        getDetail(movieCd);
        return () => {

        }
    }, [getDetail]);
    return (
        <Detail detail={detail} code={movieCd} setModal={setModal} />
    );
};

export default connect(
    //  State에 선언 방식은 state.[action.js].[state name]
    ({ main }) => ({
        movieCd: main.movieCd,
        detail: main.detail
    }),
    {
        setModal,
        getDetail
    }
)(DetailContainer);