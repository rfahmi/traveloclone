import React from 'react';
import {ScrollView} from 'react-native';
import Header from '../components/Header';
import NoticeBar from '../components/NoticeBar';
import BalanceInfo from '../organism/Home/BalanceInfo';
import HomeSection from '../organism/Home/HomeSection';
import MainMenu from '../organism/Home/MainMenu';
import MainMenuSlide from '../organism/Home/MainMenuSlide';

const Home = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <BalanceInfo />
        <MainMenu />
        <MainMenuSlide />
        <NoticeBar
          message="Beberapa fitur tidak berfungsi sepenuhnya karena layanan lokasi tidak
        aktif."
          button="Buka Pengaturan"
        />
        <HomeSection />
      </ScrollView>
    </>
  );
};

export default Home;
