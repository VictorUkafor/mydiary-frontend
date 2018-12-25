import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signupUser } from '../actions/authActions';
import validateAuth from '../lib/validation';
import AuthInput from '../components/AuthInput';
import AuthForm from '../components/AuthForm';

const initialState = {
  // input fields
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  photograph: '',
  error: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    photograph: '',
  },
};

export class Signup extends Component {
  state = initialState;

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { signup, history } = this.props;
    const {
      firstName, lastName, email, password, confirmPassword, photograph,
    } = this.state;

    const fields = {
      firstName, lastName, email, password, confirmPassword, photograph,
    };

    const fieldNames = {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      photograph: 'Photograph',
    };

    // run validation rules for each field
    const validationError = validateAuth(fields, fieldNames);

    const body = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      password: password.trim(),
      confirm_password: confirmPassword.trim(),
      photograph: photograph.trim(),
    };


    this.setState({ error: validationError });

    // processes user sign up when validation rules
    // pass for all fields
    if (!validationError.status) {
      signup(body, () => history.push('/login'));
      this.setState(initialState);
    }
  }


  render() {
    const {
      firstName, lastName, email, password, confirmPassword, photograph, error,
    } = this.state;
    return (
      <div className="body">
        <h1 className="page-header">Sign Up Today</h1>
        <AuthForm buttonName="Sign Up" handleSubmit={this.handleSubmit} {...this.props}>
          <AuthInput handleChange={this.handleChange} value={firstName} error={error.firstName} noAst="*" name="firstName" id="FirstName" label="First Name" />
          <AuthInput handleChange={this.handleChange} value={lastName} error={error.lastName} noAst="*" name="lastName" id="LastName" label="Last Name" />
          <AuthInput handleChange={this.handleChange} value={email} error={error.email} noAst="*" type="email" name="email" id="Email" label="Email" />
          <AuthInput handleChange={this.handleChange} value={password} error={error.password} noAst="*" type="password" name="password" id="Password1" label="Password" />
          <AuthInput handleChange={this.handleChange} value={confirmPassword} noAst="*" error={error.confirmPassword} type="password" name="confirmPassword" id="Password2" label="Confirm Password" />
          <AuthInput handleChange={this.handleChange} value={photograph} error={error.photograph} type="file" name="photograph" id="Photograph" label="Photograph" />
        </AuthForm>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  successMessage: state.auth.successMessage,
  errorMessage: state.auth.errorMessage,
});

const matchDispatchToProps = (dispatch) => bindActionCreators({ signup: signupUser }, dispatch);


export default connect(mapStateToProps, matchDispatchToProps)(Signup);
