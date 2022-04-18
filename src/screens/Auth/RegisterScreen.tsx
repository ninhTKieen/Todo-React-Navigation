import React from 'react';

import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
} from 'react-native';
import {Surface, TextInput, Title, Subheading} from 'react-native-paper';

const RegisterScreen = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Surface style={styles.innerContainer}>
          <Title style={styles.title}>Hello</Title>

          <Subheading style={{marginBottom: 10}}>
            Register new account
          </Subheading>

          <Surface style={styles.wrapper}>
            <TextInput
              mode="outlined"
              label="Name"
              style={styles.inputWrapper}
              right={<TextInput.Icon name="account" />}
            />

            <TextInput
              mode="outlined"
              label="Surname"
              style={styles.inputWrapper}
              right={<TextInput.Icon name="account" />}
            />
          </Surface>

          <Surface style={styles.wrapper}>
            <TextInput
              mode="outlined"
              label="Email"
              style={styles.input}
              right={<TextInput.Icon name="email" />}
            />
          </Surface>

          <Surface style={styles.wrapper}>
            <TextInput
              mode="outlined"
              label="Username"
              style={styles.input}
              right={<TextInput.Icon name="email" />}
            />
          </Surface>

          <Surface style={styles.wrapper}>
            <TextInput
              mode="outlined"
              label="Phone"
              style={styles.input}
              right={<TextInput.Icon name="phone" />}
            />
          </Surface>

          <Surface style={styles.wrapper}>
            <TextInput
              mode="outlined"
              label="Password"
              style={styles.input}
              secureTextEntry={!visible}
              right={
                <TextInput.Icon
                  name={visible ? 'eye-off' : 'eye'}
                  onPress={() => setVisible(!visible)}
                />
              }
            />
          </Surface>

          <Surface style={styles.wrapper}>
            <TextInput
              mode="outlined"
              label="Address"
              style={styles.input}
              right={<TextInput.Icon name="directions" />}
            />
          </Surface>
        </Surface>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  innerContainer: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    marginTop: 20,
  },

  input: {
    height: 50,
    width: '100%',
  },

  wrapper: {
    padding: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },

  inputWrapper: {
    height: 50,
    width: '45%',
  },
});

export default RegisterScreen;
