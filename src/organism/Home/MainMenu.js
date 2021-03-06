import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import MenuItem from '../../components/MenuItem';
import {colors} from '../../constants/colors';

const MainMenu = ({data}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={5}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({item}) => {
          return <MenuItem data={item} />;
        }}
      />
    </View>
  );
};

export default MainMenu;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.white,
  },
});
