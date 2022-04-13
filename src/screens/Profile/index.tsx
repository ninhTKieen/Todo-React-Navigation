import React from 'react';

import {StyleSheet} from 'react-native';
import {Surface, Text, Avatar, Title, Subheading} from 'react-native-paper';

import useCheckAuth from '@myapp/hooks/auth.hook';

const ProfileScreen: React.FC = () => {
  const {currentUser} = useCheckAuth();

  return (
    <Surface>
      <Surface style={styles.container}>
        <Surface style={styles.info}>
          <Avatar.Image
            size={90}
            source={require('@myapp/assets/Avatar.jpg')}
            style={styles.avatar}
          />
          <Surface>
            <Title>{currentUser.fullName}</Title>
            <Subheading>@{currentUser.userName}</Subheading>
            <Text>{currentUser.dateOfBirth}</Text>
          </Surface>
        </Surface>

        <Surface>
          <Subheading style={styles.quote}>
            Yesterday is history, tomorrow is a mystery, but today is the gift
          </Subheading>
        </Surface>
      </Surface>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  info: {
    flexDirection: 'row',
  },

  avatar: {
    marginRight: 20,
    marginLeft: 20,
  },

  quote: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
});

export default ProfileScreen;
