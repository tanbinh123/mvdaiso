import React from 'react';

const MovieDetail = ({ movies, setModal }) => {

    return (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-gray-500 bg-opacity-50">
            <div className="relative w-auto my-6 mx-auto max-w-3xl w-11/12 h-5/6">
                <div className="min-w-23 h-full border-2 border-gray-300 border-opacity-75 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                    {/* Modal Header Start*/}
                    <div className="flex items-start justify-between p-2 border-b border-solid rounded-t">
                        <h2 className="text-lg font-semibold">
                            [영화제목] [개봉일] [연령]
                        </h2>
                        <div className="cursor-pointer pt-1" onClick={() => setModal(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </div>
                    </div>
                    {/* Modal Header End*/}

                    {/* Modal Body Start*/}
                    <div className="flex flex-col relative p-2 overflow-y-auto text-sm md:text-md">
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="w-full bg-red-100 max-h-96">
                                <img
                                    src="https://www.kobis.or.kr/common/mast/movie/2021/09/thumb_x289/thn_084b6dca2de449a1aee7757a90d30325.jpg"
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                            <div className="w-full text-gray-800 text-left space-y-3 md:space-y-4">
                                <div className="grid grid-cols-3">
                                    <div className="font-bold">개봉일</div><div className="col-span-2 text-gray-500">[YYYY-MM-DD]</div>
                                </div>
                                <div className="grid grid-cols-3">
                                    <div className="font-bold">관람등급</div><div className="col-span-2 text-gray-500">[LIMIT_AGE]</div>
                                </div>
                                <div className="grid grid-cols-3">
                                    <div className="font-bold">상영시간</div><div className="col-span-2 text-gray-500">[RUN_TIME]</div>
                                </div>
                                <div className="grid grid-cols-3">
                                    <div className="font-bold">장르</div><div className="col-span-2 text-gray-500">[GENRE]</div>
                                </div>

                                <hr />

                                <div className="grid grid-cols-3">
                                    <div className="font-bold">제작국가</div><div className="col-span-2 text-gray-500">[ORIGIN]</div>
                                </div>
                                <div className="grid grid-cols-3">
                                    <div className="font-bold">감독</div><div className="col-span-2 text-gray-500">[DIRECTOR]</div>
                                </div>
                                <div className="grid grid-cols-3">
                                    <div className="font-bold">배급사</div><div className="col-span-2 text-gray-500">[COMPANY]</div>
                                </div>

                                <hr />

                                <div className="grid grid-cols-3">
                                    <div className="font-bold">매출액</div><div className="col-span-2 text-gray-500">[OUT_MONEY]</div>
                                </div>

                                <div className="grid grid-cols-3">
                                    <div className="font-bold">관객수</div><div className="col-span-2 text-gray-500">[SUM_VIEWS]</div>
                                </div>

                                {/* <div className="hidden sm:block sm:space-y-4"> */}
                                <div className="grid grid-cols-3">
                                    <div className="font-bold">평점</div>
                                    <div className="col-span-2 text-gray-500 w-full text-left md:space-x-1">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-star inline"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-star inline"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-star inline"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-star inline"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-star inline"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                    </div>
                                </div>
                                {/* </div> */}
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
                        <div className="mt-2 p-2 flow-x-hidden overflow-y-hidden h-80">
                            <ul className="flex border-b">
                                <li className="-mb-px mr-1">
                                    <a className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 font-semibold" href="#">상영일정</a>
                                </li>
                                <li className="mr-1">
                                    <a className="bg-white inline-block py-2 px-4 font-semibold" href="#">#</a>
                                </li>
                            </ul>
                            <div className="bg-gray-100 h-full">
                                <div className="relative"> 상영정표 </div>
                            </div>
                        </div>
                    </div>
                    {/* Modal Body End*/}

                </div>
            </div>
        </div >
    );
};

export default MovieDetail;