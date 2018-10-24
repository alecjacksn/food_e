import React, { Component } from 'react';
import SettingsPage from './components/SettingsPage'
import HomeScreen from './components/HomeScreen'
import GoogleMaps from './components/GoogleMaps/GoogleMaps'
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsPage
  },
  Maps: {
    screen: GoogleMaps
  }
});



export default class App extends Component {
  render() {
    return (      
        <RootStack />      
    );
  }
}

