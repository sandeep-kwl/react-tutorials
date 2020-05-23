import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import List from '../components/user-profile/List';
import Profile from '../components/user-profile/Profile';
import Header from '../components/common';

const Router = () => {
  return (
    <div className="mx-auto col-6">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route exact path="/list" component={List} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Router;
