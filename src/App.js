import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Head from './components/Head/Head';
import Country from './components/Country/Country';
import NotFound from './components/NotFound/NotFound';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Head />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/country/:countryName">
            <Country />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
