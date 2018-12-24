import React from 'react';
import Layout from '../components/Layout';
import Signup from '../containers/Signup';

const LandingPage = (props) => (
  <div>
    <Layout page="signup" {...props}>
      <Signup />
    </Layout>
  </div>
);

export default LandingPage;
