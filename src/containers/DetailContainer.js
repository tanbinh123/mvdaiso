import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Detail from '../components/Detail';
import { setModal } from '../modules/main';

const DetailContainer = ({
    pick, setModal
}) => {
    return (
        <Detail movies={pick} setModal={setModal} />
    );
};

export default connect(
    //  State에 선언 방식은 state.[action.js].[state name]
    state => ({
        pick: state.main.pick
    }),
    dispatch =>
        bindActionCreators({
            setModal
        }, dispatch),
)(DetailContainer);