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
      // TODO:
      // after deploying to vercel, replace API_URL or, find some other method -> .env add to github?
      // handle duplicate

      // console.log('the data is :', data);

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

  // console.log('+-------------Register------------------+');
  // // console.log('API_URL: ', API_URL);
  // console.log('user: ', user);
  // console.log('+-------------------------------------+');

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
