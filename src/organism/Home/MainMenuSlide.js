import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import MenuItemSlide from '../../components/MenuItemSlide';
import {colors} from '../../constants/colors';

const MainMenuSlide = () => {
  const data = require('../../dummy/menus.json');
  return (
    <View style={styles.container}>
      <FlatList
        data={data.main}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({item}) => {
          return <MenuItemSlide data={item} />;
        }}
      />
    </View>
  );
};

export default MainMenuSlide;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.white,
  },
});
