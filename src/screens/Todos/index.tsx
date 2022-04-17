import React, {useState, useEffect} from 'react';

import {
  Image,
  StyleSheet,
  FlatList,
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import {Appbar, FAB, useTheme} from 'react-native-paper';

import TodoItem from '@myapp/components/Todos/TodoItem';
import ModalInput from '@myapp/components/Todos/ModalInput';

import taskApi from '@myapp/features/todos/todo.api';

const TodosScreen: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [taskItems, setTaskItems] = useState<any>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const theme = useTheme();

  const fetchTodoAPI = async () => {
    const apiResponse = await taskApi.getApi();
    setTaskItems(apiResponse);
  };

  const addTodoAPI = async () => {
    Keyboard.dismiss();
    if (title !== '') {
      await taskApi.addNewTask(title, description);
      fetchTodoAPI();
      setTitle('');
      setDescription('');
    }
  };

  const deleteTodoAPI = async (id: string) => {
    await taskApi.deleteTaskApi(id);
    fetchTodoAPI();
  };

  const completeTodoAPI = async (id: string, isDone: boolean) => {
    await taskApi.completeTask(id, isDone);
    fetchTodoAPI();
  };

  useEffect(() => {
    fetchTodoAPI();
  }, []);

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <Appbar.Header
        theme={{
          colors: {
            primary: theme?.colors.surface,
          },
        }}>
        <Image
          source={require('@myapp/assets/todoIcon.png')}
          style={{width: 40, height: 40}}
        />
        <Appbar.Content title="Today's task" />
      </Appbar.Header>

      <FlatList
        data={taskItems}
        renderItem={({item}) => (
          <TodoItem
            item={item}
            deleteTask={deleteTodoAPI}
            completeTask={completeTodoAPI}
            fetchTask={fetchTodoAPI}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={{flexGrow: 1}}
      />

      <FAB style={styles.fab} icon="plus" onPress={() => setVisible(true)} />
      <ModalInput
        visible={visible}
        hideModal={() => setVisible(false)}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        handlePress={addTodoAPI}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  title: {
    fontSize: 32,
  },

  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default TodosScreen;
