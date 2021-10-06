import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Test from '../components/Test';
import { getUsers } from '../modules/test'

const { useEffect } = React;

const TestContainer = ({
    users,
    getUsers,
    loadingUsers
}) => {
    useEffect(() => {
        getUsers(1);
    }, [getUsers]);
    return (
        <div>
            <Test
                users={users}
                loadingUsers={loadingUsers}
            />
        </div>
    );
};

export default connect(
    //  State에 선언 방식은 state.[action.js].[state name]
    state => ({
        users: state.test.users,
        loadingUsers: state.loading['test/GET_USERS']
    }),
    dispatch =>
        bindActionCreators({
            getUsers
        }, dispatch),
)(TestContainer);