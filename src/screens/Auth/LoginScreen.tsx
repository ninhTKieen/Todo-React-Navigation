import React from 'react';

import {
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import {Surface, Title, Button, TextInput} from 'react-native-paper';

import {useAppDispatch, useAppSelector} from '@myapp/hooks/redux.hook';
import {
  authActions,
  selectIsPendingLoggedIn,
} from '@myapp/features/auth/auth.slice';

const LoginScreen: React.FC = ({navigation}: any) => {
  const [visible, setVisible] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const isPendingLoggedIn = useAppSelector(selectIsPendingLoggedIn);

  const dispatch = useAppDispatch();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Surface style={styles.inner}>
            <Image
              source={require('@myapp/assets/todoIcon.png')}
              style={styles.image}
            />

            <Title style={styles.title}>Login</Title>

            <TextInput
              label="Email"
              right={<TextInput.Icon name="account" />}
              style={styles.input}
              mode="outlined"
              value={email}
              onChangeText={text => setEmail(text)}
            />

            <TextInput
              label="Password"
              right={
                <TextInput.Icon
                  name={visible ? 'eye-off' : 'eye'}
                  onPress={() => setVisible(!visible)}
                />
              }
              style={styles.input}
              secureTextEntry={!visible}
              mode="outlined"
              value={password}
              onChangeText={text => setPassword(text)}
            />

            <Button
              mode="contained"
              onPress={() =>
                dispatch(
                  authActions.login({
                    email,
                    password,
                  }),
                )
              }
              style={styles.button}
              loading={isPendingLoggedIn}>
              <Text>Login</Text>
            </Button>

            <Button
              mode="text"
              style={styles.button}
              onPress={() => navigation.navigate('Register')}>
              Don't have an account ?
            </Button>
          </Surface>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inner: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    height: 200,
    width: 150,
    marginBottom: 40,
  },

  title: {
    fontSize: 30,
    marginBottom: 20,
  },

  input: {
    width: '90%',
    height: 50,
    marginBottom: 20,
  },

  button: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default LoginScreen;
