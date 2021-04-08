import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Banner from '../../components/Banner';
import SectionTitle from '../../components/SectionTitle';

const HomeSection = () => {
  return (
    <View style={styles.container}>
      <SectionTitle />
      <Banner />
      <FlatList
        data={Array.from(Array(4).keys())}
        numColumns={2}
        keyExtractor={(_, i) => 'banner' + i.toString()}
        renderItem={({item}) => <Banner />}
      />
    </View>
  );
};

export default HomeSection;

const styles = StyleSheet.create({
  container: {paddingHorizontal: 12},
});
