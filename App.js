/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';

import Register from './components/authentication/Register';
import Login from './components/authentication/Login';
import Employee from './screens/Employee';
import EditInfo from './components/employees/EditInfo';
import AddEmployee from './components/employees/AddEmployee';
import {store} from './redux-toolkit/store/store';

import {API_URL} from '@env';

const Stack = createNativeStackNavigator();

console.log('+-------------SERVER------------------+');
console.log('URI: ', API_URL);
// console.log('PORT', port);
console.log('+-------------------------------------+');

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          initialRouteName="registration"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="registration" component={Register} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="employee" component={Employee} />
          <Stack.Screen name="editInfo" component={EditInfo} />
          <Stack.Screen name="addEmployee" component={AddEmployee} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>

    // <Employee />

    // <EditInfo />
  );
}

export default App;
