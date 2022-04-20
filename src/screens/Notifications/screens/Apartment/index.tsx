import React from 'react';

import {FlatList, View} from 'react-native';

import NotiItem from '@myapp/screens/Notifications/components/NotiItem';
import notiApi from '@myapp/features/notification/noti.api';
import {INotiGeneralData} from '@myapp/models/noti.model';

const ApartmentScreen = ({navigation}: any) => {
  const [items, setItems] = React.useState<INotiGeneralData[]>([]);

  const fetchNotiAPI = async () => {
    const response = await notiApi.getApartmentlNotiApi();
    setItems(response);
  };

  const renderItems = ({item}: any) => {
    return (
      <NotiItem
        name={item.name}
        countComment={item.countComment}
        countFollow={item.countFollow}
        navigate={() => navigation.navigate('Detail', item)}
        creationTime={item.creationTime}
      />
    );
  };

  React.useEffect(() => {
    fetchNotiAPI();
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={items}
        renderItem={renderItems}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={{flexGrow: 1}}
      />
    </View>
  );
};

export default ApartmentScreen;
