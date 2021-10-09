import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const layout = (props) => {
    return (
        <>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </>
    );
};

export default layout;