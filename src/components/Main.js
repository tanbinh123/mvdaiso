import React from 'react';
import DetailContainer from '../containers/DetailContainer';

const Main = ({ modal, date, movies, setModal }) => {
    return (
        < div className="flex" >
            {/* 
            - 21.09.30 - UI 구조가 적절하지 못하다 판단하여 제거
            <aside className="flex-none w-2/12 min-h-full min-w-4 max-w-6 text-sm text-white">
                {date.map((date, idx) => (
                    <div key={idx} className="h-11 bg-green-500 hover:bg-green-400 rounded-tr-lg rounded-br-lg text-center py-3 mb-px cursor-pointer">
                        <span className="inline-block">{date.year}</span>
                    </div>
                ))}
            </aside>
            */}
            <main className="flex-grow w-full px-4 max-w-4xl mx-auto">
                <div className="min-w-15 h-full grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
                    {movies.map((movie) => (
                        <div key={movie.id} className="movie-card group relative container mx-auto  bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 duration-200" onClick={() => setModal(movie.id, true)}>
                            <div className="w-full h-full bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-80 lg:h-80 lg:aspect-none cursor-pointer">
                                <img
                                    src={movie.imageSrc}
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
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
                    ))}
                </div>
            </main>

            {/*  Modal */}
            { modal ? <DetailContainer /> : null}

        </div >
    );
};

export default Main;