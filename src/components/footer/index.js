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
  ImageBackground,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import backgroundImage from '../../assects/images/dashboard_background.png';
import two from '../../assects/images/footer/2.png';
import five from '../../assects/images/footer/5.png';
import ten from '../../assects/images/footer/10.png';
import fifty from '../../assects/images/footer/50.png';
import hundred from '../../assects/images/footer/100.png';
import fiveHundred from '../../assects/images/footer/500.png';

const {width, height} = Dimensions.get('screen');

const Footer = (props) => {
  return (
    <React.Fragment>
      <View style={styles.header_container}>
        <TouchableOpacity style={{justifyContent: 'center'}}>
          <Image
            source={two}
            resizeMode="cover"
            style={styles.backgroundImage_container}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent: 'center'}}>
          <Image
            source={five}
            resizeMode="cover"
            style={styles.backgroundImage_container}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent: 'center'}}>
          <Image
            source={ten}
            resizeMode="cover"
            style={styles.backgroundImage_container}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent: 'center'}}>
          <Image
            source={fifty}
            resizeMode="cover"
            style={styles.backgroundImage_container}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent: 'center'}}>
          <Image
            source={hundred}
            resizeMode="cover"
            style={styles.backgroundImage_container}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent: 'center'}}>
          <Image
            source={fiveHundred}
            resizeMode="cover"
            style={styles.backgroundImage_container}
          />
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  header_container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: (width - 200) * 0.06,
    backgroundColor: '#5a0f09',
    height: (height - 200) * 0.12,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
  },
  backgroundImage_container: {
    width: (width - 200) * 0.25,
    height: (height - 200) * 0.095,
    borderRadius: (width - 200) * 0.3,
    backgroundColor: '#879584',
    alignSelf: 'center',
    alignItems: 'center',
    marginHorizontal: (width - 200) * 0.03,
    justifyContent: 'center',
  },
  imageBackground_style: {
    width: (width - 200) * 0.25,
    height: (height - 200) * 0.095,
    borderRadius: (width - 200) * 3,
  },
  point_text: {
    // paddingLeft: (width - 200) * 0.06,
    fontSize: (width - 200) * 0.1,
    color: '#fff',
  },
});

export default Footer;
