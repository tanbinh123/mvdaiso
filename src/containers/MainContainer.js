import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Main from '../components/Main';
import { getMain, setModal } from '../modules/main';

window.onload = () => {
    window.addEventListener("scroll", function () {

        console.log('Now > ' + window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);

        const limitMinScroll = 15;

        if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - limitMinScroll) {

            console.log('More Scroll > ' + window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);



        }
    })
}


const MainContainer = ({
    list,
    modal,
    getMain,
    setModal
}) => {
    useEffect(() => {
        // {a:1, b:2} 형태로 선언
        getMain({ date: 2021, per_page: 5 });
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