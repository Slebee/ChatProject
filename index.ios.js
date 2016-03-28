/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MainScreen from './components/MainScreen.js'
class ChatProject extends Component {
  render() {
    return (
          <MainScreen></MainScreen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});

AppRegistry.registerComponent('ChatProject', () => ChatProject);
