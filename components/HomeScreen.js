import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { connect } from 'react-redux'

class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.welcome}>home</Text>
          <Button
            title="Go to Settings"
            onPress={() => this.props.navigation.navigate('Settings')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(HomeScreen)