/** 
 *  Title : Comments Container
 *  Date : 2021.10.12
 *  @honeypigman
 */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CommentsPage from '../pages/comments';

const CommentsContainer = ({
    match,
    history,
}) => {

    // * 필수값 처리
    const code = match.params.code;

    useEffect(() => {
        if (code) {
            console.log('Code>' + code)
        } else {
            console.log('Empty Code!')
        }

    }, [match, code])
    return (
        <CommentsPage code={code} history={history} />
    );
};

export default connect(
    //  State에 선언 방식은 state.[action.js].[state name]
    ({ comments }) => ({

    }),
    {

    }
)(CommentsContainer);