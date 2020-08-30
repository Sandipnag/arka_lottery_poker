/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
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
} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const {width, height} = Dimensions.get('screen');

const Header = (props) => {
  return (
    <React.Fragment>
      <View style={styles.header_container}>
        <View>
          <Ionicons
            style={{}}
            name="ios-menu"
            size={(width - 200) * 0.2}
            color="#fff"
          />
        </View>

        {props.headerText ? (
          <Text style={styles.header_text}>{props.headerText}</Text>
        ) : null}

        {props.textInput ? (
          <View style={styles.input_container}>
            <TextInput
              style={styles.input}
              placeholder="Game Id"
              placeholderTextColor="#fff"
            />
          </View>
        ) : null}

        {props.timeLeft ? (
          <View style={styles.timeLeft_container}>
            <Text style={styles.timeLeft_text}>Time left</Text>
            <Text style={[styles.time_text, {color: props.timeTextColor}]}>
              08:00
            </Text>
          </View>
        ) : null}
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  header_container: {
    flexDirection: 'row',
    marginTop: (height - 200) * 0.05,
    paddingHorizontal: (width - 200) * 0.06,
  },
  header_text: {
    paddingLeft: (width - 200) * 0.06,
    fontSize: (width - 200) * 0.1,
    marginTop: (height - 200) * 0.015,
    color: '#fff',
  },
  input_container: {
    width: '60%',
    height: height / 17,
    borderWidth: 2,
    alignSelf: 'center',
    borderRadius: 30,
    borderColor: '#ffff',
    marginLeft: (width - 200) * 0.04,
    // justifyContent: 'center',
  },
  input: {
    // marginTop:5,
    color: '#fff',
    paddingHorizontal: 15,
    fontSize: (width - 200) * 0.07,
    // borderWidth:1,
  },
  timeLeft_container: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: (width - 200) * 0.12,
  },
  timeLeft_text: {
    color: '#fff',
    fontSize: (width - 200) * 0.06,
    alignSelf: 'center',
  },
  time_text: {
    fontSize: (width - 200) * 0.1,
    alignSelf: 'center',
  },
});

export default Header;
