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
      name: '샹치와 텐링즈의 전설',
      href: '#',
      imageSrc: 'https://www.kobis.or.kr/common/mast/movie/2021/08/thumb_x289/thn_a7bc5615bc4247319aa95e1372fb2fce.jpg',
      title: '샹치와 텐링즈의 전설',
      open: '2021-09-01',
      runtime: '120분',
      genre: '액션, 어드벤처, 판타지',
      age: '12',
      from: '미국',
      views: '17,615,686'
    }, {
      id: 1,
      name: '샹치와 텐링즈의 전설',
      href: '#',
      imageSrc: 'https://www.kobis.or.kr/common/mast/movie/2021/08/thumb_x289/thn_a7bc5615bc4247319aa95e1372fb2fce.jpg',
      title: '샹치와 텐링즈의 전설',
      open: '2021-09-01',
      runtime: '120분',
      genre: '액션, 어드벤처, 판타지',
      age: '12',
      from: '미국',
      views: '17,615,686'
    }, {
      id: 1,
      name: '샹치와 텐링즈의 전설',
      href: '#',
      imageSrc: 'https://www.kobis.or.kr/common/mast/movie/2021/08/thumb_x289/thn_a7bc5615bc4247319aa95e1372fb2fce.jpg',
      title: '샹치와 텐링즈의 전설',
      open: '2021-09-01',
      runtime: '120분',
      genre: '액션, 어드벤처, 판타지',
      age: '12',
      from: '미국',
      views: '17,615,686'
    }, {
      id: 1,
      name: '샹치와 텐링즈의 전설',
      href: '#',
      imageSrc: 'https://www.kobis.or.kr/common/mast/movie/2021/08/thumb_x289/thn_a7bc5615bc4247319aa95e1372fb2fce.jpg',
      title: '샹치와 텐링즈의 전설',
      open: '2021-09-01',
      runtime: '120분',
      genre: '액션, 어드벤처, 판타지',
      age: '12',
      from: '미국',
      views: '17,615,686'
    }, {
      id: 1,
      name: '샹치와 텐링즈의 전설',
      href: '#',
      imageSrc: 'https://www.kobis.or.kr/common/mast/movie/2021/08/thumb_x289/thn_a7bc5615bc4247319aa95e1372fb2fce.jpg',
      title: '샹치와 텐링즈의 전설',
      open: '2021-09-01',
      runtime: '120분',
      genre: '액션, 어드벤처, 판타지',
      age: '12',
      from: '미국',
      views: '17,615,686'
    }, {
      id: 1,
      name: '샹치와 텐링즈의 전설',
      href: '#',
      imageSrc: 'https://www.kobis.or.kr/common/mast/movie/2021/08/thumb_x289/thn_a7bc5615bc4247319aa95e1372fb2fce.jpg',
      title: '샹치와 텐링즈의 전설',
      open: '2021-09-01',
      runtime: '120분',
      genre: '액션, 어드벤처, 판타지',
      age: '12',
      from: '미국',
      views: '17,615,686'
    }, {
      id: 1,
      name: '샹치와 텐링즈의 전설',
      href: '#',
      imageSrc: 'https://www.kobis.or.kr/common/mast/movie/2021/08/thumb_x289/thn_a7bc5615bc4247319aa95e1372fb2fce.jpg',
      title: '샹치와 텐링즈의 전설',
      open: '2021-09-01',
      runtime: '120분',
      genre: '액션, 어드벤처, 판타지',
      age: '12',
      from: '미국',
      views: '17,615,686'
    }, {
      id: 1,
      name: '샹치와 텐링즈의 전설',
      href: '#',
      imageSrc: 'https://www.kobis.or.kr/common/mast/movie/2021/08/thumb_x289/thn_a7bc5615bc4247319aa95e1372fb2fce.jpg',
      title: '샹치와 텐링즈의 전설',
      open: '2021-09-01',
      runtime: '120분',
      genre: '액션, 어드벤처, 판타지',
      age: '12',
      from: '미국',
      views: '17,615,686'
    }, {
      id: 1,
      name: '샹치와 텐링즈의 전설',
      href: '#',
      imageSrc: 'https://www.kobis.or.kr/common/mast/movie/2021/08/thumb_x289/thn_a7bc5615bc4247319aa95e1372fb2fce.jpg',
      title: '샹치와 텐링즈의 전설',
      open: '2021-09-01',
      runtime: '120분',
      genre: '액션, 어드벤처, 판타지',
      age: '12',
      from: '미국',
      views: '17,615,686'
    }, {
      id: 1,
      name: '샹치와 텐링즈의 전설',
      href: '#',
      imageSrc: 'https://www.kobis.or.kr/common/mast/movie/2021/08/thumb_x289/thn_a7bc5615bc4247319aa95e1372fb2fce.jpg',
      title: '샹치와 텐링즈의 전설',
      open: '2021-09-01',
      runtime: '120분',
      genre: '액션, 어드벤처, 판타지',
      age: '12',
      from: '미국',
      views: '17,615,686'
    }, {
      id: 1,
      name: '샹치와 텐링즈의 전설',
      href: '#',
      imageSrc: 'https://www.kobis.or.kr/common/mast/movie/2021/08/thumb_x289/thn_a7bc5615bc4247319aa95e1372fb2fce.jpg',
      title: '샹치와 텐링즈의 전설',
      open: '2021-09-01',
      runtime: '120분',
      genre: '액션, 어드벤처, 판타지',
      age: '12',
      from: '미국',
      views: '17,615,686'
    }, {
      id: 1,
      name: '샹치와 텐링즈의 전설',
      href: '#',
      imageSrc: 'https://www.kobis.or.kr/common/mast/movie/2021/08/thumb_x289/thn_a7bc5615bc4247319aa95e1372fb2fce.jpg',
      title: '샹치와 텐링즈의 전설',
      open: '2021-09-01',
      runtime: '120분',
      genre: '액션, 어드벤처, 판타지',
      age: '12',
      from: '미국',
      views: '17,615,686'
    }, {
      id: 1,
      name: '샹치와 텐링즈의 전설',
      href: '#',
      imageSrc: 'https://www.kobis.or.kr/common/mast/movie/2021/08/thumb_x289/thn_a7bc5615bc4247319aa95e1372fb2fce.jpg',
      title: '샹치와 텐링즈의 전설',
      open: '2021-09-01',
      runtime: '120분',
      genre: '액션, 어드벤처, 판타지',
      age: '12',
      from: '미국',
      views: '17,615,686'
    }, {
      id: 1,
      name: '샹치와 텐링즈의 전설',
      href: '#',
      imageSrc: 'https://www.kobis.or.kr/common/mast/movie/2021/08/thumb_x289/thn_a7bc5615bc4247319aa95e1372fb2fce.jpg',
      title: '샹치와 텐링즈의 전설',
      open: '2021-09-01',
      runtime: '120분',
      genre: '액션, 어드벤처, 판타지',
      age: '12',
      from: '미국',
      views: '17,615,686'
    }, {
      id: 1,
      name: '샹치와 텐링즈의 전설',
      href: '#',
      imageSrc: 'https://www.kobis.or.kr/common/mast/movie/2021/08/thumb_x289/thn_a7bc5615bc4247319aa95e1372fb2fce.jpg',
      title: '샹치와 텐링즈의 전설',
      open: '2021-09-01',
      runtime: '120분',
      genre: '액션, 어드벤처, 판타지',
      age: '12',
      from: '미국',
      views: '17,615,686'
    }, {
      id: 1,
      name: '샹치와 텐링즈의 전설',
      href: '#',
      imageSrc: 'https://www.kobis.or.kr/common/mast/movie/2021/08/thumb_x289/thn_a7bc5615bc4247319aa95e1372fb2fce.jpg',
      title: '샹치와 텐링즈의 전설',
      open: '2021-09-01',
      runtime: '120분',
      genre: '액션, 어드벤처, 판타지',
      age: '12',
      from: '미국',
      views: '17,615,686'
    }, {
      id: 1,
      name: '샹치와 텐링즈의 전설',
      href: '#',
      imageSrc: 'https://www.kobis.or.kr/common/mast/movie/2021/08/thumb_x289/thn_a7bc5615bc4247319aa95e1372fb2fce.jpg',
      title: '샹치와 텐링즈의 전설',
      open: '2021-09-01',
      runtime: '120분',
      genre: '액션, 어드벤처, 판타지',
      age: '12',
      from: '미국',
      views: '17,615,686'
    }, {
      id: 1,
      name: '샹치와 텐링즈의 전설',
      href: '#',
      imageSrc: 'https://www.kobis.or.kr/common/mast/movie/2021/08/thumb_x289/thn_a7bc5615bc4247319aa95e1372fb2fce.jpg',
      title: '샹치와 텐링즈의 전설',
      open: '2021-09-01',
      runtime: '120분',
      genre: '액션, 어드벤처, 판타지',
      age: '12',
      from: '미국',
      views: '17,615,686'
    }, {
      id: 1,
      name: '샹치와 텐링즈의 전설',
      href: '#',
      imageSrc: 'https://www.kobis.or.kr/common/mast/movie/2021/08/thumb_x289/thn_a7bc5615bc4247319aa95e1372fb2fce.jpg',
      title: '샹치와 텐링즈의 전설',
      open: '2021-09-01',
      runtime: '120분',
      genre: '액션, 어드벤처, 판타지',
      age: '12',
      from: '미국',
      views: '17,615,686'
    },
    // More products...
  ]
  return (
    <div className="flex">
      {/*  Head */}
      <Helmet>
        <title>무비다이소</title>
      </Helmet>

      <div className="flex-none justify-between w-2/12 min-h-screen text-sm min-w-4 max-w-6">
        {date.map((date) => (
          <div className="h-11 bg-green-300 hover:bg-green-100 rounded-tr-lg rounded-br-lg text-center py-3 mb-px cursor-pointer">
            <span className="inline-block">{date.year}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-between w-10/12 min-h-screen text-sm">

        <header className="h-10 p-2 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Movie Daiso</h2>
        </header>
        <main className="flex-grow bg-gray-50 p-2">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-4">
            {movie.map((movie) => (
              <div key={movie.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={movie.imageSrc}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={movie.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {movie.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{movie.open}</p>
                    <p className="mt-1 text-sm text-gray-500">{movie.runtime}세 이상</p>
                    <p className="mt-1 text-sm text-gray-500">{movie.genre}</p>
                    <p className="mt-1 text-sm text-gray-500">{movie.age}세 이상</p>
                    <p className="mt-1 text-sm text-gray-500">{movie.from}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{movie.views}</p>
                </div>
              </div>
            ))}
          </div>
        </main>

        <footer className="h-10 px-2 py-2 text-sm border-t-2">
          <span>©2021</span><span>무비다이소</span>
        </footer>
      </div>

    </div>
  );
}

export default App;
