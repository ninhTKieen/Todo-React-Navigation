import React from 'react';

import {StyleSheet, Dimensions} from 'react-native';
import {Surface, Text, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

interface TabIconProps {
  name: string;
  focused: boolean;
  label: string;
}

const WINDOWS = Dimensions.get('screen');

const TabIcon: React.FC<TabIconProps> = ({name, focused, label}) => {
  const theme = useTheme();
  const [curWidth, setCurWidth] = React.useState(WINDOWS.width);

  React.useEffect(() => {
    Dimensions.addEventListener('change', e => {
      const {width} = e.window;
      setCurWidth(width);
    });
  }, []);

  return (
    <React.Fragment>
      <Surface style={[styles.container, {width: curWidth / 4}]}>
        <Icon
          name={name}
          size={30}
          color={focused ? theme.colors.primary : theme.colors.text}
        />
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <Text
          style={{color: focused ? theme.colors.primary : theme.colors.text}}>
          {label}
        </Text>
      </Surface>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabIcon;
