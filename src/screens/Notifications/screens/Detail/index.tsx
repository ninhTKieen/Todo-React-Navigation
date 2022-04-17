import React from 'react';
import {View, Image, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {Text, Title} from 'react-native-paper';
import NotificationContent from '@myapp/screens/Notifications/components/Content';
import NotificationComments from '@myapp/screens/Notifications/components/Comment';

const WIDTH = Dimensions.get('window').width;

const DetailNotiScreen = ({route}: any) => {
  const item = route.params;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Title>{item.name}</Title>
        <NotificationContent data={item.data} />
      </View>

      {item.fileUrl ? (
        <Image source={{uri: item.fileUrl}} style={styles.image} />
      ) : null}
      <NotificationComments noticationId={item.id} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    width: '100%',
    padding: 10,
  },

  image: {
    width: WIDTH,
    height: 200,
    marginTop: 20,
  },
});

export default DetailNotiScreen;
