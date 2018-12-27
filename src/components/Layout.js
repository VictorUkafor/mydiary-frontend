import React from 'react';
import Header from '../containers/Header';
import Footer from './Footer';

const Layout = (props) => {
  const { children, page } = props;
  return (
    <div>
      <Header page={page} {...props} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
