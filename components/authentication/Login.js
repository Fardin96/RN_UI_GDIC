import React, {useState} from 'react';

import {API_URL} from '@env';

import AuthenticationForm from './AuthenticationForm';
import {userValidation} from '../../functions/validation';

const Login = ({navigation}) => {
  const [err, setErr] = useState('');

  const navHandler = () => {
    navigation.navigate('employee');
  };

  const onSubmit = userData => {
    const user = {
      name: userData.name,
      password: userData.password,
    };

    // input validation
    if (!userValidation(user)) {
      setErr('Please enter valid name and password');
      return;
    }

    (async () => {
      try {
        // TODO:
        // after deploying to vercel, replace API_URL or, find some other method -> .env add to github?
        // handle duplicate
        const api = `${API_URL}/auth/login/`;
        // console.log('the api is :', api);

        const data = {
          name: user.name,
          password: user.password,
        };
        // console.log('the data is :', data);

        const res = await fetch(api, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const resData = await res.json();
        console.log('expecting a token: ', resData);

        // TODO:
        if (resData === 'Please enter correct name and password') {
          setErr('Please enter correct name and password');
          // console.log('error in LOGIN SCREEN: ', resData);
        } else {
          navHandler();
        }
      } catch (error) {
        console.log('Error fetching donors: ', error);
      }
    })();
  };

  return (
    <AuthenticationForm
      title={'Log In'}
      btnTitle={'Login'}
      onSubmit={onSubmit}
      err={err}
    />
  );
};

export default Login;
