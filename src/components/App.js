import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from '../views/LandingPage';
import SignupPage from '../views/SignupPage';
import '../styles/styles.scss';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" render={(props) => <LandingPage {...props} />} />
      <Route exact path="/signup" render={(props) => <SignupPage {...props} />} />
    </div>
  </BrowserRouter>
);

export default App;
