import React from 'react';

import {StyleSheet, Image, ScrollView} from 'react-native';
import {Surface, Title, Subheading, Text} from 'react-native-paper';

import {useAppDispatch} from '@myapp/hooks/redux.hook';
import {authActions} from '@myapp/features/auth/auth.slice';
import useCheckAuth from '@myapp/hooks/auth.hook';
import {View} from 'react-native';

const ProfileScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  const {currentUser} = useCheckAuth();

  React.useEffect(() => {
    const fetchGetMe = () => {
      !currentUser && dispatch(authActions.getUserInfo());
    };

    return fetchGetMe();
  }, [currentUser, dispatch]);

  return (
    <ScrollView>
      <Surface style={styles.container}>
        <Surface>
          <Image
            source={require('@myapp/assets/background.jpeg')}
            style={styles.background}
          />
        </Surface>
      </Surface>

      <View style={{alignItems: 'center'}}>
        <Image
          source={require('@myapp/assets/avatar.webp')}
          style={styles.avatar}
        />
        <Title>{currentUser?.fullName}</Title>
        <Subheading>@{currentUser?.userName}</Subheading>
      </View>

      <View style={styles.itemContainer}>
        <Text>Surname</Text>
        <Text>{currentUser?.surname}</Text>
      </View>

      <View style={styles.itemContainer}>
        <Text>Email</Text>
        <Text>{currentUser?.userName}@gmail.com</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    width: '100%',
    padding: 10,
    height: 150,
    backgroundColor: 'black',
  },

  avatar: {
    width: 140,
    height: 140,
    borderRadius: 100,
    marginTop: -60,
  },

  quote: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  },

  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 16,
  },
});

export default ProfileScreen;
