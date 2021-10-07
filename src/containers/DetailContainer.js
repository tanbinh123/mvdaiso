import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Detail from '../components/Detail';
import { getDetail, setModal } from '../modules/main';

const DetailContainer = ({
    detail, movieCd, setModal, getDetail
}) => {
    useEffect(() => {
        if (movieCd)
            getDetail(movieCd);
    }, [getDetail, movieCd]);
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