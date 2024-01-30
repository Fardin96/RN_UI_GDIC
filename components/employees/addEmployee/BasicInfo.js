import React, {useRef, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {Input, Button} from '@rneui/themed';

const BasicInfo = ({navigation, onChange, getBasicInfo}) => {
  const [err, setErr] = useState('');

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const dobRef = useRef(null);
  const phoneRef = useRef(null);
  const genderRef = useRef(null);

  const nameValid = name => {
    const regex = /^[a-z ,.'-]+$/i;

    if (regex.test(name)) {
      return true;
    } else {
      return false;
    }
  };

  const dateValid = date => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{2}$/i;

    if (regex.test(date)) {
      return true;
    } else {
      return false;
    }
  };

  const phoneValid = number => {
    const regex = /^\d+$/i;

    if (regex.test(number)) {
      return true;
    } else {
      return false;
    }
  };

  const validGender = gender => {
    const regex = /^(male|female)$/i;

    if (regex.test(gender)) {
      return true;
    } else {
      return false;
    }
  };

  const infoValidation = (firstName, lastName, dob, phone, gender) => {
    // console.log(nameValid(firstName));
    if (
      typeof firstName === 'undefined' ||
      firstName === '' ||
      !nameValid(firstName)
    ) {
      setErr('Please enter a valid first name');
      return false;
    }

    if (typeof lastName === 'undefined' || !nameValid(lastName)) {
      setErr('Please enter a valid last name');
      return false;
    }

    // todo:
    // date input
    if (typeof dob === 'undefined' || dob === '' || !dateValid(dob)) {
      setErr('Please enter a valid date');
      return false;
    }

    if (
      typeof phone === 'undefined' ||
      phone === '' ||
      phone.length > 11 ||
      phone.length < 11 ||
      !phoneValid(phone)
    ) {
      setErr('Please enter a phone number');
      return false;
    }

    if (
      typeof gender === 'undefined' ||
      gender === '' ||
      !validGender(gender)
    ) {
      setErr('Please enter a gender value');
      return false;
    }

    setErr('');
    return true;
    // console.log('err: ', err);
  };

  const onSubmit = e => {
    // validation
    if (
      infoValidation(
        firstNameRef.current.value,
        lastNameRef.current.value,
        dobRef.current.value,
        phoneRef.current.value,
        genderRef.current.value,
      )
    ) {
      // info valid -> next tab
      getBasicInfo(
        firstNameRef.current.value,
        lastNameRef.current.value,
        dobRef.current.value,
        phoneRef.current.value,
        genderRef.current.value,
      );
      onChange(e?._dispatchInstances.index + 1);
    }
  };

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.root.containerStyle}>
      <View style={styles.form}>
        <Input
          ref={firstNameRef}
          onChangeText={e => (firstNameRef.current.value = e)}
          placeholder={'First Name*'}
        />
        <Input
          ref={lastNameRef}
          onChangeText={e => (lastNameRef.current.value = e)}
          placeholder={'Last Name'}
        />
        <Input
          ref={dobRef}
          onChangeText={e => (dobRef.current.value = e)}
          placeholder={'Date of Birth* (dd.mm.yy)'}
        />
        <Input
          ref={phoneRef}
          onChangeText={e => (phoneRef.current.value = e)}
          placeholder={'Phone* (11 digits)'}
          maxLength={11}
        />
        <Input
          ref={genderRef}
          onChangeText={e => (genderRef.current.value = e)}
          placeholder={'Gender*'}
        />

        <View style={{width: '100%', padding: 20}}>
          <Text style={{color: 'red', fontStyle: 'italic', fontSize: 10}}>
            * = required fields
          </Text>
        </View>

        {err === '' ? <Text /> : <Text style={styles.err}>{err}</Text>}

        <Button
          title={'Next'}
          loading={false}
          loadingProps={{size: 'small', color: 'white'}}
          buttonStyle={styles.btn.buttonStyle}
          titleStyle={styles.btn.titleStyle}
          containerStyle={styles.btn.containerStyle}
          onPress={e => onSubmit(e)}
          // onPress={e => console.log(e)}
        />
      </View>
    </ScrollView>
  );
};

export default BasicInfo;

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
    marginTop: 25,
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
