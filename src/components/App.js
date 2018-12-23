import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from '../views/LandingPage';
import '../styles/styles.scss';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" render={(props) => <LandingPage {...props} />} />
    </div>
  </BrowserRouter>
);

export default App;
