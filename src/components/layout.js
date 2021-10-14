/** 
 *  Title : Layout Segments Components
 *  Date : 2021.10.10
 *  @honeypigman
 */
import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import QuickBar from '../components/quickbar';

const layout = (props) => {
    return (
        <div className="layout-margin">

            { !props.code && (
                <header className="flex flex-row w-full p-2 text-lg md:p-3 md:text-2xl">
                    <div className="flex-1 block lg:hidden"></div>
                    <div className="flex-auto">
                        <Header />
                    </div>
                    <div className="hidden lg:block flex-1 m-auto justify-between cursor-pointer">
                        <QuickBar />
                    </div>
                </header>
            )}

            <main>{props.children}</main>

            <footer>
                <div className="lg:hidden w-full fixed bottom-0 right-0 left-0 p-2 bg-gray-50 border-1 border-gray-300 items-center justify-center">
                    <QuickBar />
                </div>

                <div className="hidden lg:block w-full p-5 flex justify-center text-gray-400">
                    <Footer />
                </div>
            </footer>
        </div>
    );
};

export default layout;