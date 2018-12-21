import React from 'react';
import logo from '../assets/logo.png';

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <header>
        <div className="logo">
          <h1 className="logo-text">
            <img src={logo} className="logo-image" alt="" />
        My<span className="text2">Diary</span>
          </h1>
        </div>

      </header>

      {children}

      <footer>
        <div className="p copyright">
                Copyright (c) 2018 &nbsp; MyDiary &nbsp; All Rights Reserved &nbsp; |  &nbsp;
                  Designed & Developed by Victor Ukafor
        </div>
      </footer>
    </div>
  );
};

export default Layout;
