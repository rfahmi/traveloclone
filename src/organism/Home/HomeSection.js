import React, {lazy, memo, Suspense} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Skeleton} from 'react-native-animated-skeleton';
import StreamSlide from '../../components/StreamSlide';

const SectionTitle = lazy(() => import('../../components/SectionTitle'));
const Banner = lazy(() => import('../../components/Banner'));
const BannerGrid = lazy(() => import('../../components/BannerGrid'));

const HomeSection = ({data}) => {
  const {components, backgroundColor} = data;
  return (
    <View style={[styles.container, backgroundColor]}>
      <Suspense
        fallback={
          <Skeleton
            loaderStyle={{
              flex: 1,
              height: 200,
              backgroundColor: '#ddd',
            }}
            numberOfItems={1}
          />
        }>
        {components.map((c, index) => (
          <>
            {c.type === 'title' ? (
              <SectionTitle data={c} />
            ) : c.type === 'banner' ? (
              <Banner data={c} />
            ) : c.type === 'banner_grid' ? (
              <BannerGrid data={c} />
            ) : c.type === 'stream_slide' ? (
              <StreamSlide data={c} />
            ) : (
              <Text>asdas</Text>
            )}
          </>
        ))}
      </Suspense>
    </View>
  );
};

export default memo(HomeSection);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});
