import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Auth from './pages/auth';
import AppProvider from './providers';
import './App.css';
import Home from './pages/home'; // import the home component

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route path='/auth' component={Auth} />
          <Route path='/' exact component={Home} /> // add the new home route
        </Switch>
      </Router>
    </AppProvider>
  );
};
export default App;