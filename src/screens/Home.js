import React, {useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';
import Header from '../components/Header';
import NoticeBar from '../components/NoticeBar';
import {colors} from '../constants/colors';
import BalanceInfo from '../organism/Home/BalanceInfo';
import HomeSection from '../organism/Home/HomeSection';
import MainMenu from '../organism/Home/MainMenu';
import MainMenuFloating from '../organism/Home/MainMenuFloating';
import MainMenuSlide from '../organism/Home/MainMenuSlide';

const Home = () => {
  const refList = useRef(null);
  const floatingMenuPosition = 50;
  const minimumPosition = 300;
  const scroll = useRef(new Animated.Value(0)).current;
  const scrollDC = Animated.diffClamp(scroll, 0, floatingMenuPosition);
  const translateY = scrollDC.interpolate({
    inputRange: [0, floatingMenuPosition],
    outputRange: [0, -floatingMenuPosition],
  });
  const opacity = scrollDC.interpolate({
    inputRange: [0, floatingMenuPosition],
    outputRange: [1, 0],
  });
  const menus = require('../dummy/menus.json');
  const sections = require('../dummy/sections.json');

  const _renderPanel = ({item, index}) => {
    return <HomeSection data={item} />;
  };

  const _renderTop = () => {
    return (
      <>
        <BalanceInfo />
        <MainMenu data={menus.main} />
        <MainMenuSlide data={menus.secondary} />
        <NoticeBar
          message="Beberapa fitur tidak berfungsi sepenuhnya karena layanan lokasi tidak
        aktif."
          button="Buka Pengaturan"
        />
      </>
    );
  };

  return (
    <>
      <Header />
      <MainMenuFloating
        data={menus.main}
        opacity={opacity}
        translateY={translateY}
      />
      <Animated.FlatList
        ref={refList}
        style={styles.container}
        onScroll={e =>
          e.nativeEvent.contentOffset.y > minimumPosition
            ? scroll.setValue(e.nativeEvent.contentOffset.y)
            : scroll.setValue(floatingMenuPosition * 9)
        }
        scrollEventThrottle={16}
        data={sections}
        ListHeaderComponent={_renderTop}
        renderItem={_renderPanel}
        nestedScrollEnabled
        onEndThreshold={0.5}
      />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
});
