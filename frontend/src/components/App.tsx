import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'normalize.css';

import './app.css';

import Wrapper from './@common/Wrapper';
import Header from './@common/Header';
import Main from './@common/Main';
import Footer from './@common/Footer';

import Index from './Index';
import User from './User';

const App: FC = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Switch>
          <Route
            path="/"
            component={Index}
            exact />

          <Route
            path="/users"
            component={User} />
        </Switch>
      </Main>
      <Footer />
    </Wrapper>
  )
};

export default App;
