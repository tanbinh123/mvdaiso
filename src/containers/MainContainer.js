/** 
 *  Title : Main Container
 *  Date : 2021.09.28
 *  @honeypigman
 */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import IndexPage from '../pages/index';
import { getMain } from '../modules/main';

const MainContainer = ({
    list,
    getMain
}) => {

    useEffect(() => {

        if (!list)
            getMain({ date: 2021, per_page: 5 });

        let infiniteScroll = true;
        window.addEventListener("scroll", function () {
            if (infiniteScroll) {
                const limitMinScroll = 1;
                console.log('Now > ' + window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
                if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - limitMinScroll) {
                    console.log('More Scroll > ' + window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
                    console.log('Called MovieList >');

                    // if ({ loadingList })
                    // setTimeout(() => {
                    //     getMain({ date: 2021, per_page: 2 });
                    // }, 2000);
                }
            };
        });

        return () => {
            infiniteScroll = false;
        }

    }, [list]);

    return (
        <IndexPage
            list={list}
        />
    );
};

// state :  기본변수 설정
// dispatch : 함수 설정
export default connect(
    //  State에 선언 방식은 state.[action.js].[state name]
    ({ main, loading }) => ({
        list: main.list,
        loadingList: loading['main/GET_MOVIE_LIST']
    }),
    {
        getMain
    }
)(MainContainer);