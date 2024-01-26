import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const Card = ({name, id, age, salary, navigation}) => {
  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <View style={styles.name}>
          <Text style={styles.mainText}>{`${name}`}</Text>
          <Text style={styles.details}>{`Employee id: ${id}`}</Text>
          <Text style={styles.details}>{`Age: ${age}`}</Text>
          <Text style={styles.details}>{`Salary: ${salary}`}</Text>
        </View>

        {/* pass the id value from here */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('editInfo', {
              id,
              name,
              age,
              salary,
            });
          }}>
          <Icon name="edit" size={30} color="#900" />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '93%',
    borderWidth: 2.5,
    borderColor: 'green',
    borderRadius: 10,
    padding: 12,
    margin: 12,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  name: {
    // borderWidth: 1, borderColor: 'black'
  },
  mainText: {
    color: 'black',
    // fontFamily: CustomFont.robotoBold,
    fontSize: 25,
    marginVertical: 10,
  },
  details: {color: 'black'},
  bottomContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'green',
  },
});

export default Card;
