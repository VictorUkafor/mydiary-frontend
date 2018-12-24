import React from 'react';

const AuthForm = (props) => {
  const {
    children, successMessage, errorMessage, buttonName,
  } = props;
  return (
    <form name="signUp" id="signUp" className="signup-form signup" encType="multipart/form-data">
      <div id="successMessage">{successMessage}</div>
      <div id="errorMessage">{errorMessage}</div>
      {children}
      <button type="submit" className="form-button">{buttonName}</button>
      <p className="required">Fill are fields with <span className="ast">*</span></p>
    </form>
  );
};


export default AuthForm;
