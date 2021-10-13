/** 
 *  Title : Search Components
 *  Date : 2021.10.08
 *  @honeypigman
 */
import React from 'react';

const search = ({ show, setSearchForm }) => {
    return (
        <>
            { show && (
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-gray-500 bg-opacity-50" >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl w-11/12 h-5/6">
                        <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                            <div className="flex items-center bg-gray-200 rounded-md">
                                <div className="pl-2">
                                    <svg className="fill-current text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path className="heroicon-ui"
                                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                    </svg>
                                </div>
                                <input className="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2" id="search" type="text" placeholder="Search teams or members"></input>
                            </div>
                            <div className="py-3 text-sm">
                                <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                                    <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                                    <div className="flex-grow font-medium px-2">Tighten Co.</div>
                                    <div className="text-sm font-normal text-gray-500 tracking-wide">Team</div>
                                </div>
                            </div>
                            <div className="block bg-gray-100 text-xs text-right py-1 px-2 -mx-3 -mb-2 rounded-b-lg">
                                <button className="hover:text-gray-600 text-gray-500 font-bold py-2 px-4" onClick={() => setSearchForm(false)}>
                                    닫기
                            </button>
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                    검색
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default search;