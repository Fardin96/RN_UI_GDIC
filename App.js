/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import Authentication from './screens/Authentication';

// console.log('+-------------SERVER------------------+');
// console.log('MONGODB_URI ', uri);
// console.log('PORT', port);
// console.log('+-------------------------------------+');

function App() {
  return (
    <View style={styles.root}>
      {/* <Text style={{color: 'black'}}>hello, gdic</Text> */}
      <Authentication />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default App;
