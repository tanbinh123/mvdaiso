import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainContainer from './containers/MainContainer';
import MovieContainer from './containers/MovieContainer';
import CommentsContainer from './containers/CommentsContainer';

import aboutPage from './pages/about';
import Today from './pages/MovieTodayRcmd';
import Boxoffice from './pages/MovieBoxOffice';

const routes = () => {
    return (
        <Switch>
            <Route path="/" exact={true} component={MainContainer} />
            <Route path="/m/:code" exact={true} component={MovieContainer} />
            <Route path="/c/:code" exact={true} component={CommentsContainer} />
            <Route path="/about" component={aboutPage} />
            <Route path="/today" component={Today} />
            <Route path="/boxoffice" component={Boxoffice} />
        </Switch>
    );
};

export default routes;