import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../constants/colors';
import Home from './home';
import Simpan from './simpan';

const Tab = createMaterialBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator
      headerMode="none"
      shifting={false}
      backBehavior="history"
      initialRouteName="Home"
      activeColor={colors.primary}
      inactiveColor={colors.gray}
      barStyle={{backgroundColor: '#fff'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Awal',
          tabBarIcon: ({color}) => (
            <Icon name="storefront" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Simpan"
        component={Simpan}
        options={{
          tabBarLabel: 'Simpan',
          tabBarIcon: ({color}) => (
            <Icon name="bookmark-multiple-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={Simpan}
        options={{
          tabBarLabel: 'Pesanan',
          tabBarIcon: ({color}) => (
            <Icon name="newspaper-variant-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Simpan}
        options={{
          tabBarLabel: 'Notifikasi',
          tabBarIcon: ({color}) => (
            <Icon name="bell-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Simpan}
        options={{
          tabBarLabel: 'Akun Saya',
          tabBarIcon: ({color}) => (
            <Icon name="account-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
