import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <>
            <footer className="lg:hidden w-full fixed bottom-0 right-0 left-0 p-2 bg-gray-50 border-1 border-gray-300 items-center justify-center">
                <div className="layout-margin flex flex-wrap">
                    <div className="flex-1">
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="m-auto feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        </Link>
                    </div>
                    <div className="flex-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="m-auto feather feather-film"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg></div>
                    <div className="flex-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="m-auto feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></div>
                    <div className="flex-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="m-auto feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></div>
                    <div className="flex-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        {/* <div class="rounded-full h-9 w-9 flex items-center justify-center bg-gray-200">
                        </div> */}
                    </div>
                </div>
            </footer>

            <footer className="hidden lg:block w-full p-5 flex justify-center text-gray-400">
                <div className="lg:flex w-full py-5">
                    <div className="flex flex-grow flex-col flex-start px-3 mb-8 lg:mb-0 space-y-2">
                        <span className="text-lg font-bold text-green-600">MovieDaiso</span>
                        <div className="text-xs">
                            <div>본 서비스는 영화진흥위원회 연동서비스를 이용한 데이터 기반의 정보를 제공하고 있습니다.</div>
                            <div>Copyright(c) 무비다이소 All rights reserved.</div>
                        </div>
                    </div>
                    <div className="flex-grow text-sm px-3 ">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                            <div className="w-full md:w-48">
                                <div className="flex flex-col space-y-2">
                                    <div className="menu-label-root font-bold mb-1 text-green-600">소개</div>
                                    <Link to="/about" className="hover:underline menu-item-root">무비다이소 소개</Link>
                                </div>
                            </div>

                            <div className="w-full md:w-48">
                                <div className="flex flex-col space-y-2">
                                    <div className="menu-label-root font-bold mb-1 text-green-600">서비스</div>
                                    <Link to="/today" className="hover:underline menu-item-root" >추천영화</Link>
                                    <Link to="/boxoffice" className="hover:underline menu-item-root" >흥행영화</Link>
                                    <Link to="/" className="hover:underline menu-item-root" >내주변 상영관</Link>
                                </div>
                            </div>

                            <div className="w-full md:w-48">
                                <div className="flex flex-col space-y-2">
                                    <div className="menu-label-root font-bold mb-1 text-green-600">문의하기</div>
                                    <Link to="/" className="hover:underline menu-item-root" >이메일</Link>
                                    <Link to="/" className="hover:underline menu-item-root" >카카오</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;