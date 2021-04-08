import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../constants/colors';

const MenuItemFloat = ({data}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, {backgroundColor: '#fff'}]}>
        <MaterialCommunityIcons
          name={data.icon || 'information-outline'}
          size={24}
          color={data.bgColor || colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MenuItemFloat;

const styles = StyleSheet.create({
  container: {
    flex: 1 / 5,
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1 / 1,
    marginBottom: 8,
  },
  button: {
    backgroundColor: colors.grayLight,
    aspectRatio: 1 / 1,
    borderRadius: 100,
    padding: 6,
  },
});
