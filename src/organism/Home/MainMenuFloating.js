import React from 'react';
import {Animated, FlatList, StyleSheet} from 'react-native';
import MenuItemFloat from '../../components/MenuItemFloat';
import {colors} from '../../constants/colors';

const MainMenuFloating = ({data, translateY, opacity}) => {
  return (
    <Animated.View
      style={[styles.container, {opacity, transform: [{translateY}]}]}>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(_, i) => i.toString()}
        renderItem={({item}) => {
          return <MenuItemFloat data={item} />;
        }}
      />
    </Animated.View>
  );
};

export default MainMenuFloating;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    elevation: 5,
    zIndex: 3,
    borderRadius: 8,
    backgroundColor: colors.white,
  },
});
