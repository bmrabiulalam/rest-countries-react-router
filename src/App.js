import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Head from './components/Head/Head';

function App() {
  
  return (
    <div className="App">
      <Router>
          <Head/>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/friend/:id">
            <FriendDetail/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
