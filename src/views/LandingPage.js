import React from 'react';
import Layout from '../components/Layout';
import Landing from '../components/Landing';

const LandingPage = (props) => (
  <div>
    <Layout {...props}>
      <Landing />
    </Layout>
  </div>
);

export default LandingPage;
