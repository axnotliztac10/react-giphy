import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from 'containers/Home';
import GiphyProvider from 'containers/GiphyProvider/withGiphy';

export default function App() {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" component={GiphyProvider(Home)}/>
      <Route path="/favorites" component={Home}/>
    </Switch>
  );
}

