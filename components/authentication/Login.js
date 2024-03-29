import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import AuthenticationForm from './AuthenticationForm';

import {userValidation} from '../../functions/validation';
import {useLoginMutation} from '../../redux-toolkit/feature/authentication/auth-slice';
import {selectToken} from '../../redux-toolkit/feature/authentication/auth-token-slice';
import {setToken} from '../../redux-toolkit/feature/authentication/auth-token-slice';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const [err, setErr] = useState('');

  const [login] = useLoginMutation();

  const navHandler = () => {
    navigation.navigate('employee');
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
      const response = await login(data);

      if (response.error?.data === 'Please enter correct name and password') {
        // console.log('error in LOGIN SCREEN: ', response);
        setErr('Please enter correct name and password');
      } else {
        // console.log('success in login: ', response.data.token);
        console.log('token: ', token);
        dispatch(setToken(response.data.token));
        console.log('token: ', token);
        navHandler();
      }
    } catch (error) {
      console.log('Error fetching donors: ', error);
    }
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
