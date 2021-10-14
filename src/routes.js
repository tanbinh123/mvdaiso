import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainContainer from './containers/MainContainer';
import MovieContainer from './containers/MovieContainer';
import CommentsContainer from './containers/CommentsContainer';

import aboutPage from './pages/about';
import loginPage from './pages/login';
import joinPage from './pages/join';
import profilePage from './pages/profile';
import errorPage from './pages/error';

const routes = () => {

    return (
        <Switch>
            <Route path="/" exact={true} component={MainContainer} />
            <Route path="/m/:code" exact={true} component={MovieContainer} />
            <Route path="/c/:code" exact={true} component={CommentsContainer} />
            <Route path="/auth/login" exact={true} component={loginPage} />
            <Route path="/auth/join" exact={true} component={joinPage} />
            <Route path="/auth/profile" exact={true} component={profilePage} />
            <Route path="/about" component={aboutPage} />
            <Route path="*" component={errorPage} />
        </Switch>
    );
};

export default routes;