/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {
  Surface,
  Divider,
  Headline,
  Button,
  useTheme,
  Subheading,
} from 'react-native-paper';

import {format} from 'date-fns';

interface INotiItem {
  name: string;
  countComment: number;
  countFollow: number;
  navigate: () => void;
  creationTime: string;
}

const NotiItem: React.FC<INotiItem> = ({
  name,
  countComment,
  countFollow,
  navigate,
  creationTime,
}) => {
  const theme = useTheme();

  return (
    <TouchableWithoutFeedback onPress={navigate}>
      <Surface style={styles.container}>
        <Surface>
          <Surface style={styles.title}>
            <Headline
              numberOfLines={1}
              style={{color: theme.colors.primary, fontSize: 20}}>
              {name}
            </Headline>

            <Subheading>
              {format(new Date(creationTime), 'K:m aaa - MMM, dd yyyy')}
            </Subheading>
          </Surface>

          <Divider style={styles.divider} />

          <Surface style={styles.reactions}>
            <Button icon="comment-outline" mode="text" color="green">
              {countComment}
            </Button>

            <Button icon="thumb-up" mode="text" color="dodgerblue">
              {countFollow}
            </Button>
          </Surface>
        </Surface>
      </Surface>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    padding: 10,
    flexDirection: 'column',
  },

  title: {
    width: '95%',
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  divider: {
    backgroundColor: 'black',
  },

  reactions: {
    marginTop: 10,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
});

export default NotiItem;
