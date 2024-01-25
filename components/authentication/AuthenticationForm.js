import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';

import {Input, Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

const AuthenticationForm = ({errorMessage, title, btnTitle}) => {
  const [hidden, setHidden] = useState(true);

  const nameRef = useRef(null);
  const passwordRef = useRef(null);

  const eyePressHandler = () => {
    setHidden(prev => !prev);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Perform registration logic here
    const name = nameRef.current.value;
    const password = passwordRef.current.value;

    // console.log(name);
    // console.log(password);

    // Reset input fields
    // nameRef.current.value = '';
    // passwordRef.current.value = '';

    // Additional registration logic
  };

  return (
    <ScrollView
      style={styles.root.style}
      contentContainerStyle={styles.root.containerStyle}>
      <Text style={styles.titleTop}>{title}</Text>

      <View style={styles.form}>
        <Input
          ref={nameRef}
          onChangeText={e => (nameRef.current.value = e)}
          // onSubmitEditing={() => console.log(nameRef.current.value)}
          placeholder="Enter Name"
          errorStyle={styles.error}
          errorMessage={errorMessage ? errorMessage : ''}
        />
        <Input
          ref={passwordRef}
          onChangeText={e => (passwordRef.current.value = e)}
          secureTextEntry={hidden}
          rightIcon={
            hidden ? (
              <TouchableOpacity onPress={eyePressHandler}>
                <Icon name="eye-slash" size={30} color="green" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={eyePressHandler}>
                <Icon name="eye" size={30} color="#900" />
              </TouchableOpacity>
            )
          }
          // onSubmitEditing={() => console.log(passwordRef.current.value)}
          placeholder="Enter Password"
          errorStyle={styles.error}
          errorMessage={errorMessage ? errorMessage : ''}
        />

        <Button
          title={btnTitle}
          loading={false}
          loadingProps={{size: 'small', color: 'white'}}
          buttonStyle={styles.btn.buttonStyle}
          titleStyle={styles.btn.titleStyle}
          containerStyle={styles.btn.containerStyle}
          onPress={handleSubmit}
        />
      </View>

      {title === 'Registration' ? (
        <View style={styles.bottom}>
          <Text style={styles.titleBottom}>Already registered?</Text>
          <TouchableOpacity>
            <Text style={styles.touchtitleBottom}> Login</Text>
          </TouchableOpacity>
          <Text style={styles.titleBottom}> here!</Text>
        </View>
      ) : (
        <></>
      )}
    </ScrollView>
  );
};

export default AuthenticationForm;

const styles = StyleSheet.create({
  root: {
    style: {width: '100%'},
    containerStyle: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1,
      // borderColor: 'blue',
    },
  },
  form: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  titleTop: {
    // width: '100%',
    // alignItems: 'center',
    marginVertical: 100,
    fontSize: 50,
    color: 'green',
    // backgroundColor: 'green',
  },
  bottom: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    // marginTop: 100,
    marginVertical: 115,
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  titleBottom: {color: 'black'},
  touchtitleBottom: {fontSize: 15, fontWeight: 'bold', color: 'green'},
  error: {color: 'red'},
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
});
