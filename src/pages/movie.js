import React from 'react';
import Layout from '../components/layout'

const moviePage = ({ code, detail }) => {
    return (
        <Layout>
            <div className="flex flex-col w-full">
                <div className="flex items-start justify-between p-2 border-b border-solid rounded-t items-middle">
                    <h2 className="text-sm md:text-md font-medium">
                        <a href="#!" className="inline-block rounded-sm text-white bg-green-600 hover:bg-green-500 duration-300 text-xs font-bold mr-1 md:mr-2 px-2 md:px-4 py-1 opacity-90 hover:opacity-100">{code}</a>
                        {detail && detail?.movieNm}
                    </h2>
                </div>

                <div className="h-full flex flex-col relative p-2 overflow-y-auto text-xs md:text-sm">
                    <div className=" grid grid-cols-3 gap-4">
                        <div className="w-full h-full bg-red-100 ">
                            <img
                                // src={movie.imageSrc}
                                src='/img/poster.jpeg'
                                className="w-full h-full object-center object-cover"
                                alt={detail && detail?.movieNm}
                            />
                        </div>
                        <div className="col-span-2 w-full p-1 text-gray-800 text-left space-y-1 md:space-y-2">
                            <div className="grid grid-cols-3">
                                <div className="font-medium">개봉일</div><div className="col-span-2 text-gray-500">{detail && detail?.openDt}</div>
                            </div>
                            <div className="grid grid-cols-3">
                                <div className="font-medium">관람등급</div><div className="col-span-2 text-gray-500">{detail && detail?.audits[0]?.['watchGradeNm']}</div>
                            </div>
                            <div className="grid grid-cols-3">
                                <div className="font-medium">상영시간</div><div className="col-span-2 text-gray-500">{detail && detail?.showTm}분</div>
                            </div>
                            <div className="grid grid-cols-3">
                                <div className="font-medium">장르</div><div className="col-span-2 text-gray-500">{detail && detail.genres[0]?.['genreNm']}</div>
                            </div>
                            <div className="grid grid-cols-3">
                                <div className="font-medium">국가</div><div className="col-span-2 text-gray-500">{detail && detail.nations[0]?.['nationNm']}</div>
                            </div>

                            <hr />

                            <div className="grid grid-cols-3">
                                <div className="font-medium">감독</div><div className="col-span-2 text-gray-500">{detail && detail.directors[0]?.['peopleNm']}</div>
                            </div>
                            <div className="grid grid-cols-3">
                                <div className="font-medium">배우</div><div className="col-span-2 text-gray-500">
                                    {detail && detail.actors?.map((value, key) => (
                                        <span key={key} className="p-r-1">{value['peopleNm']}</span>
                                    ))}
                                </div>
                            </div>


                            {/* <div className="hidden sm:block space-y-1 md:space-y-3">
                                <div className="grid grid-cols-3">
                                    <div className="font-medium">평점</div>
                                    <div className="col-span-2 text-gray-500 w-full text-left md:space-x-1">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-star inline"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-star inline"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-star inline"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-star inline"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-star inline"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* 평점 */}
                    {/* <div className="mt-3 p-2 sm:hidden">
                            <div className="w-full text-center text-sm">
                                <div className="grid grid-cols-3">
                                    <div className="col-span-2 space-x-3">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-star inline"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-star inline"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-star inline"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-star inline"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-star inline"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                    </div>
                                    <div>
                                        10점 / 100명 참여
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    {/* 상영일정 */}
                    <div className="mt-2 flow-x-hidden">
                        <ul className="flex border-b">
                            <li className="-mb-px mr-1">
                                <a className="text-gray-600 py-2 px-4 block hover:text-green-500 focus:outline-none text-green-600 border-b-2 font-medium border-green-500" href="/">상영표</a>
                            </li>
                            <li className="mr-1">
                                <a className="text-gray-600 py-2 px-4 block hover:text-green-600 focus:outline-none" href="/">상영도</a>
                            </li>
                        </ul>
                        <div className="bg-gray-50">
                            <div className="body border">
                                <div className="hidden bg-red-200 w-12/12 h-96" id="moview-map">
                                    <div className="w-full h-full"> 지도 </div>
                                </div>
                                <div className="" id="movie-showing">
                                    <div className="msg px-2 py-2 border-l-2 border-green-500 flex text-xs shadow-xs text-gray-600 cursor-pointer hover:bg-gray-100">
                                        <div className="name font-medium my-auto mr-2 text-green-600">08:00</div>
                                        <div className="text my-auto mr-2">메가박스[부산]</div>
                                        <div className="text my-auto mr-2"></div>
                                        <div className="text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">1 hour ago</div>
                                    </div>

                                    <div className="msg px-2 py-2 border-l-2 border-green-500 flex text-xs shadow-xs text-gray-600 cursor-pointer hover:bg-gray-100">
                                        <div className="name font-medium my-auto mr-2 text-green-600">08:00</div>
                                        <div className="text my-auto mr-2">롯데시네마[구로]</div>
                                        <div className="text my-auto mr-2"></div>
                                        <div className="text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">1 hour ago</div>
                                    </div>

                                    <div className="msg px-2 py-2 border-l-2 border-green-500 flex text-xs shadow-xs text-gray-600 cursor-pointer hover:bg-gray-100">
                                        <div className="name font-medium my-auto mr-2 text-green-600">08:00</div>
                                        <div className="text my-auto mr-2">CGV[목동]</div>
                                        <div className="text my-auto mr-2"></div>
                                        <div className="text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">1 hour ago</div>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default moviePage;