import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import man from '../assets/man1.png';
import landingLogo from '../assets/landing-logo.png';


export class LandingBody extends Component {
  linking(link, message) {
    return (
      <Link to={`/${link}`}>
        <button className="direct" type="button">{message}</button>
      </Link>
    );
  }

  landingButton(authLink, authMessage, defaultLink, defaultMessage) {
    const { user } = this.props;
    if (user) {
      this.linking(authLink, authMessage);
    }
    this.linking(defaultLink, defaultMessage);
  }

  render() {
    return (
      <div className="body">
        <div className="landing">
          <div className="image-ad">
            <img src={man} alt="" />
          </div>
          <div className="add">
            <img src={landingLogo} alt="" />
            <h1 className="add-h1">You&apos;ve got any idea, thought or plan!
              <br />
          Pen it down on <span className="x-h1">MyDiary</span> now
            </h1>
            <div className="d-buttons">
              {this.landingButton('add-entry', 'Add an entry', 'login', 'Have an account? Sign In')}
              {this.landingButton('entries', 'View all entries', 'signup', 'You don\'t? Sign up today!')}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(LandingBody);
