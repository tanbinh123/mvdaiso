import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CommentsPage from '../pages/comments';

const CommentsContainer = ({
    match,
    history,
}) => {

    // * 필수값 처리
    const code = match.params.code;

    const goBack = () => {
        history.goBack();
    }

    useEffect(() => {
        if (code) {
            console.log('Code>' + code)
        } else {
            console.log('Empty Code!')
        }

    }, [match, code])
    return (
        <CommentsPage code={code} goBack={goBack} />
    );
};

export default connect(
    //  State에 선언 방식은 state.[action.js].[state name]
    ({ comments }) => ({

    }),
    {

    }
)(CommentsContainer);