import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MixerPage from './pages/MixerPage/MixerPage';
import HomePage from './pages/HomePage/HomePage';
import AddPage from './pages/AddPage/AddPage';
import SearchPage from './pages/SearchPage/SearchPage';
import EditPage from './pages/EditPage/EditPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/edit">
          <EditPage />
        </Route>
        <Route path="/add">
          <AddPage />
        </Route>
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
