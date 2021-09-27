## About Project
- REST API 를 통한 데이터 연동 및 활용.
- 연도별 영화내역을 리스트업하고, 원하는 영화를 클릭했을때 내 주변에서 가장 가까운 영화관을 소개하는 사이트
- 데이터출처 [영화진흥위원회](http://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do?serviceId=searchMovieInfo).
- 데이터출처 [네이버 검색:영화](https://developers.naver.com/docs/serviceapi/search/movie/movie.md#%EC%98%81%ED%99%94).

## Todo-1
- [X] Front-End 기초작업
- [X] Front-End Tailwind CSS프레임워크 Setup
- [X] Front-End 디자인 작업 (기본 메인 페이지 작업만 수행하자)
- [X] Front-End 화면기획 - 메인
- [X] Front-End 화면기획 - 메뉴 > 소개
- [X] Front-End ReactJS SPA + Route

## Todo-2 ( * ro : Read Only )
- [X] Front-End 화면기획 - 상세정보
- [ ] Front-End 화면기획 - 상세정보 > 썸네일 ( * Naver 연동 )  : ro
- [ ] Front-End 화면기획 - 상세정보 > 평점 ( * Naver 연동 ) : ro
- [ ] Front-End 화면기획 - 상세정보 > 내주변 상영관 바로가기 : ro
- [ ] Front-End 연동 - 메인
- [ ] Front-End 연동 - 상세정보
- [ ] Front-End 연동 - 메뉴 > 오늘의 영화 추천
- [ ] Front-End 연동 - 메뉴 > 박스오피스 영화
- [ ] Front-End ReactJS 리덕스 : 단일스토어 / 읽기전용 / 순수함수 준수
- [ ] Front-End ReactJS 리덕스 redux-saga / redux-thunk * 참고 : https://react.vlpt.us/redux-middleware/10-redux-saga.html
- [ ] Back-End Laravel RestAPI 기초 작업 
- [ ] Back-End Laravel 영화진흥원 연동사 연동 작업
- [ ] Back-End Laravel 네이버 연동사 연동 작업 ( 평점 / 썸네일 )
- [ ] Back-End MongoDB 데이터 적재-Collection::movieDaiso

## Todo-3
- [ ] Front-End 화면기획 - 메인 > 더보기 ( 무한-스크롤링 )
- [ ] Front-End 화면기획 - 메뉴 > 오늘의 영화 추천
- [ ] Front-End 화면기획 - 메뉴 > 박스오피스 영화
- [ ] Front-End 화면기획 - 상세정보 > 댓글
- [ ] Front-End CSS 모듈화
- [ ] Front-End ReactJS 코드스플리팅
- [ ] Back-End 날씨, 나이, 오늘 가장 많이 상영된 영화, 장르 등의 데이터를 기반으로 추천 매트릭스 로직 구현
- [ ] Back-End springboot 작업 연동 시, BE

### Next
- [ ] Front-End ReactJS 프레임워크 ( next ) 도입 검토

## Setup His
### 1) Tailwind 
```
1.Tailwindcss 설치
> npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

2. CRACO 설치
> npm install @craco/craco

3.pakage.json start / build / test 수정
{
    // ...
    "scripts": {
-     "start": "react-scripts start",
-     "build": "react-scripts build",
-     "test": "react-scripts test",
+     "start": "craco start",
+     "build": "craco build",
+     "test": "craco test",
      "eject": "react-scripts eject"
    },
  }

3.craco.config.js 설정
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}

4.tailwind.config.js 생성
> npx tailwindcss-cli@latest init

5.tailwind.config.js 설정
  module.exports = {
-   purge: [],
+   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }

6. ./src/index.css 수정
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 2) ReactJS Router Setup
```
1. react-router-dom 추가
> yarn add react-router-dom

2. ./src/index.js 설정
> import { BrowserRouter } from 'react-router-dom';
> render 함수 <BrowserRouter> 추가
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

3. 컴포넌트 선언
> import { Route, Link, Switch } from 'react-router-dom';
> Route 컴포넌트 사용 시, exact={true} 로 설정해야, URL의 '/' 규칙으로 발생하는 중복을 피할 수 있습니다. 

```

## Project Spec
- ReactJS
> SPA
> Redux-redux-saga / redux-thunk

- SpringBoot
> Quartz

- DB - Mysql
> databse moview

- DevOps
> Docker
> Git FORK / master develop release

- Tools
  intellij


## Based on following plugins or services
- RestAPI
- ReactJS
- Npm 7.21.0 / Yarn 1.22.10
- Tailwind css v2.2.14[Tailwindcss](https://tailwindcss.com/).
- Laravel v7.3
- Laravel - MongoDB [laravel-mongodb#query-builder](https://github.com/jenssegers/laravel-mongodb#query-builder).
- Laravel - Schedul
- Laravel - Job 