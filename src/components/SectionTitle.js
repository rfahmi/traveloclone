import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SectionTitle = ({data}) => {
  console.log('asdsada', data);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.content1}</Text>
      <Text style={styles.subtitle}>{data.content2}</Text>
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
    color: '#3A3A3A',
  },
  subtitle: {
    fontSize: 14,
    color: '#53585B',
  },
});
