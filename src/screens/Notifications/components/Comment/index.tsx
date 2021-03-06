import React, {useEffect, useState} from 'react';

import {List, Avatar, Text} from 'react-native-paper';

import formatDistance from 'date-fns/formatDistance';

import notiApi from '@myapp/features/notification/noti.api';
import {IUserCommentData} from '@myapp/models/noti.model';

interface NotiCommentProps {
  noticationId: number;
}

const NotificationComments: React.FC<NotiCommentProps> = ({noticationId}) => {
  const [comments, setComments] = useState<IUserCommentData[]>([]);
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);

  useEffect(() => {
    notiApi.getUserComment(noticationId).then(data => setComments(data));

    return;
  }, [noticationId]);

  const TimeDistance: React.FC<{creationTime: string}> = ({creationTime}) => (
    <Text>
      {formatDistance(new Date(creationTime), new Date(), {
        addSuffix: true,
        includeSeconds: true,
      })}
    </Text>
  );

  const UserAvatar = ({avatar}: {avatar: string}) => {
    return (
      <Avatar.Image
        size={40}
        source={avatar ? {uri: avatar} : require('@myapp/assets/avatar.webp')}
      />
    );
  };

  return (
    <>
      <List.Accordion
        title="Show comment"
        expanded={expanded}
        onPress={handlePress}>
        {comments.map(item => (
          <List.Item
            key={item.id}
            left={props => <UserAvatar {...props} avatar={item.avatar} />}
            right={props => (
              <TimeDistance {...props} creationTime={item.creationTime} />
            )}
            title={item.fullName}
            description={item.comment}
            descriptionNumberOfLines={0}
          />
        ))}
      </List.Accordion>
    </>
  );
};

export default NotificationComments;
