import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {PulseIndicator} from 'react-native-indicators';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../constants/colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primaryDark}
      />
      <View style={styles.searchbar}>
        <MaterialCommunityIcons name="magnify" size={22} color={colors.gray} />
        <Text style={styles.searchlabel}>Cari item, destinasi, fitur...</Text>
        <PulseIndicator style={styles.pulse} color="#E26433" size={18} />
      </View>
      <TouchableOpacity style={styles.menu}>
        <MaterialCommunityIcons
          name="dots-vertical"
          size={22}
          color={colors.white}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menu}>
        <Ionicons name="chatbubbles-outline" size={22} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 12,
    zIndex: 1,
  },
  searchbar: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  searchlabel: {
    fontSize: 11,
    color: '#53585B',
    marginLeft: 8,
  },
  pulse: {
    position: 'absolute',
    right: 16,
  },
  menu: {
    zIndex: 1,
    padding: 8,
    aspectRatio: 1 / 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
