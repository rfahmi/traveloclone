import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SectionTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Traveloka Jam Terbang</Text>
      <Text style={styles.subtitle}>
        Dapatkan banyak diskonan dan gratis setiap jam 7 - 9 malam WIB!
      </Text>
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 8,
    marginTop: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
  },
});
