import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


export default class SettingsPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Settings Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
