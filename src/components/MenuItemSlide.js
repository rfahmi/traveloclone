import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MenuItem = ({data}) => {
  return (
    <View style={styles.container}>
      {data.isNew && (
        <View style={styles.new}>
          <Text style={styles.newLabel}>Baru</Text>
        </View>
      )}
      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons name="home" size={32} color="#53585B" />
      </TouchableOpacity>
      <Text style={styles.label}>{data.label}</Text>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    margin: 1,
  },
  button: {
    aspectRatio: 1 / 1,
    borderRadius: 100,
    padding: 4,
  },
  label: {
    color: '#53585B',
    flex: 1,
    padding: 4,
    fontSize: 10,
    marginTop: 2,
    textAlign: 'center',
  },
  new: {
    position: 'absolute',
    top: -2,
    right: 0,
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
