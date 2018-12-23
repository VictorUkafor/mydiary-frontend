import React from 'react';
import Layout from '../components/Layout';
import LandingBody from '../containers/LandingBody';

const LandingPage = (props) => (
  <div>
    <Layout {...props}>
      <LandingBody />
    </Layout>
  </div>
);

export default LandingPage;
