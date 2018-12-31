import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from '../views/LandingPage';
import SignupPage from '../views/SignupPage';
import LoginPage from '../views/LoginPage';
import '../styles/styles.scss';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" render={(props) => <LandingPage {...props} />} />
      <Route exact path="/signup" render={(props) => <SignupPage {...props} />} />
      <Route exact path="/login" render={(props) => <LoginPage {...props} />} />
    </div>
  </BrowserRouter>
);

export default App;
