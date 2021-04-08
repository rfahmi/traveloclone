import React, {useRef} from 'react';
import {StyleSheet, ScrollView, Animated, RefreshControl} from 'react-native';
import Header from '../components/Header';
import NoticeBar from '../components/NoticeBar';
import {colors} from '../constants/colors';
import BalanceInfo from '../organism/Home/BalanceInfo';
import HomeSection from '../organism/Home/HomeSection';
import MainMenu from '../organism/Home/MainMenu';
import MainMenuSlide from '../organism/Home/MainMenuSlide';
import {useScrollToTop} from '@react-navigation/native';

const Home = () => {
  const refList = useRef(null);
  const scroll = useRef(new Animated.Value(0)).current;
  useScrollToTop(refList);
  const sections = require('../dummy/sections.json');

  const _renderPanel = ({item, index}) => {
    return <HomeSection data={item} />;
  };

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <BalanceInfo />
        <MainMenu />
        <MainMenuSlide />
        <NoticeBar
          message="Beberapa fitur tidak berfungsi sepenuhnya karena layanan lokasi tidak
        aktif."
          button="Buka Pengaturan"
        />

        <Animated.FlatList
          ref={refList}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scroll}}}],
            {useNativeDriver: true},
          )}
          scrollEventThrottle={16}
          data={sections}
          renderItem={_renderPanel}
          nestedScrollEnabled
          onEndThreshold={0.5}
        />
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
});
