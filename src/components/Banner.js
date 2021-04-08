import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const Banner = ({image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    aspectRatio: 2 / 1,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: 'white',
    margin: 4,
  },
  image: {flex: 1, borderRadius: 4},
});
