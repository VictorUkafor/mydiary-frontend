import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../assets/logo.png';

class Header extends Component {
  redirectToIndex = () => {
    const { user, history } = this.props;
    if (user) {
      return history.push('/entries');
    }
    return history.push('/');
  }

  navigation = () => {
    const { page } = this.props;
    switch (page) {
      case 'landing':
        return (
          <div>
            <li><button type="button" className="sign-in">All Entries</button></li>
            <li><button type="button" className="sign-in">Add an Entry</button></li>
            <li><button type="button" className="sign-in my-profile-button">My Profile</button></li>
            <li><button type="button" className="sign-in my-profile-button">Log Out</button></li>
          </div>
        );
      case 'signup':
        return (<li><button type="button" className="sign-in">Sign In</button></li>);
      default:
        return false;
    }
  }

  render() {
    return (
      <header>
        <div onClick={this.redirectToIndex} className="logo">
          <h1 className="logo-text">
            <img src={logo} className="logo-image" alt="" />
        My<span className="text2">Diary</span>
          </h1>
        </div>
        <ul className="side-button">
          {this.navigation()}
        </ul>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.authenticated,
});

export default connect(mapStateToProps)(Header);
