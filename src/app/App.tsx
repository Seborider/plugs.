import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MixerPage from './pages/MixerPage/MixerPage';
import HomePage from './pages/HomePage/HomePage';
import AddPage from './pages/AddPage/AddPage';
import SearchPage from './pages/SearchPage/SearchPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/add">
          <AddPage />
        <Route path="/search">
          <SearchPage />
        </Route>
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
