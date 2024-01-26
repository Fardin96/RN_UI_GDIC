import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {Input, Button} from '@rneui/themed';

const Skills = ({navigation}) => {
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const salaryRef = useRef(null);

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.root.containerStyle}>
      <View style={styles.form}>
        <Input
          ref={nameRef}
          onChangeText={e => (nameRef.current.value = e)}
          //   defaultValue={`${name}`}
          placeholder={'Skill Name'}
        />
        <Input
          ref={ageRef}
          onChangeText={e => (ageRef.current.value = e)}
          placeholder={'Experience in Years'}
          //   defaultValue={`${age}`}
        />
        <Input
          ref={salaryRef}
          onChangeText={e => (salaryRef.current.value = e)}
          placeholder={'Skill Level'}
          //   defaultValue={`${salary}`}
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

export default Skills;

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
    marginTop: 25,
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
