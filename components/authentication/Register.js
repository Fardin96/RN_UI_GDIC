import {StyleSheet} from 'react-native';
import React, {useState} from 'react';

import AuthenticationForm from './AuthenticationForm';

import {API_URL} from '@env';

const Register = () => {
  const [user, setUser] = useState({});

  const getData = data => {
    setUser(data);
  };

  console.log('+-------------Register------------------+');
  // console.log('API_URL: ', API_URL);
  console.log('user: ', user);
  console.log('+-------------------------------------+');

  (async () => {
    try {
      // TODO:
      // after deploying to vercel, replace API_URL or, find some other method
      // handle duplicate
      const api = `${API_URL}/newUser/add/`;
      console.log('the api is :', api);

      const data = {
        name: user.name,
        password: user.password,
      };
      console.log('the data is :', data);

      const response = await fetch(api, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const userData = await response.json();
      console.log('expecting a token: ', userData);
    } catch (error) {
      console.log('Error fetching donors: ', error);
    }
  })();

  return (
    <AuthenticationForm
      title={'Registration'}
      btnTitle={'Register'}
      getData={getData}
    />
  );
};

export default Register;

const styles = StyleSheet.create({});
