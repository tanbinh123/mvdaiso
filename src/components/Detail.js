import React from 'react';

const Detail = ({ movies, setModal }) => {

    return (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-gray-500 bg-opacity-50" >
            <div className="relative w-auto my-6 mx-auto max-w-3xl w-11/12 h-5/6">

                {/*  One Pick Movie State Called */}
                {movies.map((movie) => (
                    <div key={movie.id} className="min-w-23 h-full border-2 border-gray-300 border-opacity-75 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-3 border-b border-solid rounded-t">
                            <h2 className="text-md font-medium">
                                {movie.title}
                            </h2>
                            <div className="cursor-pointer" onClick={() => setModal(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </div>
                        </div>

                        <div className="flex flex-col relative p-2 overflow-y-auto text-sm md:text-md">
                            <div className=" grid grid-cols-3 gap-4">
                                <div className="w-full h-full bg-red-100 ">
                                    <img
                                        src={movie.imageSrc}
                                        className="w-full h-full object-center object-cover"
                                    />
                                </div>
                                <div className="col-span-2 w-full p-1 text-gray-800 text-left space-y-1 md:space-y-3">
                                    <div className="grid grid-cols-3">
                                        <div className="font-medium">개봉일</div><div className="col-span-2 text-gray-500">{movie.openDt}</div>
                                    </div>
                                    <div className="grid grid-cols-3">
                                        <div className="font-medium">관람등급</div><div className="col-span-2 text-gray-500">{movie.age}</div>
                                    </div>
                                    <div className="grid grid-cols-3">
                                        <div className="font-medium">상영시간</div><div className="col-span-2 text-gray-500">{movie.runtime}</div>
                                    </div>
                                    <div className="grid grid-cols-3">
                                        <div className="font-medium">장르</div><div className="col-span-2 text-gray-500">{movie.genre}</div>
                                    </div>

                                    <hr />

                                    <div className="grid grid-cols-3">
                                        <div className="font-medium">제작국가</div><div className="col-span-2 text-gray-500">{movie.from}</div>
                                    </div>
                                    <div className="grid grid-cols-3">
                                        <div className="font-medium">감독</div><div className="col-span-2 text-gray-500">-</div>
                                    </div>
                                    <div className="grid grid-cols-3">
                                        <div className="font-medium">배급사</div><div className="col-span-2 text-gray-500">-</div>
                                    </div>



                                    <div className="hidden sm:block space-y-1 md:space-y-3">
                                        <hr />
                                        <div className="grid grid-cols-3">
                                            <div className="font-medium">매출액</div><div className="col-span-2 text-gray-500">-</div>
                                        </div>

                                        <div className="grid grid-cols-3">
                                            <div className="font-medium">관객수</div><div className="col-span-2 text-gray-500">{movie.views}</div>
                                        </div>
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
                                    </div>
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
                                        <a className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-3 font-medium" href="#">상영표</a>
                                    </li>
                                    <li className="mr-1">
                                        <a className="bg-white inline-block py-2 px-4 font-medium" href="#">상영지도</a>
                                    </li>
                                </ul>
                                <div className="bg-gray-50">
                                    <div className="body border">
                                        <div className="messages">
                                            <div className="msg px-2 py-2 border-l-2 border-green-500 flex text-xs shadow-xs text-gray-600 cursor-pointer hover:bg-gray-100">
                                                <div className="name font-medium my-auto mr-2 text-green-600">08:00</div>
                                                <div className="text my-auto mr-2">메가박스</div>
                                                <div className="text my-auto mr-2"></div>
                                                <div className="text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">1 hour ago</div>
                                            </div>

                                            <div className="msg px-2 py-2 border-l-2 border-green-500 flex text-xs shadow-xs text-gray-600 cursor-pointer hover:bg-gray-100">
                                                <div className="name font-medium my-auto mr-2 text-green-600">08:00</div>
                                                <div className="text my-auto mr-2">메가박스</div>
                                                <div className="text my-auto mr-2"></div>
                                                <div className="text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">1 hour ago</div>
                                            </div>

                                            <div className="msg px-2 py-2 border-l-2 border-green-500 flex text-xs shadow-xs text-gray-600 cursor-pointer hover:bg-gray-100">
                                                <div className="name font-medium my-auto mr-2 text-green-600">08:00</div>
                                                <div className="text my-auto mr-2">메가박스</div>
                                                <div className="text my-auto mr-2"></div>
                                                <div className="text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">1 hour ago</div>
                                            </div>

                                            <div className="msg px-2 py-2 border-l-2 border-green-500 flex text-xs shadow-xs text-gray-600 cursor-pointer hover:bg-gray-100">
                                                <div className="name font-medium my-auto mr-2 text-green-600">08:00</div>
                                                <div className="text my-auto mr-2">메가박스</div>
                                                <div className="text my-auto mr-2"></div>
                                                <div className="text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">1 hour ago</div>
                                            </div>

                                            <div className="msg px-2 py-2 border-l-2 border-green-500 flex text-xs shadow-xs text-gray-600 cursor-pointer hover:bg-gray-100">
                                                <div className="name font-medium my-auto mr-2 text-green-600">08:00</div>
                                                <div className="text my-auto mr-2">메가박스</div>
                                                <div className="text my-auto mr-2"></div>
                                                <div className="text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">1 hour ago</div>
                                            </div>

                                            <div className="msg px-2 py-2 border-l-2 border-green-500 flex text-xs shadow-xs text-gray-600 cursor-pointer hover:bg-gray-100">
                                                <div className="name font-medium my-auto mr-2 text-green-600">08:00</div>
                                                <div className="text my-auto mr-2">메가박스</div>
                                                <div className="text my-auto mr-2"></div>
                                                <div className="text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">1 hour ago</div>
                                            </div>

                                            <div className="msg px-2 py-2 border-l-2 border-green-500 flex text-xs shadow-xs text-gray-600 cursor-pointer hover:bg-gray-100">
                                                <div className="name font-medium my-auto mr-2 text-green-600">08:00</div>
                                                <div className="text my-auto mr-2">메가박스</div>
                                                <div className="text my-auto mr-2"></div>
                                                <div className="text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">1 hour ago</div>
                                            </div>

                                            <div className="msg px-2 py-2 border-l-2 border-green-500 flex text-xs shadow-xs text-gray-600 cursor-pointer hover:bg-gray-100">
                                                <div className="name font-medium my-auto mr-2 text-green-600">08:00</div>
                                                <div className="text my-auto mr-2">메가박스</div>
                                                <div className="text my-auto mr-2"></div>
                                                <div className="text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">1 hour ago</div>
                                            </div>

                                            <div className="msg px-2 py-2 border-l-2 border-green-500 flex text-xs shadow-xs text-gray-600 cursor-pointer hover:bg-gray-100">
                                                <div className="name font-medium my-auto mr-2 text-green-600">08:00</div>
                                                <div className="text my-auto mr-2">메가박스</div>
                                                <div className="text my-auto mr-2"></div>
                                                <div className="text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">1 hour ago</div>
                                            </div>

                                            <div className="msg px-2 py-2 border-l-2 border-green-500 flex text-xs shadow-xs text-gray-600 cursor-pointer hover:bg-gray-100">
                                                <div className="name font-medium my-auto mr-2 text-green-600">08:00</div>
                                                <div className="text my-auto mr-2">메가박스</div>
                                                <div className="text my-auto mr-2"></div>
                                                <div className="text-xs mt-1 text-gray-500 font-thin flex-none ml-auto">1 hour ago</div>
                                            </div>


                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* Modal Body End*/}

                    </div>
                ))}
            </div>
        </div >
    );
};

export default Detail;