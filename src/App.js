import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './components/HomePage';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/country/:capital" exact component={CountryDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
