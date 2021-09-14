import React, { useState } from "react";
import { Helmet } from "react-helmet";

function App() {
  const date = [
    { year: 2021 }, { year: 2020 }, { year: 2019 }, { year: 2018 }, { year: 2017 },
    { year: 2016 }, { year: 2015 }, { year: 2014 }, { year: 2013 }, { year: 2012 },
    { year: 2011 }, { year: 2010 }, { year: 2009 }, { year: 2008 }, { year: 2007 },
    { year: 2006 }, { year: 2005 }, { year: 2004 }, { year: 2003 }, { year: 2002 },
    { year: 2001 }, { year: 2000 }
  ]

  const movie = [
    {
      id: 1,
      name: '샹치와 텐링즈의  전설',
      href: '#',
      imageSrc: 'https://www.kobis.or.kr/common/mast/movie/2021/08/thumb_x289/thn_a7bc5615bc4247319aa95e1372fb2fce.jpg',
      title: '샹치와 텐링즈의 전설',
      openDt: '2021.09.01',
      runtime: '120분',
      genre: '액션, 어드벤처, 판타지',
      age: '12',
      from: '미국',
      views: '17,615,686'
    }, {
      id: 2,
      name: '해리포터와 아즈카반의 죄수',
      href: '#',
      imageSrc: 'https://www.kobis.or.kr/common/mast/movie/2021/08/thumb_x289/thn_a7bc5615bc4247319aa95e1372fb2fce.jpg',
      title: '해리포터와 아즈카반의 죄수',
      openDt: '2021.09.01',
      runtime: '120분',
      genre: '액션, 어드벤처, 판타지',
      age: '12',
      from: '미국',
      views: '17,615,686'
    }, {
      id: 3,
      name: '짱구는 못말려 크레용 용사와 4명의 사수꾼 휴지돌돌 말아 코풀자',
      href: '#',
      imageSrc: 'https://www.kobis.or.kr/common/mast/movie/2021/08/thumb_x289/thn_a7bc5615bc4247319aa95e1372fb2fce.jpg',
      title: '짱구는 못말려 크레용 용사와 4명의 사수꾼 휴지돌돌 말아 코풀자',
      openDt: '2021.09.01',
      runtime: '120분',
      genre: '액션, 어드벤처, 판타지',
      age: '12',
      from: '미국',
      views: '17,615,686'
    }
    // More products...
  ]

  const [gnbStatus, setGnbStatus] = useState(false);
  const onClickGnb = (e) => {
    setGnbStatus(prevStatus => prevStatus ? false : true)
  };
  const GnbMenu = () => (
    <div id="gnbMenu" class="pt-4 pb-8">
      <div class="flex flex-col w-full mx-auto px-4">
        <div class="flex flex-col space-y-2 text-gray-500">
          <a class="hover:underline menu-item-root" href="/about">무비다이소 소개</a>
          <a class="hover:underline menu-item-root" href="/pick">오늘의 영화추천</a>
          <a class="hover:underline menu-item-root" href="/hit">역대급 영화추천</a>
        </div>
      </div>
    </div>
  );


  return (
    <div className="">
      {/*  Head */}
      <Helmet>
        <title>무비다이소</title>
      </Helmet>

      <header className="w-full min-w-10 h-14 text-center p-3">
        <div className="inline-block relative">
          <h2 className="text-2xl font-extrabold tracking-tight text-green-600">Movie Daiso</h2>
        </div>
        <div className="inline-block absolute py-1 right-2 cursor-pointer" onClick={onClickGnb}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </div>
      </header>

      {/* Gnb Menu */}
      { gnbStatus ? <GnbMenu /> : null}

      <div class="flex min-h-screen">
        <aside className="flex-none w-2/12 min-h-full min-w-4 max-w-6 text-sm text-white">
          {date.map((date) => (
            <div className="h-11 bg-green-500 hover:bg-green-400 rounded-tr-lg rounded-br-lg text-center py-3 mb-px cursor-pointer">
              <span className="inline-block">{date.year}</span>
            </div>
          ))}
        </aside>

        <main className="flex-grow w-10/12 px-4">
          <div className="min-w-15 h-full grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-4">
            {movie.map((movie) => (
              <div key={movie.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={movie.imageSrc}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="w-full h-20 absolute -my-20 rounded-b-md text-white bg-opacity-90  bg-green-500 border-green-500 p-4">
                  <h1 className="text-md text-center px-4">
                    <a href={movie.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      <div className="ellipses">{movie.name}</div>
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
      </div>
      <footer className="h-12 my-5 px-2 py-4 text-xs border-t-2 border-opacity-80">
        <div>* 본 서비스는 영화진흥위원회 API서비스 정보를 기반으로 제공하고 있습니다.</div>
        <div><span>©2021</span><span>무비다이소</span></div>
      </footer>
    </div >
  );
}

export default App;