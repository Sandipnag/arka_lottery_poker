/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
  StatusBar,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import pageBackground from '../../assects/images/dashboard/bg_dashboard.png';

const {width, height} = Dimensions.get('screen');

const Dashboard = (props) => {
  return (
    <>
      <ImageBackground
        source={pageBackground}
        style={styles.container}
        resizeMode="cover">
        <StatusBar barStyle="dark-content" hidden={true} />
        <Text style={styles.dashboard_text}>Dashboard</Text>

        <LinearGradient
          colors={['#e76c8f', '#c941c9']}
          style={styles.button_container}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <TouchableOpacity
            style={{}}
            onPress={() => props.navigation.navigate('Profile')}>
            <Text style={styles.inner_text}>Profile</Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          colors={['#2a6514', '#1ae120']}
          style={styles.button_container}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <TouchableOpacity
            style={{}}
            onPress={() => props.navigation.navigate('Result')}>
            <Text style={styles.inner_text}>My Account</Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          colors={['#0b3b85', '#29dc9b']}
          style={styles.button_container}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <TouchableOpacity
            style={{}}
            onPress={() => props.navigation.navigate('PurchaseDetails')}>
            <Text style={styles.inner_text}>Play Game</Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          colors={['#f5781b', '#f6482b']}
          style={styles.button_container}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <TouchableOpacity
            style={{}}
            onPress={() => props.navigation.navigate('ChooseCoin')}>
            <Text style={styles.inner_text}>Exit Game</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4889',
    justifyContent: 'center',
  },
  dashboard_text: {
    alignSelf: 'center',
    fontSize: (width - 48) * 0.09,
    paddingBottom: 30,
    color: '#206c0f',
    fontWeight: '700',
  },
  button_container: {
    width: '65%',
    height: height / 13,
    alignSelf: 'center',
    borderRadius: 30,
    marginBottom: height / 37,
    justifyContent: 'center',
  },
  inner_text: {
    alignSelf: 'center',
    fontSize: (width - 200) * 0.1,
    color: '#ffff',
  },
});

export default Dashboard;
