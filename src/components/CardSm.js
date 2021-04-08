import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CardSm = ({label, icon}) => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name={icon} size={16} color={colors.primary} />
      <Text style={styles.label}>{label}</Text>
      <MaterialIcons name="arrow-right" size={16} color={colors.primary} />
    </View>
  );
};

export default CardSm;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 6,
    marginRight: 8,
  },
  label: {
    color: colors.grayDark,
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 8,
  },
});
