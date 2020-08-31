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
import pageBackground from '../../assects/images/profile/bg_profilescreen.png';
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('screen');

const Profile = (props) => {
  return (
    <>
      <ImageBackground
        source={pageBackground}
        // resizeMode="contain"
        style={styles.container}>
        {/* <StatusBar barStyle="dark-content" hidden={true} /> */}
        <Header headerText="Profile" />
        <View style={styles.image_container}>
          <Image
            source={{
              uri:
                'https://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png',
            }}
            resizeMode="contain"
            style={styles.image}
          />
        </View>

        <KeyboardAvoidingView enabled={true} keyboardVerticalOffset={100}>
          <ScrollView>
            <LinearGradient
              colors={['#3fe2d7', '#d357f6']}
              style={styles.input_container}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}>
              <LinearGradient
                colors={['#fdf14e', '#fddd00']}
                style={styles.input_inner_container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}>
                <TextInput
                  style={styles.input}
                  placeholder="NAME"
                  placeholderTextColor="#b8b330"
                />
              </LinearGradient>
            </LinearGradient>

            <LinearGradient
              colors={['#3fe2d7', '#d357f6']}
              style={styles.input_container}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}>
              <LinearGradient
                colors={['#fdf14e', '#fcdf01']}
                style={styles.input_inner_container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}>
                <TextInput
                  style={styles.input}
                  placeholder="CITY"
                  placeholderTextColor="#b8b330"
                />
              </LinearGradient>
            </LinearGradient>

            <LinearGradient
              colors={['#3fe2d7', '#d357f6']}
              style={styles.input_container}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}>
              <LinearGradient
                colors={['#fcf922', '#f8de01']}
                style={styles.input_inner_container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}>
                <TextInput
                  style={styles.input}
                  placeholder="EMAIL"
                  placeholderTextColor="#b8b330"
                />
              </LinearGradient>
            </LinearGradient>

            <LinearGradient
              colors={['#3fe2d7', '#d357f6']}
              style={styles.input_container}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}>
              <LinearGradient
                colors={['#f9f81b', '#f8e001']}
                style={styles.input_inner_container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}>
                <TextInput
                  style={styles.input}
                  placeholder="USER ID"
                  placeholderTextColor="#b8b330"
                />
              </LinearGradient>
            </LinearGradient>

            <LinearGradient
              colors={['#3fe2d7', '#d357f6']}
              style={styles.input_container}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}>
              <LinearGradient
                colors={['#f3f617', '#f5e400']}
                style={styles.input_inner_container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}>
                <TextInput
                  style={styles.input}
                  placeholder="PASSWORD"
                  placeholderTextColor="#b8b330"
                />
              </LinearGradient>
            </LinearGradient>
          </ScrollView>
        </KeyboardAvoidingView>

        <LinearGradient
          colors={['#f72b64', '#f13ce2']}
          style={styles.button_container}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}>
          <TouchableOpacity
            style={{}}
            onPress={() => props.navigation.navigate('Dashboard')}>
            <Text style={styles.sign_text}>Update</Text>
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
    // justifyContent: 'center',
  },
  image_container: {
    width: (width - 200) * 0.61,
    height: (height - 200) * 0.24,
    borderRadius: 70,
    alignSelf: 'center',
    marginBottom: (height - 200) * 0.03,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  input_container: {
    width: '65%',
    height: height / 13,
    // borderWidth: 2,
    alignSelf: 'center',
    borderRadius: (height - 200) * 0.1,
    borderColor: '#ffff',
    marginBottom: height / 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input_inner_container: {
    width: '99%',
    height: '94%',
    borderRadius: (height - 200) * 0.1,
    justifyContent: 'center',
    backgroundColor: '#F1C40F',
  },
  input: {
    color: '#b8b330',
    paddingHorizontal: 20,
    fontSize: (width - 200) * 0.07,
  },
  button_container: {
    width: '45%',
    height: height / 13,
    alignSelf: 'center',
    borderRadius: 30,
    marginBottom: height / 37,
    justifyContent: 'center',
    marginTop: (height - 200) * 0.023,
  },
  sign_text: {
    alignSelf: 'center',
    fontSize: (width - 200) * 0.1,
    color: '#ffff',
  },
});

export default Profile;
