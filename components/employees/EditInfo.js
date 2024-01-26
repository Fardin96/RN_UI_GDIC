import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {Input, Button} from '@rneui/themed';

const EditInfo = ({navigation, route}) => {
  const {id, name, age, salary} = route.params;

  const [err, setErr] = useState(false);

  const nameRef = useRef(name);
  const ageRef = useRef(age);
  const salaryRef = useRef(salary);

  const onSubmit = async () => {
    try {
      const api = `https://dummy.restapiexample.com/api/v1/update/${id}`;

      const data = {
        name: nameRef.current.value,
        age: ageRef.current.value,
        salary: salaryRef.current.value,
      };
      console.log('the data is :', data);

      const res = await fetch(api, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const resData = await res.json();
      console.log('expecting a token: ', resData);

      if (resData.status === 'success') {
        navigation.navigate('employee', {
          id: id,
          name: resData.data.name,
          age: resData.data.age,
          salary: resData.data.salary,
        });
      } else if (resData.message === 'Too Many Attempts.') {
        setErr(prev => !prev);
      }
    } catch (error) {
      console.log('Error fetching donors: ', error);
    }
  };

  // todo:
  // - emp id styling
  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.root.containerStyle}>
      <View style={styles.topContainer}>
        <Text style={styles.titleTop}>EMPLOYEE ID:</Text>
        <Text style={styles.titleTop}>{id}</Text>

        <TouchableOpacity
          style={styles.icContainer}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="closecircleo" size={30} color="#900" />
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <Input
          ref={nameRef}
          onChangeText={e => (nameRef.current.value = e)}
          defaultValue={`${name}`}
          placeholder={`${name}`}
        />
        <Input
          ref={ageRef}
          onChangeText={e => (ageRef.current.value = e)}
          placeholder={`${age}`}
          defaultValue={`${age}`}
        />
        <Input
          ref={salaryRef}
          onChangeText={e => (salaryRef.current.value = e)}
          placeholder={`${salary}`}
          defaultValue={`${salary}`}
        />

        <Button
          title={'Update'}
          loading={false}
          loadingProps={{size: 'small', color: 'white'}}
          buttonStyle={styles.btn.buttonStyle}
          titleStyle={styles.btn.titleStyle}
          containerStyle={styles.btn.containerStyle}
          onPress={onSubmit}
        />

        {err ? (
          <Text style={styles.err}>Too many attempts! Try again later.</Text>
        ) : (
          <Text />
        )}
      </View>
    </ScrollView>
  );
};

export default EditInfo;

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
  form: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  titleTop: {color: 'black'},
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
