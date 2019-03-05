import React from 'react';

const AuthInput = (props) => {
  const {
    type, name, id, label, error, handleChange, value, noAst,
  } = props;
  return (
    <div className="form-group">
      <label className="input-label" htmlFor={id}>{label} <span className="ast">{noAst}</span></label>
      <input onChange={handleChange} value={value} name={name} type={type || 'text'} className="form-field" id={id} placeholder={label} />
      <div id={`${name}Error`}><h1 className="errorField">{error}</h1></div>
    </div>);
};


export default AuthInput;
