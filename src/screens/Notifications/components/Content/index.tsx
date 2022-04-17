import React from 'react';

import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';

interface ContentProps {
  data: string;
}

const NotificationContent: React.FC<ContentProps> = ({data}) => {
  const {width} = useWindowDimensions();

  return <RenderHtml contentWidth={width} source={{html: data}} />;
};

export default NotificationContent;
