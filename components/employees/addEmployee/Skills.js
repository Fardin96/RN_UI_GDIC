import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {Input, Button} from '@rneui/themed';
import {Text} from 'react-native';

const Skills = ({navigation, onChange, getSkillInfo}) => {
  const [err, setErr] = useState('');

  const skillRef = useRef(null);
  const expRef = useRef(null);
  const lvlRef = useRef(null);

  const skillValid = skill => {
    const regex = /^[a-z ,.'-]+$/i;

    if (regex.test(skill)) {
      return true;
    } else {
      return false;
    }
  };

  const expValid = exp => {
    const regex = /^\d{1,2}$/i;

    if (regex.test(exp)) {
      return true;
    } else {
      return false;
    }
  };

  const lvlValid = lvl => {
    const regex = /^(beginner|intermediate|advanced)$/i;

    if (regex.test(lvl)) {
      return true;
    } else {
      return false;
    }
  };

  const infoValidation = (skill, exp, lvl) => {
    // console.log(nameValid(firstName));
    if (typeof skill === 'undefined' || skill === '' || !skillValid(skill)) {
      setErr('Please enter a valid skill name');
      return false;
    }

    if (typeof exp === 'undefined' || exp === '' || !expValid(exp)) {
      setErr('Please enter a valid number for experience');
      return false;
    }

    if (typeof lvl === 'undefined' || lvl === '' || !lvlValid(lvl)) {
      setErr('Please enter a experience level');
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
        skillRef.current.value,
        expRef.current.value,
        lvlRef.current.value,
      )
    ) {
      getSkillInfo(
        skillRef.current.value,
        expRef.current.value,
        lvlRef.current.value,
      );
      // info valid -> next tab
      onChange(e?._dispatchInstances.index + 2);
    }
  };

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.root.containerStyle}>
      <View style={styles.form}>
        <Input
          ref={skillRef}
          onChangeText={e => (skillRef.current.value = e)}
          placeholder={'Skill Name*'}
        />
        <Input
          ref={expRef}
          onChangeText={e => (expRef.current.value = e)}
          placeholder={'Experience in Years*'}
        />
        <Input
          ref={lvlRef}
          onChangeText={e => (lvlRef.current.value = e)}
          placeholder={'Skill Level*  (beginner|intermediate|advanced)'}
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
        />
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
