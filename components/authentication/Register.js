import React, {useState} from 'react';

import AuthenticationForm from './AuthenticationForm';

import {userValidation} from '../../functions/validation';
import {useAddUserMutation} from '../../redux-toolkit/feature/authentication/auth-slice';

const Register = ({navigation}) => {
  const [err, setErr] = useState('');

  const [addUser] = useAddUserMutation();

  const navHandler = () => {
    navigation.navigate('login');
  };

  const onSubmit = async userData => {
    const data = {
      name: userData.name,
      password: userData.password,
    };

    // input validation
    if (!userValidation(data)) {
      setErr('Please enter valid name and password');
      return;
    }

    try {
      const response = await addUser(data);
      // console.log('response adding user: ', response);

      if (response.error?.data === 'duplicate user!') {
        setErr('User already exists!');
      } else if (response.data.token === '') {
        setErr('Please enter valid name and password');
      } else if (response.data.token) {
        // token valid -> login screen
        navHandler();
      }
    } catch (error) {
      console.log('Error registering new user: ', error);
    }
  };

  return (
    <AuthenticationForm
      title={'Registration'}
      btnTitle={'Register'}
      onSubmit={onSubmit}
      navHandler={navHandler}
      err={err}
    />
  );
};

export default Register;
