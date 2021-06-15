
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from './components/Store/Provider'
import RoutesPrivate from './components/Routes/Private/Private'
import LoginPage from './pages/Login';
import HomePage from './pages/Home'

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <RoutesPrivate path="/" component={HomePage} />
      </Switch>
    </StoreProvider>
  </Router>
)


export default PagesRoot;