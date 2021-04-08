import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Simpan from '../../../../screens/Simpan';
const Stack = createStackNavigator();

const SimpanStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Simpan"
        component={Simpan}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SimpanStack;
