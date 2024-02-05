/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from '@rneui/themed';
import {useDispatch} from 'react-redux';

import Card from '../components/employees/Card';

import {useGetEmpQuery} from '../redux-toolkit/feature/employee-info/employee-api-slice';
import {setEmpInfo} from '../redux-toolkit/feature/employee-info/emp-info-slice';
import {resetToken} from '../redux-toolkit/feature/authentication/auth-token-slice';

const Employee = ({navigation, route}) => {
  const {id, name, age, salary, newEmployee} = route.params || {};

  const [employees, setEmployees] = useState([]);

  const {data, isError, error, isLoading} = useGetEmpQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        if (isError) {
          console.log('Error fetching employees list: ', error);
        } else if (!isLoading && data.status === 'success') {
          setEmployees(data.data);
          dispatch(setEmpInfo(data.data));
          // console.log('Seccess fetching employees list: ', data.data);
        }
      } catch (err) {
        console.log('T/C Error fetching employee list: ', err);
      }
    })();
  }, [data, error, isError, isLoading]);

  useEffect(() => {
    if (newEmployee) {
      // console.log('fresher: ', newEmployee);
      setEmployees(prevEmployees => [...prevEmployees, newEmployee]);
    }
  }, [newEmployee]);

  const logoutHandler = () => {
    navigation.navigate('login');
    dispatch(resetToken);
  };

  return (
    <View style={styles.root}>
      <View style={styles.topContainer}>
        <Button
          title={'Add New Employee'}
          loading={false}
          loadingProps={{size: 'small', color: 'white'}}
          buttonStyle={styles.btn.buttonStyle}
          titleStyle={styles.btn.titleStyle}
          containerStyle={styles.btn.containerStyle}
          onPress={() => navigation.navigate('addEmployee')}
        />

        <TouchableOpacity style={styles.icContainer} onPress={logoutHandler}>
          <Icon name="exit-outline" size={30} color="#900" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {isLoading ||
        typeof employees === 'undefined' ||
        employees.length === 0 ? (
          <View style={styles.loadingContainer}>
            <Text style={styles.loading}>Loading...</Text>
          </View>
        ) : (
          employees.map((i, idx) => {
            return (
              <Card
                key={idx}
                name={i.id === id ? name : i.employee_name}
                id={i.id}
                age={i.id === id ? age : i.employee_age}
                salary={i.id === id ? salary : i.employee_salary}
                navigation={navigation}
              />
            );
          })
        )}
      </ScrollView>
    </View>
  );
};

export default Employee;

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: 'white'},
  topContainer: {
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 10,
    paddingHorizontal: 15,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  icContainer: {
    // borderWidth: 1,
    // borderColor: 'green',
  },
  loadingContainer: {
    height: 800,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'black',
  },
  loading: {color: 'black'},
  scrollView: {
    // borderWidth: 2,
    // borderColor: 'blue',
  },
  btn: {
    buttonStyle: {backgroundColor: 'green'},
    titleStyle: {fontWeight: 'bold', fontSize: 23},
    containerStyle: {
      // marginHorizontal: 50,
      height: 50,
      width: '80%',
      marginVertical: 10,
      // marginTop: 80,
    },
  },
});
