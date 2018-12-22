import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import man from '../assets/man1.png';
import landingLogo from '../assets/landing-logo.png';


export class LandingBody extends Component {
  firstButton() {
    const { user } = this.props;
    if (user) {
      return (
        <Link to="/add-entry">
          <button className="direct" type="button">Add an entry</button>
        </Link>
      );
    }
    return (
      <Link to="/login">
        <button className="direct" type="button">Have an account? Sign In</button>
      </Link>
    );
  }

  secondButton() {
    const { user } = this.props;
    if (user) {
      return (
        <Link to="/entries">
          <button className="direct" type="button">View all entries</button>
        </Link>
      );
    }
    return (
      <Link to="/signup">
        <button className="direct" type="button">You don't? Sign up today!</button>
      </Link>
    );
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
            <h1 className="add-h1">You've got any idea, thought or plan!
              <br />
          Pen it down on <span className="x-h1">MyDiary</span> now
            </h1>
            <div className="d-buttons">
              {this.firstButton()}
              {this.secondButton()}
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
