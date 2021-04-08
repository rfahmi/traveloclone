import React from 'react';
import {FlatList} from 'react-native';
import Banner from './Banner';

const BannerGrid = ({data}) => {
  return (
    <FlatList
      data={data.items}
      numColumns={data.size}
      keyExtractor={(_, i) => 'banner' + i.toString()}
      renderItem={({item}) => <Banner image={item} />}
    />
  );
};

export default BannerGrid;
