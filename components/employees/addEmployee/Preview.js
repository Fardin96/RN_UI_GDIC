import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Button} from '@rneui/themed';

import {useCreateEmpMutation} from '../../../redux-toolkit/feature/employee-api-slice';

const Preview = ({navigation, newEmpData}) => {
  const [err, setErr] = useState('');

  const [createEmp] = useCreateEmpMutation();

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
      const name = newEmpData.firstName + ' ' + newEmpData.lastName;
      const data = {
        name: name,
        salary: 50000,
        age: 25,
      };
      // console.log('the data is :', data);

      const response = await createEmp(data);

      if (response.data.error) {
        console.log('Error creating a new employee: ', response.data.error);
      } else if (response.data.status === 'success') {
        // get new emp data -> employess screen
        // console.log('Success creating a new employee: ', response.data.data);
        navHandler(
          response.data.data.id,
          response.data.data.name,
          response.data.data.age,
          response.data.data.salary,
        );
      } else if (response.data.message === 'Too Many Attempts.') {
        setErr(response.data.message);
        console.log('Response creating new employee: ', response.data.message);
      }
    } catch (error) {
      console.log('T/C Error creating new employee: ', error);
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.details}>
        <Text style={styles.font}>First Name: {newEmpData.firstName}</Text>
        <Text style={styles.font}>Last Name: {newEmpData.lastName}</Text>
        <Text style={styles.font}>Date of Birth: {newEmpData.dob}</Text>
        <Text style={styles.font}>Contact : {newEmpData.phone}</Text>
        <Text style={styles.font}>Gender : {newEmpData.gender}</Text>
        <Text style={styles.font}>Skills : {newEmpData.skill}</Text>
        <Text style={styles.font}>Experience: {newEmpData.exp} Years</Text>
        <Text style={styles.font}>Experience Level: {newEmpData.lvl}</Text>
      </View>

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
  root: {
    flex: 1,
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  details: {
    width: '100%',
    marginVertical: 15,
    paddingHorizontal: 15,
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  font: {color: 'black', fontSize: 25},
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
