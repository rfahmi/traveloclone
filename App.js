import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import RootStack from './src/configs/navigation';
import {colors} from './src/constants/colors';
import {enableScreens} from 'react-native-screens';
enableScreens();

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.primary,
    },
  };
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
