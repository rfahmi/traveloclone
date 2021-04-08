import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import MenuItemSlide from '../../components/MenuItemSlide';
import {colors} from '../../constants/colors';

const MainMenuSlide = () => {
  const data = require('../../dummy/menus.json');
  return (
    <View style={styles.container}>
      <FlatList
        data={data.secondary}
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
    backgroundColor: colors.white,
  },
});
