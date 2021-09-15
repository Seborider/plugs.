import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MixerPage from './pages/MixerPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/mixer">
          <MixerPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
