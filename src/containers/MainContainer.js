import React from 'react';
import { connect } from 'react-redux';
import Main from '../components/Main';
import { getMain, setModal } from '../modules/main';

const { useEffect } = React;

const MainContainer = ({
    list,
    modal,
    getMain,
    setModal
}) => {
    useEffect(() => {
        getMain(2000, 2001);
    }, [getMain]);
    return (
        < Main
            list={list}
            modal={modal}
            setModal={setModal}
        />
    );
};

// state :  기본변수 설정
// dispatch : 함수 설정
export default connect(
    //  State에 선언 방식은 state.[action.js].[state name]
    ({ main }) => ({
        list: main.list,
        modal: main.modal
    }),
    {
        getMain,
        setModal
    }
)(MainContainer);