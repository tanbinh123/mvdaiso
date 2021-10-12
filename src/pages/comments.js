import React from 'react';
import Layout from '../components/layout';
import Loading from '../components/loading';

const commentsPage = ({ code, goBack }) => {
    return (
        <Layout code={code}>
            <main className="flex flex-col">
                <div className="layout-margin w-full fixed bg-white z-1 items-middle">
                    <div className="inline-flex w-full p-2">
                        <span className="cursor-pointer" onClick={goBack}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </span>
                        <h2 className="text-lg pl-2">
                            전체댓글
                        </h2>
                    </div>
                </div>

                {!code && (
                    <div className="animate-pulse flex flex-col p-3 overflow-y-auto mt-7">
                        <section className="text-gray-600 mb-10">
                            <div className="flex text-sm mt-3 items-center">
                                <div className="w-full bg-white border shadow-sm px-4 py-3 rounded-lg">
                                    <div className="flex items-center">
                                        <div className="w-1/5 h-5 bg-gray-200 rounded-md"></div>
                                    </div>
                                    <p class="bg-gray-200 w-full h-16 rounded-lg mt-1"></p>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                <div className="flex flex-col p-3 overflow-y-auto text-xs md:text-sm mt-7">
                    <section className="text-gray-600 mb-10">

                        <div className="flex text-sm mt-3 items-center">
                            <div className="w-full bg-white border shadow-sm px-4 py-3 rounded-lg">
                                <div className="flex items-center">
                                    <div className="flex-1 text-sm ">
                                        <span className="font-semibold">graycha</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500"> 1일 전</span>
                                    </div>
                                </div>
                                <p className="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">재미지구만</p>
                                <div className="text-gray-500 text-xs flex items-center mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                    <span className="ml-1">10 • 15 댓글</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex text-sm mt-3 items-center">
                            <div className="w-full bg-white border shadow-sm px-4 py-3 rounded-lg">
                                <div className="flex items-center">
                                    <div className="flex-1 text-sm ">
                                        <span className="font-semibold">graycha</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500"> 1일 전</span>
                                    </div>
                                </div>
                                <p className="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">재미지구만</p>
                                <div className="text-gray-500 text-xs flex items-center mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                    <span className="ml-1">10 • 15 댓글</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex text-sm mt-3 items-center">
                            <div className="w-full bg-white border shadow-sm px-4 py-3 rounded-lg">
                                <div className="flex items-center">
                                    <div className="flex-1 text-sm ">
                                        <span className="font-semibold">graycha</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500"> 1일 전</span>
                                    </div>
                                </div>
                                <p className="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">재미지구만</p>
                                <div className="text-gray-500 text-xs flex items-center mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                    <span className="ml-1">10 • 15 댓글</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex text-sm mt-3 items-center">
                            <div className="w-full bg-white border shadow-sm px-4 py-3 rounded-lg">
                                <div className="flex items-center">
                                    <div className="flex-1 text-sm ">
                                        <span className="font-semibold">graycha</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500"> 1일 전</span>
                                    </div>
                                </div>
                                <p className="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">재미지구만</p>
                                <div className="text-gray-500 text-xs flex items-center mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                    <span className="ml-1">10 • 15 댓글</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex text-sm mt-3 items-center">
                            <div className="w-full bg-white border shadow-sm px-4 py-3 rounded-lg">
                                <div className="flex items-center">
                                    <div className="flex-1 text-sm ">
                                        <span className="font-semibold">graycha</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500"> 1일 전</span>
                                    </div>
                                </div>
                                <p className="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">재미지구만</p>
                                <div className="text-gray-500 text-xs flex items-center mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                    <span className="ml-1">10 • 15 댓글</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex text-sm mt-3 items-center">
                            <div className="w-full bg-white border shadow-sm px-4 py-3 rounded-lg">
                                <div className="flex items-center">
                                    <div className="flex-1 text-sm ">
                                        <span className="font-semibold">graycha</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500"> 1일 전</span>
                                    </div>
                                </div>
                                <p className="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">재미지구만</p>
                                <div className="text-gray-500 text-xs flex items-center mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                    <span className="ml-1">10 • 15 댓글</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex text-sm mt-3 items-center">
                            <div className="w-full bg-white border shadow-sm px-4 py-3 rounded-lg">
                                <div className="flex items-center">
                                    <div className="flex-1 text-sm ">
                                        <span className="font-semibold">graycha</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500"> 1일 전</span>
                                    </div>
                                </div>
                                <p className="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">재미지구만</p>
                                <div className="text-gray-500 text-xs flex items-center mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                    <span className="ml-1">10 • 15 댓글</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex text-sm mt-3 items-center">
                            <div className="w-full bg-white border shadow-sm px-4 py-3 rounded-lg">
                                <div className="flex items-center">
                                    <div className="flex-1 text-sm ">
                                        <span className="font-semibold">graycha</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500"> 1일 전</span>
                                    </div>
                                </div>
                                <p className="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">재미지구만</p>
                                <div className="text-gray-500 text-xs flex items-center mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                    <span className="ml-1">10 • 15 댓글</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex text-sm mt-3 items-center">
                            <div className="w-full bg-white border shadow-sm px-4 py-3 rounded-lg">
                                <div className="flex items-center">
                                    <div className="flex-1 text-sm ">
                                        <span className="font-semibold">graycha</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500"> 1일 전</span>
                                    </div>
                                </div>
                                <p className="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">재미지구만</p>
                                <div className="text-gray-500 text-xs flex items-center mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                    <span className="ml-1">10 • 15 댓글</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex text-sm mt-3 items-center">
                            <div className="w-full bg-white border shadow-sm px-4 py-3 rounded-lg">
                                <div className="flex items-center">
                                    <div className="flex-1 text-sm ">
                                        <span className="font-semibold">graycha</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500"> 1일 전</span>
                                    </div>
                                </div>
                                <p className="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">재미지구만</p>
                                <div className="text-gray-500 text-xs flex items-center mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                    <span className="ml-1">10 • 15 댓글</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex text-sm mt-3 items-center">
                            <div className="w-full bg-white border shadow-sm px-4 py-3 rounded-lg">
                                <div className="flex items-center">
                                    <div className="flex-1 text-sm ">
                                        <span className="font-semibold">graycha</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500"> 1일 전</span>
                                    </div>
                                </div>
                                <p className="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">재미지구만</p>
                                <div className="text-gray-500 text-xs flex items-center mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                    <span className="ml-1">10 • 15 댓글</span>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </main>
        </Layout >
    );
};

export default commentsPage;