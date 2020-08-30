import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/appNavigation';
import login from './src/pages/login';
// import Registration from './Src/containers/Registration';
// import Login from './Src/containers/Login';
// import SplashScreen from './Src/containers/SplashScreen';
// import Map from './Src/containers/map';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    // <View>
    //   <Text>helo</Text>
    // </View>
  );
};

export default App;
