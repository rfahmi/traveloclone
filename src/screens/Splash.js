import React, {useEffect} from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants/colors';
import {DotIndicator} from 'react-native-indicators';

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
        <Image
          source={require('../assets/icons/logo.png')}
          style={styles.logo}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 16,
            left: 0,
            right: 0,
            alignItems: 'center',
          }}>
          <DotIndicator style={styles.pulse} color={colors.primary} size={12} />
          <Text style={{color: colors.gray, fontSize: 12}}>
            Traveloka Clone
          </Text>
        </View>
      </View>
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
});
