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
import pageBackground from '../../assects/images/login/bg_login.png';

const {width, height} = Dimensions.get('screen');

const Login = (props) => {
  const signin = () => props.navigation.navigate('Dashboard');
  const signup = () => {};
  return (
    <>
      <ImageBackground
        source={pageBackground}
        // resizeMode="contain"
        style={styles.container}>
        <StatusBar barStyle="dark-content" hidden={true} />
        <Text style={styles.login_text}>log in</Text>
        <KeyboardAvoidingView>
          <View style={styles.input_container}>
            <TextInput
              style={styles.input}
              placeholder="login id"
              placeholderTextColor="#fff"
            />
          </View>

          <View style={styles.input_container}>
            <TextInput
              style={styles.input}
              placeholder="password"
              placeholderTextColor="#fff"
            />
          </View>
        </KeyboardAvoidingView>

        <LinearGradient
          colors={['#84cc22', '#28b685']}
          style={styles.button_container}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <TouchableOpacity style={{}} onPress={signin}>
            <Text style={styles.sign_text}>SIGN IN</Text>
          </TouchableOpacity>
        </LinearGradient>

        <Text style={styles.account_text}>Don't have Account ?</Text>

        <LinearGradient
          colors={['#2e6fb1', '#1bcfd4']}
          style={styles.button_container}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <TouchableOpacity style={{}} onPress={signup}>
            <Text style={styles.sign_text}>SIGN UP</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#4889',
    justifyContent: 'center',
  },
  login_text: {
    alignSelf: 'center',
    fontSize: (width - 48) * 0.1,
    paddingBottom: 30,
    color: '#2a6bb0',
    fontWeight: '700',
  },
  input_container: {
    width: '65%',
    height: height / 13,
    borderWidth: 2,
    alignSelf: 'center',
    borderRadius: 30,
    borderColor: '#ffff',
    marginBottom: height / 37,
    justifyContent: 'center',
  },
  input: {
    color: '#fff',
    paddingHorizontal: 20,
    fontSize: (width - 48) * 0.05,
  },
  button_container: {
    width: '65%',
    height: height / 13,
    alignSelf: 'center',
    borderRadius: 30,
    marginBottom: height / 37,
    justifyContent: 'center',
  },
  sign_text: {
    alignSelf: 'center',
    fontSize: (width - 200) * 0.1,
    color: '#ffff',
  },
  account_text: {
    marginTop: height / 80,
    marginBottom: 4,
    textAlign: 'center',
    fontSize: (width - 200) * 0.06,
    color: '#848582',
  },
});

export default Login;
