import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MixerPage from './pages/MixerPage/MixerPage';
import HomePage from './pages/HomePage/HomePage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/mixer">
          <MixerPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
