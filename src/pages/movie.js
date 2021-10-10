import React from 'react';
import Layout from '../components/layout';
import Loading from '../components/loading';

const moviePage = ({ code, detail }) => {
    return (
        <Layout code={code}>
            <main className="flex">
                <div className="flex-grow w-full p-2 max-w-2xl mx-auto pb-16">
                    <div className="flex items-start justify-between p-2 border-b border-solid rounded-t items-middle">
                        <h2 className="text-sm md:text-md font-medium">
                            {!detail.movieNm && (<Loading />)}
                            {detail && detail?.movieNm}
                            {/* <a href="#!" className="inline-block rounded-sm text-white bg-green-600 hover:bg-green-500 duration-300 text-xs font-bold mr-1 md:mr-2 px-2 md:px-4 py-1 opacity-90 hover:opacity-100">{code}</a> */}
                        </h2>
                    </div>

                    <div className="h-full flex flex-col relative overflow-y-auto text-xs md:text-sm py-2">
                        <div className="flex flex-col w-full h-80 bg-gray-500 p-2 z-auto">
                            <div className="flex-auto">

                            </div>
                            <div className="flex w-full">
                                <div className="flex flex-col flex-auto">
                                    <div className="flex-auto"></div>
                                    <div>
                                        <span className="movie-label">{detail && detail.genres[0]?.['genreNm']}</span>
                                        <h3 className="movie-name-kr">{detail && detail?.movieNm}</h3>
                                        <h4 className="movie-name-en">{detail && detail?.movieNmEn}</h4>
                                        <p className="metadata">
                                            <span className="meta-item">{detail && detail.nations[0]?.['nationNm']}</span>
                                            <span className="meta-item">{detail && detail?.typeNm}</span>
                                            <span className="meta-item">{detail && detail?.openDt}</span>
                                            <span className="meta-item">{detail && detail?.showTm}분</span>
                                            <span className="meta-item">{detail && detail?.audits[0]?.['watchGradeNm']}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="poster">
                                    <img
                                        className="w-full h-full"
                                        // src={movie.imageSrc}
                                        src='/img/poster.jpeg'
                                        alt={detail && detail?.movieNm}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap py-2 space-x-4 text-lg">
                            <div className="flex-1">
                                <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded inline-flex items-center w-full justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="feather feather-smile mx-1"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                                    Good
                                </button>
                            </div>
                            <div className="flex-1">
                                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded inline-flex items-center w-full justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="feather feather-frown mx-1"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                                    Bad
                                </button>
                            </div>
                        </div>

                    </div >
                </div>
            </main>
        </Layout >
    );
};

export default moviePage;