import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../containers/home/Home'
import { Login } from '../containers/login/Login';

function App() {
  return (
    <>
    <Router>
      <Route path="/" component={Login} />
    </Router>
    </>
  );
}

export default App;
