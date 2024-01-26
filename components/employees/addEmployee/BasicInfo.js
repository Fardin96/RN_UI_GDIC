import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {Input, Button} from '@rneui/themed';

const BasicInfo = ({navigation}) => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const dobRef = useRef(null);
  const phoneRef = useRef(null);
  const genderRef = useRef(null);

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.root.containerStyle}>
      <View style={styles.form}>
        <Input
          ref={firstNameRef}
          onChangeText={e => (firstNameRef.current.value = e)}
          //   defaultValue={`${name}`}
          placeholder={'First Name'}
        />
        <Input
          ref={lastNameRef}
          onChangeText={e => (lastNameRef.current.value = e)}
          //   defaultValue={`${name}`}
          placeholder={'Last Name'}
        />
        <Input
          ref={dobRef}
          onChangeText={e => (dobRef.current.value = e)}
          //   defaultValue={`${name}`}
          placeholder={'Date of Birth'}
        />
        <Input
          ref={phoneRef}
          onChangeText={e => (phoneRef.current.value = e)}
          //   defaultValue={`${name}`}
          placeholder={'Phone'}
        />
        <Input
          ref={genderRef}
          onChangeText={e => (genderRef.current.value = e)}
          //   defaultValue={`${name}`}
          placeholder={'Gender'}
        />

        {/* <Button
          title={'Add Employee'}
          loading={false}
          loadingProps={{size: 'small', color: 'white'}}
          buttonStyle={styles.btn.buttonStyle}
          titleStyle={styles.btn.titleStyle}
          containerStyle={styles.btn.containerStyle}
          //   onPress={onSubmit}
        /> */}

        {/* {err ? (
          <Text style={styles.err}>Too many attempts! Try again later.</Text>
        ) : (
          <Text />
        )} */}
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
