import React from 'react';

import {View, StyleSheet, Text} from 'react-native';
import {useTheme, Switch, Title, Subheading, Button} from 'react-native-paper';
import {PreferencesContext} from '@myapp/Context';

import {useAppDispatch} from '@myapp/hooks/redux.hook';
import {authActions} from '@myapp/features/auth/auth.slice';

interface ISettings {
  scene: any;
}

const SettingsScreen: React.FC<ISettings> = () => {
  const theme = useTheme();
  const {toggleTheme, isThemeDark} = React.useContext(PreferencesContext);

  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Title>Settings</Title>

      <View style={styles.body}>
        <Subheading>Dark theme</Subheading>
        <Switch
          color={theme.colors.primary}
          value={isThemeDark}
          onValueChange={toggleTheme}
        />
      </View>

      <Button
        mode="contained"
        style={styles.button}
        onPress={() => dispatch(authActions.logout())}>
        <Text>Log out</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  body: {
    flexDirection: 'row',
  },

  button: {
    position: 'absolute',
    bottom: 20,
    width: '90%',
    height: 50,
    justifyContent: 'center',
  },
});

export default SettingsScreen;
