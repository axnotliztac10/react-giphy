import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from 'containers/Home';
import Favorites from 'containers/Favorites';

export default function App() {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" component={Home}/>
      <Route path="/favorites" component={Favorites}/>
    </Switch>
  );
}

