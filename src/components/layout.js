/** 
 *  Title : Layout Segments Components
 *  Date : 2021.10.10
 *  @honeypigman
 */
import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const layout = (props) => {
    return (
        <div className="layout-margin">
            <Header code={props.code} />
            <main>{props.children}</main>
            <Footer />
        </div>
    );
};

export default layout;