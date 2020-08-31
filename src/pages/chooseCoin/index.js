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
  Image,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/header';
import two from '../../assects/images/chooseCoin/2.png';
import five from '../../assects/images/chooseCoin/5.png';
import ten from '../../assects/images/chooseCoin/10.png';
import fifty from '../../assects/images/chooseCoin/50.png';
import hundred from '../../assects/images/chooseCoin/100.png';
import fiveHundred from '../../assects/images/chooseCoin/500.png';
import pageBackground from '../../assects/images/chooseCoin/bg_choosecoin.png';

const {width, height} = Dimensions.get('screen');

const ChooseCoin = (props) => {
  return (
    <>
      <ImageBackground
        source={pageBackground}
        // resizeMode="contain"
        style={styles.container}>
        {/* <StatusBar barStyle="dark-content" hidden={true} /> */}
        <Header headerText="" textInput timeLeft timeTextColor="#fc1a02" />
        <Text style={styles.Title_text}>Choose Coin</Text>

        <View style={styles.point_container}>
          <TouchableOpacity
            style={{}}
            onPress={() => props.navigation.navigate('Dashboard')}>
            <Image
              source={two}
              resizeMode="cover"
              style={styles.backgroundImage_container}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('Dashboard')}>
            <Image
              source={five}
              resizeMode="cover"
              style={styles.backgroundImage_container}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.point_container}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Dashboard')}>
            <Image
              source={ten}
              resizeMode="cover"
              style={styles.backgroundImage_container}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('Dashboard')}>
            <Image
              source={fifty}
              resizeMode="cover"
              style={styles.backgroundImage_container}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.point_container}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Dashboard')}>
            <Image
              source={hundred}
              resizeMode="cover"
              style={styles.backgroundImage_container}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('Dashboard')}>
            <Image
              source={fiveHundred}
              resizeMode="cover"
              style={styles.backgroundImage_container}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Title_text: {
    alignSelf: 'center',
    fontSize: (width - 200) * 0.15,
    color: '#1459a7',
    marginVertical: (height - 200) * 0.04,
    fontWeight: '600',
  },
  point_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: (height - 200) * 0.06,
  },
  backgroundImage_container: {
    // width: (width - 200) * 0.65,
    // height: (height - 200) * 0.26,
    width:width * .3,
    height: width * .3,
    borderRadius: (width * .3) /2,
    backgroundColor: '#879584',
    alignItems: 'center',
    marginHorizontal: (width - 200) * 0.03,
    justifyContent: 'center',
  },
  imageBackground_style: {
    width: (width - 200) * 0.646,
    height: (height - 200) * 0.26,
    borderRadius: (width - 200) * 3,
  },
  point_text: {
    fontSize: (width - 200) * 0.2,
    color: '#050200',
    alignSelf: 'center',
  },
});

export default ChooseCoin;
