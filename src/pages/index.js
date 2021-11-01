/** 
 *  Title : View - index
 *  Date : 2021.10.01
 *  Des : 메인
 *  @honeypigman
 */
import React from 'react';
import Layout from '../components/layout'
import { Link } from 'react-router-dom';
// import Loading from '../components/loading';

const IndexPage = ({ list }) => {
    return (
        < Layout >
            < div className="flex">
                < main className="flex-grow w-full px-4 max-w-2xl mx-auto pb-16" >
                    {!list && (
                        <div className="animate-pulse min-w-15 h-full grid grid-cols-3 gap-y-10 gap-x-3 md:gap-x-8">
                            <div className="movie-card h-40 md:h-64 group relative container bg-gray-200 rounded-xl shadow-lg"></div>
                            <div className="movie-card h-40 md:h-64 group relative container bg-gray-200 rounded-xl shadow-lg"></div>
                            <div className="movie-card h-40 md:h-64 group relative container bg-gray-200 rounded-xl shadow-lg"></div>
                            <div className="movie-card h-40 md:h-64 group relative container bg-gray-200 rounded-xl shadow-lg"></div>
                            <div className="movie-card h-40 md:h-64 group relative container bg-gray-200 rounded-xl shadow-lg"></div>
                        </div>
                    )}
                    {list && (
                        <div className="min-w-15 h-full grid grid-cols-3 gap-y-10 gap-x-3 md:gap-x-8">
                            {list?.map((movie, idx) => (
                                <div key={movie.movieCd && idx} className="movie-card group relative container mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 duration-200">
                                    <div className="w-full h-full bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-80 lg:aspect-none cursor-pointer">
                                        <Link to={`m/${movie.movieCd}`}>
                                            <img
                                                src={movie.image}
                                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                                alt={movie.movieNm}
                                            />
                                            <div className="w-full h-15 absolute -my-14 text-white bg-opacity-80  bg-green-500 border-green-500 p-3 text-xs md:text-md">
                                                <h1 className="text-center">
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    <div className="ellipses">{movie.movieNm}</div>
                                                </h1>
                                                <div className="text-center">
                                                    <span className="p-1">{(movie.openDt).toString().substring(0, 4)}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </main>
            </div >
        </Layout >
    );
};

export default IndexPage;