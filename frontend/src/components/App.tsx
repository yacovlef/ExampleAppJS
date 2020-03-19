import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'normalize.css';

import './app.css';

import PrivateRoute from './@common/PrivateRoute';
import Wrapper from './@common/Wrapper';
import Header from './@common/Header';
import Main from './@common/Main';
import Footer from './@common/Footer';

import Auth from './Auth';
import Index from './Index';
import User from './User';

const App: FC = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Switch>
          <Route path="/auth" exact>
            <Auth />
          </Route>

          <PrivateRoute path="/" exact>
            <Index />
          </PrivateRoute>

          <PrivateRoute path="/users">
            <User />
          </PrivateRoute>
        </Switch>
      </Main>
      <Footer />
    </Wrapper>
  )
};

export default App;
