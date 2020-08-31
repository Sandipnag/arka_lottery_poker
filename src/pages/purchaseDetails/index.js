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
import pageBackground from '../../assects/images/purchaseDetails/bg_purchasedetail.png';
import fifty from '../../assects/images/purchaseDetails/50.png';
import diamond from '../../assects/images/purchaseDetails/diamond.png';
import heart from '../../assects/images/purchaseDetails/heart.png';
import JClub from '../../assects/images/purchaseDetails/JClub.png';
import JDiamond from '../../assects/images/purchaseDetails/JDiamond.png';
import JHeart from '../../assects/images/purchaseDetails/JHeart.png';
import JSpade from '../../assects/images/purchaseDetails/JSpade.png';
import k_heart from '../../assects/images/purchaseDetails/k_heart.png';
import k_spade from '../../assects/images/purchaseDetails/k_spade.png';
import KClub from '../../assects/images/purchaseDetails/KClub.png';
import KDiamond from '../../assects/images/purchaseDetails/KDiamond.png';
import QClub from '../../assects/images/purchaseDetails/QClub.png';
import QDiamond from '../../assects/images/purchaseDetails/QDiamond.png';
import QHeart from '../../assects/images/purchaseDetails/QHeart.png';
import QSpade from '../../assects/images/purchaseDetails/QSpade.png';
import spade from '../../assects/images/purchaseDetails/spade.png';
import club from '../../assects/images/purchaseDetails/club.png';
import All_Jacks from '../../assects/images/purchaseDetails/All_Jacks.png';
import All_Kings from '../../assects/images/purchaseDetails/All_Kings.png';
import All_Queens from '../../assects/images/purchaseDetails/All_Queens.png';

const {width, height} = Dimensions.get('screen');

const PurchaseDetails = (props) => {
  return (
    <>
      <ImageBackground
        source={pageBackground}
        // resizeMode="contain"
        style={styles.container}>
        {/* <StatusBar barStyle="dark-content" hidden={true} /> */}
        <Header headerText="" textInput timeLeft timeTextColor="#fcf421" />
        <Text style={styles.Title_text}>Purchase Details</Text>

        <View style={styles.point_header_container}>
          <Image
            source={fifty}
            // resizeMode= "cover"

            style={styles.backgroundImage_container}
          />

          <TouchableOpacity>
            <Image
              source={heart}
              resizeMode="contain"
              style={styles.Image_container}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={spade}
              resizeMode="contain"
              style={styles.Image_container}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={diamond}
              resizeMode="contain"
              style={styles.Image_container}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={club}
              resizeMode="contain"
              style={styles.Image_container}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.point_container}>
          <View style={styles.Image_container}>
            <Image
              source={All_Kings}
              resizeMode="contain"
              style={styles.Image_container_image}
            />
            <View style={styles.Image_container_text} />
          </View>

          <TouchableOpacity>
            <Image
              source={k_heart}
              resizeMode="contain"
              style={styles.Image_container}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={k_spade}
              resizeMode="contain"
              style={styles.Image_container}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={KDiamond}
              resizeMode="contain"
              style={styles.Image_container}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={KClub}
              resizeMode="contain"
              style={styles.Image_container}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.point_container}>
          <View style={styles.Image_container}>
            <Image
              source={All_Queens}
              resizeMode="contain"
              style={styles.Image_container_image}
            />
            <View style={styles.Image_container_text} />
          </View>

          <TouchableOpacity>
            <Image
              source={QHeart}
              resizeMode="contain"
              style={styles.Image_container}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={QSpade}
              resizeMode="contain"
              style={styles.Image_container}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={QDiamond}
              resizeMode="contain"
              style={styles.Image_container}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={QClub}
              resizeMode="contain"
              style={styles.Image_container}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.point_container}>
          <View style={styles.Image_container}>
            <Image
              source={All_Jacks}
              resizeMode="contain"
              style={styles.Image_container_image}
            />
            <View style={styles.Image_container_text} />
          </View>

          <TouchableOpacity>
            <Image
              source={JHeart}
              resizeMode="contain"
              style={styles.Image_container}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={JSpade}
              resizeMode="contain"
              style={styles.Image_container}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={JDiamond}
              resizeMode="contain"
              style={styles.Image_container}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={JClub}
              resizeMode="contain"
              style={styles.Image_container}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.total_wallet_container}>
          <Text style={styles.total_wallet_text}>Total</Text>
          <View style={styles.total_wallet_value_container}>
            <Text style={styles.total_wallet_value}>100</Text>
          </View>
          <Text style={styles.total_wallet_text}>Wallet Balance</Text>
          <View style={styles.total_wallet_value_container}>
            <Text style={styles.total_wallet_value}>100</Text>
          </View>
        </View>

        <View style={styles.confirm_print_container}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Dashboard')}>
            <LinearGradient
              colors={['#f38806', '#ede505']}
              style={styles.confirm_print_button}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text style={styles.confirm_print_text}>CONFIRM</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('Dashboard')}>
            <LinearGradient
              colors={['#ed0e1a', '#dd1663']}
              style={styles.confirm_print_button}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text style={styles.confirm_print_text}>PRINT TKT</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Title_text: {
    alignSelf: 'center',
    fontSize: (width - 200) * 0.1,
    color: '#eeea18',
    marginVertical: (height - 200) * 0.04,
  },
  point_header_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: (height - 200) * 0.017,
    paddingHorizontal: (width - 200) * 0.07,
  },
  point_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: (height - 200) * 0.035,
    paddingHorizontal: (width - 200) * 0.07,
  },
  backgroundImage_container: {
    width: width * .2,
    height: width * .2,
    borderRadius: (width * .2)/2,
    alignItems: 'center',
    marginHorizontal: (width - 200) * 0.03,
    justifyContent: 'center',
  },
  imageBackground_style: {
    width: (width - 200) * 0.35,
    height: (height - 200) * 0.14,
    borderRadius: (width - 200) * 3,
  },
  point_text: {
    fontSize: (width - 200) * 0.1,
    color: '#050200',
    alignSelf: 'center',
  },
  Image_container: {
    width: width *.2,
    height: width *.2,
    alignItems: 'center',
    marginHorizontal: (width - 200) * 0.03,
    justifyContent: 'center',
  },
  Image_container_image: {
    width: (width - 200) * 0.35,
    height: (height - 200) * 0.09,
    // borderRadius: (width - 200) * 0.4,
    // alignItems: 'center',
    // marginHorizontal: (width - 200) * 0.03,
    // justifyContent: 'center',
  },
  Image_container_text: {
    width: '85%',
    height: '35%',
    borderRadius: (height - 200) * 0.01,
    backgroundColor: '#e8d553',
  },
  total_wallet_container: {
    flexDirection: 'row',
    paddingHorizontal: (width - 200) * 0.08,
    marginBottom: (height - 200) * 0.035,
  },
  total_wallet_text: {
    fontSize: (width - 200) * 0.1,
    color: '#f3d71f',
  },
  total_wallet_value_container: {
    width: (width - 200) * 0.35,
    height: (height - 200) * 0.06,
    borderRadius: (height - 200) * 0.1,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: (width - 200) * 0.04,
  },
  total_wallet_value: {
    fontSize: (width - 200) * 0.09,
    color: '#050200',
  },
  confirm_print_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: (width - 200) * 0.04,
  },
  confirm_print_button: {
    width: (width - 200) * 0.85,
    height: (height - 200) * 0.1,
    borderRadius: (height - 200) * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirm_print_text: {
    color: '#ffff',
    fontSize: (width - 200) * 0.1,
  },
});

export default PurchaseDetails;
