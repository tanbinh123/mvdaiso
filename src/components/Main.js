import React from 'react';
import MovieDetailContainer from '../containers/MovieDetailContainer';

const Main = ({ modal, date, movies, setModal }) => {
    return (
        < div className="flex" >
            <aside className="flex-none w-2/12 min-h-full min-w-4 max-w-6 text-sm text-white">
                {date.map((date, idx) => (
                    <div key={idx} className="h-11 bg-green-500 hover:bg-green-400 rounded-tr-lg rounded-br-lg text-center py-3 mb-px cursor-pointer">
                        <span className="inline-block">{date.year}</span>
                    </div>
                ))}
            </aside>

            <main className="flex-grow w-10/12 px-4">
                <div className="min-w-15 h-full grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-4">
                    {movies.map((movie) => (
                        <div key={movie.id} className="group relative">
                            <div onClick={() => setModal(true)}>
                                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none cursor-pointer">
                                    <img
                                        src={movie.imageSrc}
                                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                    />
                                </div>
                                <div className="w-full h-20 absolute -my-20 rounded-b-md text-white bg-opacity-80  bg-green-500 border-green-500 p-4">
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
                        </div>
                    ))}
                </div>
            </main>

            {/*  Modal */}
            { modal ? <MovieDetailContainer /> : null}

        </div >
    );
};

export default Main;