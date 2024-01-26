export const userValidation = user => {
  const namePattern = /^(?=[a-zA-Z0-9._]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
  const passPattern = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;

  if (
    typeof user.name !== 'undefined' &&
    typeof user.password !== 'undefined' &&
    namePattern.test(user.name) &&
    passPattern.test(user.password)
  ) {
    // console.log('valid user');
    return true;
  } else {
    // console.log('invalid user');
    return false;
  }
};
