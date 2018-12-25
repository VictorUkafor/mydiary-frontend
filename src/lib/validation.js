const validateAuth = (fields, fieldNames) => {
  const error = { status: false };

  Object.keys(fieldNames).forEach((field) => {
    if (field !== 'photograph' && (!fields[field] || fields[field].trim() === '')) {
      error[field] = `${fieldNames[field]} must be filled`;
      error.status = true;
    }
  });

  // checks for valid email
  const emailFormat = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
  if (fields.email) {
    if (!emailFormat.test(fields.email.trim())) {
      error.email = 'You\'ve entered an invalid email.';
      error.status = true;
    }
  }

  // checks if passwords match
  const alphaNumberic = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;
  if (fields.password) {
    if (fields.password.length < 5 && !alphaNumberic.test(fields.password.trim())) {
      error.password = 'Your password must be more than 4 characters.';
      error.status = true;
    }
  }

  // checks if passwords match
  if (fields.confirmPassword) {
    if (fields.password !== '' && fields.confirmPassword !== '') {
      if (fields.password !== fields.confirmPassword) {
        error.confirmPassword = 'Passwords do not match.';
        error.status = true;
      }
    }
  }

  // validates photograph
  if (fields.photograph) {
    const fileExt = fields.photograph.split('.').pop();
    if (fileExt !== 'jpg' && fileExt !== 'png'
    && fileExt !== 'jpeg' && fileExt !== 'gif') {
      error.photograph = 'File must be an image';
      error.status = true;
    }
  }

  return error;
};

export default validateAuth;
