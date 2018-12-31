import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser } from '../actions/authActions';
import validateAuth from '../lib/validation';
import AuthInput from '../components/AuthInput';
import AuthForm from '../components/AuthForm';

const initialState = {
  email: '',
  password: '',
  error: {
    email: '',
    password: '',
  },
};

class Login extends Component {
  state = initialState;

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { login, history } = this.props;
    const {
      email, password,
    } = this.state;

    const fields = {
      email, password,
    };

    const fieldNames = {
      email: 'Email',
      password: 'Password',
    };

    // run validation rules for each field
    const validationError = validateAuth(fields, fieldNames);

    const body = {
      email: email.trim(),
      password: password.trim(),
    };


    this.setState({ error: validationError });

    // processes user sign up when validation rules
    // pass for all fields
    if (!validationError.status) {
      login(body, () => history.push('/entries'));
      this.setState(initialState);
    }
  }


  render() {
    const {
      email, password, error,
    } = this.state;
    return (
      <div className="body">
        <h1 className="page-header">Login Now</h1>
        <AuthForm buttonName="Login" handleSubmit={this.handleSubmit} {...this.props}>
          <AuthInput handleChange={this.handleChange} value={email} error={error.email} noAst="*" type="email" name="email" id="Email" label="Email" />
          <AuthInput handleChange={this.handleChange} value={password} error={error.password} noAst="*" type="password" name="password" id="Password1" label="Password" />
        </AuthForm>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  successMessage: state.auth.successMessage,
  errorMessage: state.auth.errorMessage,
});

const matchDispatchToProps = (dispatch) => bindActionCreators({ login: loginUser }, dispatch);


export default connect(mapStateToProps, matchDispatchToProps)(Login);
