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
import Footer from '../../components/footer';
import pageBackground from '../../assects/images/result/bg_result.png';

const {width, height} = Dimensions.get('screen');

const Result = (props) => {
  return (
    <>
      <ImageBackground
        source={pageBackground}
        // resizeMode="cover"
        style={styles.container}>
        {/* <StatusBar barStyle="dark-content" hidden={true} /> */}
        <Header headerText="Result" />

        <LinearGradient
          colors={['#d65ee4', '#09ddf5']}
          style={styles.result_gradient_box}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <View style={styles.result_body_container}>
            <View style={styles.result_box}>
              <View style={styles.result_box_key_section}>
                <Text style={styles.result_key_text}>Game ID :</Text>
                <Text style={styles.result_key_text}>Won :</Text>
              </View>

              <View style={styles.result_box_value_section}>
                <Text style={styles.result_value_text}> 123434</Text>
                <Text style={styles.result_value_text}> 8</Text>
              </View>
            </View>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={['#ac1eb0', '#29286a']}
          style={styles.button_container}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <TouchableOpacity
            style={{}}
            onPress={() => props.navigation.navigate('Dashboard')}>
            <Text style={styles.sign_text}>Play New Game</Text>
          </TouchableOpacity>
        </LinearGradient>

        <Footer />
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#4889',
  },
  result_gradient_box: {
    width: '85%',
    height: (height - 200) * 0.4,
    alignSelf: 'center',
    borderRadius: (width - 200) * 0.2,
    justifyContent: 'center',
    marginTop: (height - 200) * 0.27,
  },
  result_body_container: {
    justifyContent: 'center',
    backgroundColor: '#570f03',
    borderRadius: (width - 200) * 0.17,
    height: '93%',
    width: '95%',
    alignSelf: 'center',
  },
  result_box: {
    flexDirection: 'row',
  },
  result_box_key_section: {
    width: '50%',
  },
  result_key_text: {
    alignSelf: 'flex-end',
    fontSize: (width - 200) * 0.12,
    color: '#ffff',
  },
  result_box_value_section: {
    width: '50%',
  },
  result_value_text: {
    alignSelf: 'flex-start',
    fontSize: (width - 200) * 0.12,
    color: '#ffff',
  },
  button_container: {
    width: '80%',
    height: height / 10,
    alignSelf: 'center',
    borderRadius: (height - 200) * 0.08,
    marginBottom: height / 37,
    justifyContent: 'center',
    marginTop: (height - 200) * 0.05,
  },
  sign_text: {
    alignSelf: 'center',
    fontSize: (width - 200) * 0.1,
    color: '#ffff',
  },
});

export default Result;
