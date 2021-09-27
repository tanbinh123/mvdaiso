import React, { useState } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Main from './mv/Main';
import About from './mv/About';
import Today from './mv/MovieTodayRcmd';
import Boxoffice from './mv/MovieBoxOffice';

function App() {

  const date = [
    { year: 2021 }, { year: 2020 }, { year: 2019 }, { year: 2018 }, { year: 2017 },
    { year: 2016 }, { year: 2015 }, { year: 2014 }, { year: 2013 }, { year: 2012 },
    { year: 2011 }, { year: 2010 }, { year: 2009 }, { year: 2008 }, { year: 2007 },
    { year: 2006 }, { year: 2005 }, { year: 2004 }, { year: 2003 }, { year: 2002 },
    { year: 2001 }, { year: 2000 },
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

  return (
    <div>

      {/*  Head Start */}
      <Helmet>
        <title>무비다이소</title>
      </Helmet>
      {/*  Head End */}


      {/* Header Start */}
      <Header />
      {/* Header End */}


      {/* Main Start */}
      <div className="min-h-screen">
        {/* Router Setup */}
        <Switch>
          <Route path="/" exact={true}>
            <Main date={date} movie={movie}></Main>
          </Route>
          <Route path="/about" component={About} />
          <Route path="/today" component={Today} />
          <Route path="/boxoffice" component={Boxoffice} />
        </Switch>
      </div>
      {/* Main End */}


      {/* Footer Start*/}
      <Footer />
      {/* Footer End*/}

    </div >
  );
}

export default App;