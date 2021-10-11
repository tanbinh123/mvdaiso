import React from 'react';
import Layout from '../components/layout';
import Loading from '../components/loading';

const moviePage = ({ code, detail, goBack }) => {
    return (
        <Layout code={code}>
            <main className="flex p-3 mb-10">
                <div className="flex-grow">
                    <div className="flex items-start border-b border-solid rounded-t items-middle">
                        <div className="inline-flex w-full">
                            <span className="cursor-pointer" onClick={goBack}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                            </span>
                            <h2 className="text-lg pl-2">
                                {!detail.movieNm && (<Loading />)}
                                {detail && detail?.movieNm}
                                {/* <a href="#!" className="inline-block rounded-sm text-white bg-green-600 hover:bg-green-500 duration-300 text-xs font-bold mr-1 md:mr-2 px-2 md:px-4 py-1 opacity-90 hover:opacity-100">{code}</a> */}
                            </h2>
                        </div>
                    </div>

                    <div className="h-full flex flex-col relative overflow-y-auto text-xs md:text-sm pt-2 pb-28">
                        <div className="flex flex-col w-full h-80 bg-gray-500 p-2 z-auto">
                            <div className="flex-auto">
                            </div>
                            <div className="flex w-full">
                                <div className="flex flex-col flex-auto">
                                    <div className="flex-auto"></div>
                                    <div>
                                        <span className="movie-label">{detail && detail.genres[0]?.['genreNm']}</span>
                                        <span className="text-gray-800 rounded-full bg-gray-100 text-xs p-1 mx-1">{(detail && detail.audits[0]?.['watchGradeNm']).toString().substring(0, 2)}</span>
                                        <h3 className="movie-name-kr">{detail && detail?.movieNm}</h3>
                                        <h4 className="movie-name-en">{detail && detail?.movieNmEn}</h4>
                                        <p className="metadata">
                                            <span className="meta-item pr-1">#{detail && detail.nations[0]?.['nationNm']}</span>
                                            <span className="meta-item pr-1">#{detail && detail?.typeNm}</span>
                                            <span className="meta-item pr-1">#{detail && detail?.showTm}분</span>
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

                        <div className="flex flex-wrap py-2 space-x-1 text-lg">
                            <div className="flex-1">
                                <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded inline-flex items-center w-full justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="feather feather-smile mx-1"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                                    Good
                                </button>
                            </div>
                            <div className="flex-1">
                                <button className="bg-yellow-300 hover:bg-yellow-400 text-gray-600 py-2 px-4 rounded inline-flex items-center w-full justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="feather feather-meh mx-1"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                                    Soso
                                </button>
                            </div>
                            <div className="flex-1">
                                <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 py-2 px-4 rounded inline-flex items-center w-full justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="feather feather-frown mx-1"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                                    Bad
                                </button>
                            </div>
                        </div>
                        <hr className="py-1" />
                        <section className="py-2 text-gray-600">
                            <h3 className="text-base font-semibold">작품정보</h3>
                            <p className="text-sm mt-3">
                                추억의 게임으로 동심 자극하는 제목과 달리 데스 게임을 통해 날것의 인간 군상을 보여주는 넷플릭스 시리즈. 황동혁 감독은 만화책에서 모티브를 얻었다고 밝혔으며, 시나리오 기획에만 무려 10년 이상을 들였다고 한다.
                                추억의 게임으로 동심 자극하는 제목과 달리 데스 게임을 통해 날것의 인간 군상을 보여주는 넷플릭스 시리즈. 황동혁 감독은 만화책에서 모티브를 얻었다고 밝혔으며, 시나리오 기획에만 무려 10년 이상을 들였다고 한다.
                            </p>
                        </section>

                        <section className="py-2 text-gray-600">
                            <h3 className="text-base font-semibold">감독/출연</h3>
                            <p className="text-sm mt-3">
                                <a href="#" class="inline-block rounded-full text-white 
                                    bg-red-400 hover:bg-red-500 duration-300 
                                    text-sm font-bold 
                                    mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                    opacity-90 hover:opacity-100">
                                    {detail && detail.directors[0]?.['peopleNm']}
                                </a>

                                {detail && detail.actors?.map((value, key) => (
                                    <a href="#" key={key} class="inline-block rounded-full text-white 
                                    bg-blue-400 hover:bg-blue-500 duration-300 
                                    text-sm font-bold 
                                    mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                    opacity-90 hover:opacity-100">
                                        {value['peopleNm']}
                                    </a>
                                ))}
                            </p>
                        </section>

                        <section className="py-2 text-gray-600">
                            <h3 className="text-base font-semibold">전체리뷰</h3>
                            <div className="flex text-sm mt-3 items-center">
                                <div className="bg-white border shadow-sm px-4 py-3 rounded-lg">
                                    <div className="flex items-center">
                                        <div className="flex-1 text-sm ">
                                            <span className="font-semibold">Dallin Baumbach</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-500"> 1일 전</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div className="text-gray-500 text-xs flex items-center mt-3">
                                        <img className="mr-0.5" src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" />
                                        <span className="ml-1">47 • 26 comments</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div >
                </div>
            </main>
        </Layout >
    );
};

export default moviePage;