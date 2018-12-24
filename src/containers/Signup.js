import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthInput from '../components/AuthInput';
import AuthForm from '../components/AuthForm';


export class Signup extends Component {
  render() {
    return (
      <div className="body">
        <h1 className="page-header">Sign Up Today</h1>
        <AuthForm buttonName="Sign Up" {...this.props}>
          <AuthInput name="firstName" id="FirstName" label="First Name" />
          <AuthInput name="lastName" id="LastName" label="Last Name" />
          <AuthInput type="email" name="email" id="Email" label="Email" />
          <AuthInput type="password" name="password" id="Password1" label="Password" />
          <AuthInput type="password" name="confirm_password" id="Password2" label="Confirm Password" />
          <AuthInput type="file" name="photograph" id="Photograph" label="Photograph" />
        </AuthForm>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Signup);
