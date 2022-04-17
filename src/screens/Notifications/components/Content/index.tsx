import React from 'react';

import {useWindowDimensions} from 'react-native';
import {useTheme} from 'react-native-paper';

import RenderHtml from 'react-native-render-html';

interface ContentProps {
  data: string;
}

const NotificationContent: React.FC<ContentProps> = ({data}) => {
  const {width} = useWindowDimensions();
  const theme = useTheme();

  const tagsStyles: any = {
    body: {
      whiteSpace: 'normal',
      color: theme.colors.text,
      fontSize: 16,
    },
    a: {
      color: theme.colors.primary,
    },
  };

  return (
    <RenderHtml
      contentWidth={width}
      source={{html: data}}
      tagsStyles={tagsStyles}
    />
  );
};

export default NotificationContent;
