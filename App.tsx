import React from 'react';

import {store} from '@myapp/store';

import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as ReduxProvider} from 'react-redux';

import {PreferencesContext} from '@myapp/Context';
import {CombinedDarkTheme, CombinedDefaultTheme} from '@myapp/themes';

import Navigator from '@myapp/navigation';

const App = () => {
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  const theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <ReduxProvider store={store}>
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            <Navigator />
          </NavigationContainer>
        </PaperProvider>
      </ReduxProvider>
    </PreferencesContext.Provider>
  );
};

export default App;
