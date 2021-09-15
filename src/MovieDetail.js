import React from 'react';

const MovieDetail = () => {
    return (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl w-11/12">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-2 border-b border-solid rounded-t">
                        <h2 className="text-lg font-semibold">
                            [영화제목] [개봉일] [연령]
                        </h2>
                        <div className="cursor-pointer z-50 pt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </div>
                    </div>

                    {/*body*/}
                    <div className="relative p-4 h-100">
                        123
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;