/** 
 *  Title : View - login
 *  Date : 2021.10.13
 *  Des : 로그인 페이지
 *  @honeypigman
 */
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
// import Loading from '../components/loading';

const loginPage = () => {
    return (
        <div className="layout-margin">
            <header className="text-center p-2 text-3xl md:p-3 md:text-4xl">
                <Header />
            </header>
            <main className="flex w-full flex items-center justify-center p-3">
                <div className="w-full bg-gray-50 p-5 flex flex-col space-y-3 shadow-lg rounded-lg ">
                    <input type="text" className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4" placeholder="Email" />
                    <input type="password" className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4" placeholder="Password" />
                    <button className="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4">로그인</button>
                    <div className="text-gray-400 text-xs mb-4 text-center">
                        <Link to="/auth/join" className="flex-1">회원가입</Link>
                        <Link to="/auth/profile" className="flex-1 px-5">My Profile</Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default loginPage;