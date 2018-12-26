import React from 'react';
import man from '../assets/man1.png';
import landingLogo from '../assets/landing-logo.png';

export const Landing = () => (
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
          <button className="direct" type="button">Have an account? Sign In</button>
          <button className="direct" type="button">You don&apos;t? Sign up today!</button>
        </div>
      </div>
    </div>
  </div>
);


export default Landing;
