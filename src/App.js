
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LoginPage from './pages/Login';
import HomePage from './pages/Home'

const PagesRoot = () => (
  <Router>
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </Router>
)


export default PagesRoot;