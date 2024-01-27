import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import {Button} from '@rneui/themed';

const Preview = ({navigation, newEmpData}) => {
  const [err, setErr] = useState('');

  // console.log(newEmpData);
  const navHandler = (id, name, age, salary) => {
    navigation.navigate('employee', {
      newEmployee: {
        id: id,
        employee_name: name,
        employee_age: age,
        employee_salary: salary,
      },
    });
  };

  const onSubmit = async () => {
    try {
      const api = 'https://dummy.restapiexample.com/api/v1/create';

      const name = newEmpData.firstName + ' ' + newEmpData.lastName;
      const data = {
        name: name,
        salary: 50000,
        age: 25,
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
      // console.log('expecting a new employee: ', resData);

      // todo:
      // test api -> error cases
      if (resData === '') {
        // console.log('error in employee creation response: ', resData);
        // setErr('Please enter valid name and password');
      } else if (resData.message === 'Too Many Attempts.') {
        setErr('Please try again!');
      } else if (resData.status === 'success') {
        navHandler(
          resData.data.id,
          resData.data.name,
          resData.data.age,
          resData.data.salary,
        );
      }
    } catch (error) {
      console.log('Error creating new employee: ', error);
    }
  };

  // todo: styling
  return (
    <View>
      <Text style={{color: 'black'}}>First Name: {newEmpData.firstName}</Text>
      <Text style={{color: 'black'}}>Last Name: {newEmpData.lastName}</Text>
      <Text style={{color: 'black'}}>Date of Birth: {newEmpData.dob}</Text>
      <Text style={{color: 'black'}}>Contact : {newEmpData.phone}</Text>
      <Text style={{color: 'black'}}>Gender : {newEmpData.gender}</Text>
      <Text style={{color: 'black'}}>Skills : {newEmpData.skill}</Text>
      <Text style={{color: 'black'}}>Experience: {newEmpData.exp} Years</Text>
      <Text style={{color: 'black'}}>Experience Level: {newEmpData.lvl}</Text>

      {err === '' ? <Text /> : <Text style={styles.err}>{err}</Text>}

      <Button
        title={'Add new employee'}
        loading={false}
        loadingProps={{size: 'small', color: 'white'}}
        buttonStyle={styles.btn.buttonStyle}
        titleStyle={styles.btn.titleStyle}
        containerStyle={styles.btn.containerStyle}
        onPress={onSubmit}
      />
    </View>
  );
};

export default Preview;

const styles = StyleSheet.create({
  btn: {
    buttonStyle: {backgroundColor: 'green'},
    titleStyle: {fontWeight: 'bold', fontSize: 23},
    containerStyle: {
      marginHorizontal: 50,
      height: 50,
      width: 200,
      marginVertical: 10,
      marginTop: 80,
    },
  },
  err: {color: 'red'},
});
