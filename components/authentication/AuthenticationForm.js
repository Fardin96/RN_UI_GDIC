import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from '@rneui/themed';

const AuthenticationForm = ({
  errorMessage,
  title,
  btnTitle,
  onSubmit,
  navHandler,
}) => {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);

  const [hidden, setHidden] = useState(true);
  const eyePressHandler = () => {
    setHidden(prev => !prev);
  };

  const handleSubmit = () => {
    const name = nameRef.current.value;
    const password = passwordRef.current.value;

    const data = {
      name: name,
      password: password,
    };

    onSubmit(data);
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
          <TouchableOpacity onPress={navHandler}>
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
    marginVertical: 100,
    fontSize: 50,
    color: 'green',
    // backgroundColor: 'green',
  },
  bottom: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
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
