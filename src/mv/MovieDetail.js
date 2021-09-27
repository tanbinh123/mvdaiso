import React from 'react';

const MovieDetail = (props) => {

    return (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl w-11/12">
                <div className="border-2 border-gray-300 border-opacity-75 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                    {/* Modal Header Start*/}
                    <div className="flex items-start justify-between p-2 border-b border-solid rounded-t">
                        <h2 className="text-lg font-semibold">
                            [영화제목] [개봉일] [연령]
                        </h2>
                        <div className="cursor-pointer z-50 pt-1" onClick={() => props.setModal(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </div>
                    </div>
                    {/* Modal Header End*/}

                    {/* Modal Body Start*/}
                    <div className="flex flex-col relative p-4 h-100 overflow-y-auto">
                        <div className="grid grid-cols-2 gap-5">
                            <div className="w-full bg-gray-100">
                                <img
                                    src="https://www.kobis.or.kr/common/mast/movie/2021/09/thumb_x289/thn_084b6dca2de449a1aee7757a90d30325.jpg"
                                    className="w-full object-center object-cover"
                                />
                            </div>
                            <div className="w-full text-sm md:text-md text-gray-800 text-left space-y-4">
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
                                    <div className="font-bold">누적 관객수</div><div className="col-span-2 text-gray-500">[SUM_VIEWS]</div>
                                </div>

                                <hr />

                                <div className="grid grid-cols-3">
                                    <div className="font-bold">평점</div>
                                    <div className="col-span-2 text-gray-500">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-star inline"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-star inline"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-star inline"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-star inline"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-star inline"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3">
                                    <div className="font-bold">상영관 찾기</div>
                                    <div className="col-span-2 text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 상영관 MAP / 댓글 / 추천영화 */}
                        <div className="bg-green-400 mt-4 p-4">

                        </div>
                    </div>
                    {/* Modal Body End*/}

                </div>
            </div>
        </div>
    );
};

export default MovieDetail;