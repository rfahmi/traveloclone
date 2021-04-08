import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../constants/colors';

const NoticeBar = ({message, button}) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="map-marker-off" size={18} color="yellow" />

      <View style={styles.messageContainer}>
        <Text style={styles.message}>{message}</Text>
      </View>
      <View>
        <Button
          mode="text"
          uppercase={false}
          labelStyle={{
            fontSize: 12,
            color: colors.grayDark,
          }}>
          {button}
          <MaterialIcons
            name="keyboard-arrow-right"
            size={12}
            color={colors.grayDark}
          />
        </Button>
      </View>
    </View>
  );
};

export default NoticeBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.noteBg,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderLeftWidth: 4,
    borderLeftColor: colors.noteBorder,
  },
  messageContainer: {flex: 1, marginLeft: 8},
  buttonContainer: {},
  message: {fontSize: 12, color: colors.noteText},
});
