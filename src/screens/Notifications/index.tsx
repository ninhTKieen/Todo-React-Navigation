import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Surface, Text} from 'react-native-paper';

import GeneralScreen from './screens/General';
import ApartmentScreen from './screens/Apartment';
import DetailNotiScreen from './screens/Detail';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const GeneralNotiStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="General" component={GeneralScreen} />
      <Stack.Screen name="Detail" component={DetailNotiScreen} />
    </Stack.Navigator>
  );
};

const ApartmentNotiStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Apartment" component={ApartmentScreen} />
      <Stack.Screen name="Detail" component={DetailNotiScreen} />
    </Stack.Navigator>
  );
};

const NotiScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="General-Stack"
        component={GeneralNotiStack}
        options={{tabBarLabel: 'General'}}
      />

      <Tab.Screen
        name="Apartment-Stack"
        component={ApartmentNotiStack}
        options={{tabBarLabel: 'Apartment'}}
      />
    </Tab.Navigator>
  );
};

export default NotiScreen;
