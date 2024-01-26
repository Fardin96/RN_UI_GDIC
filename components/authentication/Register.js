import React, {useState} from 'react';

import AuthenticationForm from './AuthenticationForm';

import {API_URL} from '@env';

const Register = ({navigation}) => {
  const [user, setUser] = useState({});

  const navHandler = () => {
    navigation.navigate('login');
  };

  const onSubmit = userData => {
    setUser(userData);

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

        // TODO:
        // handle duplicate user!
        if (resData.token === '') {
          console.log('error in REGISTER SCREEN: ', resData);
        } else {
          navHandler();
        }
      } catch (error) {
        console.log('Error fetching donors: ', error);
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
    />
  );
};

export default Register;
