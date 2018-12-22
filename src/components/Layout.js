import React from 'react';
import Header from '../containers/Header';
import Footer from './Footer';

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Header {...props} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
