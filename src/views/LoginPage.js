import React from 'react';
import Layout from '../components/Layout';
import Login from '../containers/Login';

const LoginPage = (props) => (
  <div>
    <Layout page="login" {...props}>
      <Login {...props} />
    </Layout>
  </div>
);

export default LoginPage;
