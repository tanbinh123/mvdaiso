import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Header = () => {

    const [gnbStatus, setGnbStatus] = useState(false);
    const onClickGnb = (e) => {
        setGnbStatus(prevStatus => prevStatus ? false : true);
        window.scrollTo(0, 0);
    };
    const GnbMenu = () => (
        <div id="gnbMenu" className="pt-4 pb-8">
            <div className="flex flex-col w-full mx-auto px-4">
                <div className="flex flex-col space-y-2 text-gray-500">
                    <Link to="/about" className="hover:underline menu-item-root" onClick={() => setGnbStatus(false)}>서비스 소개</Link>
                    <Link to="/today" className="hover:underline menu-item-root" onClick={() => setGnbStatus(false)}>추천영화</Link>
                    <Link to="/boxoffice" className="hover:underline menu-item-root" onClick={() => setGnbStatus(false)}>흥행영화</Link>
                    <Link to="/test" className="hover:underline menu-item-root" onClick={() => setGnbStatus(false)}>API TEST</Link>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <header className="w-full min-w-10 h-20 text-center p-4">
                <div className="inline-block relative">
                    <h2 className="text-3xl font-extrabold tracking-tight text-green-600"><Link to="/">Movie Daiso</Link></h2>
                </div>
                <div className="inline-block absolute py-1 right-2 cursor-pointer" onClick={onClickGnb}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </div>
            </header>


            {/* Gnb Start */}
            { gnbStatus ? <GnbMenu /> : null}
            {/* Gnb End */}

        </div>
    );
};

export default Header;