/** 
 *  Title : View - Profile
 *  Date : 2021.10.14
 *  Des : 프로필 페이지
 *  @honeypigman
 */
import React from 'react';
import Layout from '../components/layout';
import { Link } from 'react-router-dom';
// import Loading from '../components/loading';

const profilePage = () => {
    return (
        <Layout>
            < div className="flex">
                <div className="w-full bg-white flex flex-col space-y-3 shadow-lg rounded-lg ">
                    <div className="p-2">
                        <h3 className="text-center text-xl text-gray-900 font-medium leading-8">John</h3>
                        <div className="text-center text-gray-400 text-xs font-semibold">
                            <p>@exmaple.com</p>
                        </div>

                        <div>
                            <nav className="flex flex-row sm:flex-row">
                                <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">
                                    기본정보
                                </button>
                                <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                                    활동정보
                                </button>
                                <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                                    설정
                                </button>
                            </nav>
                        </div>

                    </div>
                </div >
            </ div>
        </Layout >
    );
};

export default profilePage;