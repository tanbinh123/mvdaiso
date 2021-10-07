import React from 'react';
import DetailContainer from '../containers/DetailContainer';

const Main = ({ list, modal, setModal }) => {
    return (
        < div className="flex" >
            < main className="flex-grow w-full px-4 max-w-4xl mx-auto" >
                <div className="min-w-15 h-full grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {list && (list.map((movie, idx) => (
                        <div key={movie.movieCd} className="movie-card group relative container mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 duration-200" onClick={() => setModal(movie.movieCd, true)}>
                            <div className="w-full h-full bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-80 lg:h-80 lg:aspect-none cursor-pointer">
                                <div className="w-full h-full py-40 md:py-20 text-center absolute">
                                    <div className="text-gray-500 text-lg md:text-md font-bold ellipses">
                                        <a href="#!" className="inline-block rounded-sm text-white 
                                        bg-blue-600 hover:bg-blue-500 duration-300 
                                        text-sm font-bold 
                                        mr-1 md:mr-2 mb-2 px-7 md:px-9 py-2 
                                        opacity-90 hover:opacity-100">
                                            OPEN:{(movie.openDt).substring(0, 4)}
                                        </a>
                                    </div>
                                    <div className="text-gray-500 text-lg md:text-md font-bold ellipses">
                                        <a href="#!" className="inline-block rounded-sm text-white 
                                        bg-green-600 hover:bg-green-500 duration-300 
                                        text-sm font-bold 
                                        mr-1 md:mr-2 mb-2 px-2 md:px-4 py-2 
                                        opacity-90 hover:opacity-100">
                                            CODE:{movie.movieCd}
                                        </a>
                                    </div>
                                </div>
                                <img
                                    // src={movie.imageSrc}
                                    src='/img/poster.jpeg'
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                    alt={movie.movieNm}
                                />
                                <div className="w-full h-20 absolute -my-20 text-white bg-opacity-80  bg-green-500 border-green-500 p-4">
                                    <h1 className="text-md text-center px-4">
                                        <a href="#`">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            <div className="ellipses">{movie.movieNm}</div>
                                        </a>
                                    </h1>
                                    <div className="text-sm text-center">
                                        <span className="p-1">{movie.openDt}</span>|
                                        <span className="p-1">{movie.nationAlt}</span>|
                                        <span className="p-1">{movie.typeNm}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )))}
                    {/* {movies && (movies.map((movie) => (
                        <div key={movie.id} className="movie-card group relative container mx-auto  bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 duration-200" onClick={() => setModal(movie.id, true)}>
                            <div className="w-full h-full bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-80 lg:h-80 lg:aspect-none cursor-pointer">
                                <img
                                    src={movie.imageSrc}
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                    alt={movie.title}
                                />
                            </div>
                            <div className="w-full h-20 absolute -my-20 text-white bg-opacity-80  bg-green-500 border-green-500 p-4">
                                <h1 className="text-md text-center px-4">
                                    <a href={movie.href}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        <div className="ellipses">{movie.title}</div>
                                    </a>
                                </h1>
                                <div className="text-sm text-center">
                                    <span className="p-1">{movie.openDt}</span>|
                                    <span className="p-1">{movie.runtime}</span>
                                </div>
                            </div>
                        </div>
                    )))} */}
                </div>
            </main>

            {/*  Modal */}
            { modal ? <DetailContainer /> : null}

        </div >
    );
};

export default Main;