import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


class GoogleMaps extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Maps Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
});


export default GoogleMaps