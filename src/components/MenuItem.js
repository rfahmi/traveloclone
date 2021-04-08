import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../constants/colors';

const MenuItem = ({data}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons name="home" size={32} color={colors.primary} />
      </TouchableOpacity>
      <Text style={styles.label}>{data.label}</Text>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    flex: 1 / 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    aspectRatio: 1 / 1,
    marginBottom: 8,
  },
  button: {
    backgroundColor: colors.grayLight,
    aspectRatio: 1 / 1,
    borderRadius: 100,
    padding: 4,
  },
  label: {
    flex: 1,
    fontSize: 10,
    marginTop: 2,
    textAlign: 'center',
  },
});