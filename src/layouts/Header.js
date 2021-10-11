import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Header = ({ code }) => {

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
                </div>
            </div>
        </div>
    );

    return (
        <>
            { !code && (
                <header className="flex flex-row w-full p-2 text-lg md:p-3 md:text-3xl">
                    <div className="flex-1"></div>
                    <div className="flex-1">
                        <h2 className="font-extrabold tracking-tight text-green-600"><Link to="/">Movie Daiso</Link></h2>
                    </div>
                    <div className="flex-1 m-auto justify-between cursor-pointer" onClick={onClickGnb}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="float-right feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </div>
                </header>
            )}
            { gnbStatus ? <GnbMenu /> : null}
        </>
    );
};

export default Header;