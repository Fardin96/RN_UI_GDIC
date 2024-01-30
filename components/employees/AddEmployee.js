import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import {TabView, Tab} from '@rneui/themed';

import BasicInfo from './addEmployee/BasicInfo';
import Skills from './addEmployee/Skills';
import Preview from './addEmployee/Preview';

const AddEmployee = ({navigation}) => {
  const [index, setIndex] = useState(0);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [skill, setSkill] = useState('');
  const [exp, setExp] = useState('');
  const [lvl, setLvl] = useState('');

  const getBasicInfo = (
    newfirstName,
    newlastName,
    newdob,
    newphone,
    newgender,
  ) => {
    setFirstName(newfirstName);
    setLastName(newlastName);
    setDob(newdob);
    setPhone(newphone);
    setGender(newgender);
  };

  const getSkillInfo = (newSkill, newExp, newLvl) => {
    setSkill(newSkill);
    setExp(newExp);
    setLvl(newLvl);
  };

  const newEmpData = {
    firstName: firstName,
    lastName: lastName,
    dob: dob,
    phone: phone,
    gender: gender,
    skill: skill,
    exp: exp,
    lvl: lvl,
  };

  return (
    <>
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.icContainer}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="closecircleo" size={30} color="#900" />
        </TouchableOpacity>
      </View>

      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'green',
          height: 3,
        }}
        variant="default">
        <Tab.Item title="Basic Info" titleStyle={{fontSize: 14}} />
        <Tab.Item title="Skills" titleStyle={{fontSize: 14}} />
        <Tab.Item title="Preview" titleStyle={{fontSize: 14}} />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <BasicInfo onChange={setIndex} getBasicInfo={getBasicInfo} />
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <Skills onChange={setIndex} getSkillInfo={getSkillInfo} />
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <Preview navigation={navigation} newEmpData={newEmpData} />
        </TabView.Item>
      </TabView>
    </>
  );
};

export default AddEmployee;

const styles = StyleSheet.create({
  topContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    // marginRight: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
    // borderWidth: 1,
    // borderColor: 'red',
  },
});
