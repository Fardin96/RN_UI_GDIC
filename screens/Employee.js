import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from '@rneui/themed';
import {Text} from 'react-native';
import Card from '../components/employees/Card';
import {useGetEmpQuery} from '../redux-toolkit/feature/employee-api-slice';

const Employee = ({navigation, route}) => {
  const {id, name, age, salary, newEmployee} = route.params || {};

  const [employees, setEmployees] = useState([]);

  const {data, isError, error, isLoading} = useGetEmpQuery();

  useEffect(() => {
    (async () => {
      try {
        // todo:
        // - create api url @ .env
        if (isError) {
          console.log('Error fetching employees list: ', error);
        } else if (data.status === 'success') {
          setEmployees(data.data);
          // console.log('Seccess fetching employees list: ', data.data);
        }
      } catch (err) {
        console.log('T/C Error fetching employee list: ', err);
      }
    })();
  }, [data, error, isError]);

  useEffect(() => {
    if (newEmployee) {
      // console.log('fresher: ', newEmployee);
      setEmployees(prevEmployees => [...prevEmployees, newEmployee]);
    }
  }, [newEmployee]);

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

        <TouchableOpacity
          style={styles.icContainer}
          onPress={() => {
            navigation.navigate('login');
          }}>
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
    // marginRight: 20,
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
