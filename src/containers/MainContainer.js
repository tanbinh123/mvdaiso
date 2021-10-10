import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import IndexPage from '../pages/index';
import { getMain, setModal } from '../modules/main';

const MainContainer = ({
    list,
    modal,
    getMain,
    setModal,
    loadingList
}) => {
    useEffect(() => {

        if (!list)
            // getMain({ date: 2021, per_page: 5 });

            window.addEventListener("scroll", function () {

                const limitMinScroll = 5;

                console.log('Now > ' + window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
                if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - limitMinScroll) {
                    console.log('More Scroll > ' + window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
                    console.log('Called MovieList >');

                    // if ({ loadingList })
                    //     getMain({ date: 2021, per_page: 10 });
                }
            })

    }, [getMain]);

    return (
        <IndexPage
            list={list}
            modal={modal}
            setModal={setModal}
            loading={loadingList}
        />
    );
};

// state :  기본변수 설정
// dispatch : 함수 설정
export default connect(
    //  State에 선언 방식은 state.[action.js].[state name]
    ({ main, loading }) => ({
        list: main.list,
        modal: main.modal,
        loadingList: loading['main/GET_MOVIE_LIST']
    }),
    {
        getMain,
        setModal
    }
)(MainContainer);