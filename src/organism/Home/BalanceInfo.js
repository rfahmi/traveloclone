import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import CardSm from '../../components/CardSm';
import {colors} from '../../constants/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BalanceInfo = () => {
  return (
    <View style={styles.container}>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 12}}>
        <Avatar.Text size={38} style={styles.avatar} label="FR" />
        <Text style={styles.name}>Fahmi Rizalul</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CardSm icon="coins" label="0 Point" />
        <CardSm icon="wallet" label="Payment" />
        <CardSm icon="wallet" label="PayLater" />
      </View>
      <TouchableOpacity style={styles.scanbutton}>
        <MaterialCommunityIcons
          name="qrcode-scan"
          size={24}
          color={colors.primary}
        />
        <Text style={styles.scanlabel}>Pindai</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BalanceInfo;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingVertical: 8,
    paddingHorizontal: 12,
    zIndex: 1,
  },
  scanbutton: {
    position: 'absolute',
    right: 8,
    top: 8,
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: colors.white,
  },
  name: {
    fontSize: 16,
    color: colors.black,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  scanlabel: {
    fontSize: 12,
  },
});
