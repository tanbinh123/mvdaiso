import React from 'react';

const About = () => {
    window.scrollTo(0, 0)

    return (
        <div className="flex">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:py-16 lg:px-8 lg:items-center lg:justify-between text-center">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                    <span className="block text-indigo-500">통합 플랫폼 서비스</span>
                </h2>
                <p className="mt-6 text-lg md:text-xl text-justify text-gray-600">
                    무비다이소는 전국 영화 상영관 데이터를 기반으로 연도별 영화정보와 상세정보를 제공하는 영화정보 플랫폼 서비스 입니다.
                    상영예정 영화 서비스, 추천 영화 서비스, 박스오피스 영화 서비스, 내주변 상영관 추천 서비스, 영화 평점 관리 서비스를 지원하고 있습니다.
                </p>

                <h2 className="text-opacity-100 mt-10 text-xl text-justify font-bold text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="inline feather feather-film"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
                    <strong className="mx-2">상영예정 영화</strong>
                </h2>
                <p className="mt-1 text-lg text-justify text-gray-600">
                    상영예정 영화정보를 제공하는 서비스입니다.
                </p>

                <h2 className="text-opacity-100 mt-10 text-xl text-justify font-bold text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="inline feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                    <strong className="mx-2">추천 영화</strong>
                </h2>
                <p className="mt-1 text-lg text-justify text-gray-600">
                    날씨, 나이, 오늘 많이 상영된 영화정보 데이터를 기반으로 무비다이소 자체 매트릭스을 거쳐 영화를 추천해주는 서비스입니다.
                </p>

                <h2 className="text-opacity-100 mt-10 text-xl text-justify font-bold text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="inline feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                    <strong className="mx-2">박스오피스 영화</strong>
                </h2>
                <p className="mt-1 text-lg text-justify text-gray-600">
                    관객수, 상영한 횟수 데이터를 기반으로 역대 흥행 영화정보를 제공하는 서비스입니다.
                </p>

                <h2 className="text-opacity-100 mt-10 text-xl text-justify font-bold text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="inline feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <strong className="mx-2">평점관리</strong>
                </h2>
                <p className="mt-1 text-lg text-justify text-gray-600">
                    영화 평점 / 댓글 / 외부공유 기능을 제공하는 서비스입니다.
                </p>

                <h2 className="text-opacity-100 mt-10 text-xl text-justify font-bold text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="inline feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <strong className="mx-2">내주변 상영관 찾기</strong>
                </h2>
                <p className="mt-1 text-lg text-justify text-gray-600">
                    위치기반 서비스로, 내 주변에서 가장 가까운 상영관을 찾아주는 서비스입니다.
                </p>

                <h2 className="text-opacity-100 mt-10 text-xl text-justify font-bold text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="inline feather feather-database"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                    <strong className="mx-2">데이터 출처</strong>
                </h2>
                <p className="mt-1 text-lg text-justify text-gray-600">
                    영화진흥위원회<a href='http://www.kofic.or.kr' target='_blank' rel="noreferrer">(http://www.kofic.or.kr)</a> Open API 서비스를 활용한 데이터를 기반으로 정보를 활용 및 제공하고 있습니다.
                </p>
            </div>
        </div>
    );
};

export default About;