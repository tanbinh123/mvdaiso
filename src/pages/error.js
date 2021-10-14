/** 
 *  Title : View - Error
 *  Date : 2021.10.14
 *  Des : 프로필 페이지
 *  @honeypigman
 */
import React from 'react';
import Layout from '../components/layout';
import { Link } from 'react-router-dom';
// import Loading from '../components/loading';

const errorPage = () => {
    return (
        <Layout>
            < div className="flex">
                <div className="w-full h-full flex m-auto items-center justify-center bg-gray-100 md:p-24">
                    <div className="bg-white overflow-hidden p-8">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold text-red-600 inline-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                ERROR
                            </h1>
                            <h1 className="text-gray-400 text-5xl font-medium py-8">잘못된 페이지로 접근하셨습니다!</h1>
                        </ div>
                    </div>
                </div>
            </div>
        </Layout >
    );
};

export default errorPage;