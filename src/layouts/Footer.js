import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer className="w-full p-5 flex justify-center text-gray-400">
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
    );
};

export default Footer;