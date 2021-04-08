import React from 'react';
import {FlatList} from 'react-native';
import CardStream from './CardStream';

const StreamSlide = ({data}) => {
  return (
    <FlatList
      data={data.items}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToAlignment
      keyExtractor={(_, i) => 'stream' + i.toString()}
      renderItem={({item}) => <CardStream data={item} size={data.size} />}
    />
  );
};

export default StreamSlide;
