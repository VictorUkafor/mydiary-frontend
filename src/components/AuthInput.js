import React from 'react';

const AuthInput = (props) => {
  const {
    type, name, id, label, error,
  } = props;
  return (
    <div className="form-group">
      <label className="input-label" htmlFor={id}>{label} <span className="ast">*</span></label>
      <input name={name} type={type || 'text'} className="form-field" id={id} placeholder={label} />
      <div id={`${name}Error`}>{error}</div>
    </div>);
};


export default AuthInput;
