import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const Banner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://ik.imagekit.io/tvlk/image/imageResource/2021/03/31/1617180508956-05f349b0c164a9505e44665508884e3d.png?tr=q-75',
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
