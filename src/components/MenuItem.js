import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../constants/colors';

const MenuItem = ({data}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: data.bgColor || '#eee'}]}>
        {data.isNew && (
          <View style={styles.new}>
            <Text style={styles.newLabel}>Baru</Text>
          </View>
        )}
        <MaterialCommunityIcons
          name={data.icon || 'information-outline'}
          size={32}
          color={data.iconColor || colors.white}
        />
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
    marginBottom: 8,
  },
  button: {
    backgroundColor: colors.grayLight,
    aspectRatio: 1 / 1,
    borderRadius: 100,
    padding: 6,
  },
  label: {
    color: '#53585B',
    flex: 1,
    fontSize: 10,
    marginTop: 4,
    textAlign: 'center',
  },
  new: {
    position: 'absolute',
    top: -2,
    left: 6,
    right: 6,
    color: '#fff',
    justifyContent: 'center',
    backgroundColor: '#F9C41C',
    padding: 2,
    borderRadius: 6,
    zIndex: 2,
    borderWidth: 2,
    borderColor: '#fff',
  },
  newLabel: {
    fontSize: 10,
    color: '#784F00',
    textAlign: 'center',
  },
});
