import React from 'react';
import DetailContainer from '../containers/DetailContainer';
import Loading from './Loading';

const Main = ({ list, modal, setModal, loading }) => {
    return (
        < div className="flex" >
            < main className="flex-grow w-full px-4 max-w-3xl mx-auto pb-16" >
                <div className="min-w-15 h-full grid grid-cols-3 gap-y-10 gap-x-3">
                    {list && (list.map((movie, idx) => (
                        <div key={movie.movieCd} className="movie-card group relative container mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 duration-200" onClick={() => setModal(movie.movieCd, true)}>
                            <div className="w-full h-full bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-80 lg:aspect-none cursor-pointer">
                                <img
                                    // src={movie.imageSrc}
                                    src='/img/poster.jpeg'
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                    alt={movie.movieNm}
                                />
                                <div className="w-full h-15 absolute -my-14 text-white bg-opacity-80  bg-green-500 border-green-500 p-3 text-xs md:text-md">
                                    <h1 className="text-center">
                                        <a href="#`">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            <div className="ellipses">{movie.movieNm}</div>
                                        </a>
                                    </h1>
                                    <div className="text-center">
                                        <span className="p-1">{movie.openDt}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )))}
                </div>
                {loading && (
                    <Loading />
                )}
            </main>

            {/*  Modal */}
            { modal ? <DetailContainer /> : null}

        </div >
    );
};

export default Main;