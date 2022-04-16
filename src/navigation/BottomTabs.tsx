import React from 'react';

import {useTheme} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '@myapp/screens/Home';
import ProfileScreen from '@myapp/screens/Profile';
import SettingsScreen from '@myapp/screens/Settings';
import TodosScreen from '@myapp/screens/Todos';
import NotiScreen from '@myapp/screens/Notifications';
import TabIcon from '@myapp/components/TabsIcon';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon name="home-outline" focused={focused} label="Home" />
          ),
        }}
      />
      <Tab.Screen
        name="Todos"
        component={TodosScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon name="reader-outline" focused={focused} label="Todos" />
          ),
        }}
      />
      <Tab.Screen
        name="Noti"
        component={NotiScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              name="ios-notifications-outline"
              focused={focused}
              label="Noti"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              name="md-person-circle-outline"
              focused={focused}
              label="Profile"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              name="md-settings-outline"
              focused={focused}
              label="Settings"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
