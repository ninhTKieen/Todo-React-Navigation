import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '@myapp/screens/Auth/LoginScreen';
import BottomTabs from './BottomTabs';

import {useAppDispatch} from '@myapp/hooks/redux.hook';
import {authActions} from '@myapp/features/auth/auth.slice';
import useCheckAuth from '@myapp/hooks/auth.hook';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const {isLoggedIn} = useCheckAuth();

  const dispatch = useAppDispatch();

  const {currentUser} = useCheckAuth();

  React.useEffect(() => {
    const fetchGetMe = () => {
      !currentUser && dispatch(authActions.getUserInfo());
    };

    return fetchGetMe();
  }, [currentUser, dispatch]);

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
