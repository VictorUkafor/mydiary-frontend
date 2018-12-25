import React from 'react';

const AuthForm = (props) => {
  const {
    children, successMessage, errorMessage, buttonName, handleSubmit,
  } = props;
  return (
    <form onSubmit={handleSubmit} name="signUp" id="signUp" className="signup-form signup" encType="multipart/form-data">
      <div id="successMessage"><h1 className="successField">{successMessage}</h1></div>
      <div id="errorMessage"><h1 className="errorField">{errorMessage}</h1></div>
      {children}
      <button type="submit" className="form-button">{buttonName}</button>
      <p className="required">Fill are fields with <span className="ast">*</span></p>
    </form>
  );
};


export default AuthForm;
