import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {Input, Button, TabView} from '@rneui/themed';
import {Tab} from '@rneui/themed';

import BasicInfo from './addEmployee/BasicInfo';
import Skills from './addEmployee/Skills';
import Preview from './addEmployee/Preview';

const AddEmployee = ({navigation}) => {
  const [index, setIndex] = useState(0);

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
          <BasicInfo />
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <Skills />
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <Preview />
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
