import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CardStream = ({data, size, hasDesc, ratio}) => {
  return (
    <View
      style={[
        styles.container,
        {width: Dimensions.get('screen').width / size + 16},
      ]}>
      <Image
        source={{uri: data.image}}
        style={[styles.image, {aspectRatio: ratio}]}
      />
      {hasDesc && (
        <>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.desc}>
            <MaterialCommunityIcons name="calendar" size={16} color="#555" />
            <Text style={styles.subtitle}>{data.date}</Text>
          </View>
          <View style={styles.desc}>
            <MaterialCommunityIcons name="clock" size={16} color="#555" />
            <Text style={styles.subtitle}>{data.time}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default CardStream;

const styles = StyleSheet.create({
  container: {
    margin: 4,
  },
  image: {
    borderRadius: 4,
    flex: 1,
    marginBottom: 8,
  },
  desc: {
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 13,
    color: '#555',
  },
});
