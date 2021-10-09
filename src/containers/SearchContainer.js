import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';

const SearchContainer = ({
    status
}) => {
    return (
        <Search />
    );
};

// state :  기본변수 설정
// dispatch : 함수 설정
export default connect(
    //  State에 선언 방식은 state.[action.js].[state name]
    ({ search }) => ({
        search: false
    }),
    {

    }
)(SearchContainer);