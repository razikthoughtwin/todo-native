import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function Home({navigation}) {
  const {widht, height} = Dimensions.get('window');

  const renderWelcomeText = () => {
    return (
      <>
        <View>
          <Image
            source={require('../assets/1.png')}
            style={{width: 150, height: 150}}
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../assets/2.png')} />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 20,
          }}>
          <Text style={{fontWeight: '900', color: 'black'}}>
            Gets things with TODs
          </Text>
          <View style={{width: wp(60), paddingTop: 20}}>
            <Text style={{fontSize: hp(2.5), color: 'black'}}>
              Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod.
              Consequat urna quam felis interdum quisque. Malesuada adipiscing
              tristique ut eget sed.
            </Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View>
        {renderWelcomeText()}
        <View style={{alignItems: 'center', padding: '3%'}}>
          <TouchableOpacity
            style={{
              width: '90%',
              backgroundColor: '#50C2C9',
              padding: 10,
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate('Onboard')}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '700',
                color: '#FFFFFF',
              }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;
