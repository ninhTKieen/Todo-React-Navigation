/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {View, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {Subheading, Title, Surface} from 'react-native-paper';

import ModalInput from './ModalInput';

import Icon from 'react-native-vector-icons/MaterialIcons';

import taskApi from '@myapp/features/todos/todo.api';

interface ITodoItem {
  item: any;
  deleteTask: (id: string) => void;
  completeTask: (id: string, isDone: boolean) => void;
  fetchTask: () => void;
}

const TodoItem: React.FC<ITodoItem> = ({
  item,
  deleteTask,
  completeTask,
  fetchTask,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  const editTask = async () => {
    await taskApi.editTask(item.id, title, description);
    fetchTask();
  };

  return (
    <Surface style={styles.container}>
      <View style={styles.leftItem}>
        <TouchableWithoutFeedback
          onPress={() => completeTask(item.id, item.isDone)}>
          <View
            style={[
              styles.square,
              {backgroundColor: item.isDone ? 'green' : 'transparent'},
            ]}>
            {item.isDone ? <Icon name="done" size={20} color="white" /> : null}
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => setShowMore(!showMore)}>
          <View style={styles.textCover}>
            <Title style={item.isDone ? {color: 'green'} : null}>
              {item.title}
            </Title>

            <Subheading
              numberOfLines={showMore ? 0 : 1}
              style={item.isDone ? {color: 'green'} : null}>
              {item.description}
            </Subheading>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.rightItem}>
        <TouchableWithoutFeedback onPress={() => setVisible(true)}>
          <Icon
            name="edit"
            color="dodgerblue"
            size={30}
            style={{marginLeft: 20}}
          />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => deleteTask(item.id)}>
          <Icon name="delete" color="red" size={30} style={{marginLeft: 20}} />
        </TouchableWithoutFeedback>
      </View>

      <ModalInput
        visible={visible}
        hideModal={() => setVisible(false)}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        handlePress={editTask}
      />
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  leftItem: {
    flex: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  square: {
    width: 25,
    height: 25,
    marginRight: 20,
    borderRadius: 5,
    opacity: 0.6,
    alignItems: 'center',
    borderColor: 'green',
    borderWidth: 2,
  },

  textCover: {
    flexDirection: 'column',
  },

  rightItem: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default TodoItem;
