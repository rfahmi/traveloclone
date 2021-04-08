import React, {useEffect} from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import {colors} from '../constants/colors';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('App'), 600);
  }, [navigation]);

  return (
    <>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* <Logo /> */}
        <View
          style={{
            position: 'absolute',
            bottom: 16,
            left: 0,
            right: 0,
            alignItems: 'center',
          }}>
          <Text style={{color: colors.gray, fontSize: 12}}>Versi Test</Text>
          <Text style={{color: colors.gray, fontSize: 12}}>
            {'\u00A9'} PT. Harnic Online Store
          </Text>
        </View>
      </View>
    </>
  );
};

export default Splash;
