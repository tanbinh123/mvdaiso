## About Project
- REST API 를 통한 데이터 연동 및 활용.
- 연도별 영화내역을 리스트업하고, 원하는 영화를 클릭했을때 내 주변에서 가장 가까운 영화관을 소개하는 사이트
- 데이터출처 [영화진흥위원회](http://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do?serviceId=searchMovieInfo).

## Todo
- [X] 프론트 화면기획 및 구축
- [X] Tailwind CSS프레임워크 설정
- [ ] ReactJS 기반 초기 작업 진행
- [ ] 백앤드 php - Laravel RestAPI 기초작업
- [ ] 백앤드 springboot 
- [ ] 기능 - 지도 API선정 :: 네이버 API활용
- [ ] 기능 - 지도 마커 표기
- [ ] 기능 - 전체 측정소정보 목록(getMsrstnList) 데이터 응답받아 받아 dmXY 값을 기준으로 전체측정소 데이터 스케쥴러 작성 및 마커 표기

## Setup His
### 1) Tailwind 
```
1.Install
> npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

2. CRACO
> npm install @craco/craco

3.pakage.json Edit
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

3.craco.config.js setup
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

4.tailwind.config.js create
> npx tailwindcss-cli@latest init

5.tailwind.config.js setup
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

6. ./src/index.css edit
@tailwind base;
@tailwind components;
@tailwind utilities;


```

## Based on following plugins or services
- RestAPI
- ReactJS
- Npm 7.21.0 / Yarn 1.22.10
- Tailwind css v2.2.14[Tailwindcss](https://tailwindcss.com/).
- Laravel v7.3
- Laravel - MongoDB [laravel-mongodb#query-builder](https://github.com/jenssegers/laravel-mongodb#query-builder).
- Laravel - Schedul
- Laravel - Job

## Contact Me
- 리뷰 및 조언 언제나 환영합니다.
- honeypigman@gmail.com