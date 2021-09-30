import React, { useState } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Header from './layouts/Header';
import Footer from './layouts/Footer';

import MainContainer from './containers/MainContainer';
import About from './components/About';
import Today from './components/MovieTodayRcmd';
import Boxoffice from './components/MovieBoxOffice';

function App() {

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
            <MainContainer />
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