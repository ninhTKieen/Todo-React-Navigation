import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '@myapp/screens/Auth/LoginScreen';
import BottomTabs from './BottomTabs';

import useCheckAuth from '@myapp/hooks/auth.hook';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const {isLoggedIn} = useCheckAuth();
  return (
    <Stack.Navigator>
      {!isLoggedIn ? (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name="Bottom Tabs"
          component={BottomTabs}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};

export default Navigator;
