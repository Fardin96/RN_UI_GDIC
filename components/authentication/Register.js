import React, {useState} from 'react';

import AuthenticationForm from './AuthenticationForm';

import {API_URL} from '@env';
import {userValidation} from '../../functions/validation';

const Register = ({navigation}) => {
  const [err, setErr] = useState('');

  const navHandler = () => {
    navigation.navigate('login');
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
        const api = `${API_URL}/newUser/add/`;
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
        // console.log('expecting a token: ', resData);

        if (resData.token === '') {
          setErr('Please enter valid name and password');
        } else if (resData === 'duplicate user!') {
          setErr('User already exists!');
        } else {
          navHandler();
        }
      } catch (error) {
        console.log('Error registering new user: ', error);
      }
    })();
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
