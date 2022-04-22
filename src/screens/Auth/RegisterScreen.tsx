/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  Text,
  ScrollView,
} from 'react-native';
import {
  Surface,
  TextInput,
  Title,
  Subheading,
  Button,
  useTheme,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-date-picker';

import {
  authActions,
  selectIsPendingRegister,
} from '@myapp/features/auth/auth.slice';
import {useAppDispatch, useAppSelector} from '@myapp/hooks/redux.hook';

const RegisterScreen = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const isPendingRegister = useAppSelector(selectIsPendingRegister);

  const [name, setName] = React.useState<string>('');
  const [surname, setSurname] = React.useState<string>('');
  const [userName, setUserName] = React.useState<string>('');
  const [emailAddress, setEmailAddress] = React.useState<string>('');
  const [phoneNumber, setPhoneNumber] = React.useState<string>('');
  const [address, setAddress] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [gender, setGender] = React.useState<string>('');
  const [dateOfBirth, setDateOfBirth] = React.useState<Date>(new Date());
  const [visible, setVisible] = React.useState(false);

  const theme = useTheme();

  const onRegisterButtonPress = (): void => {
    if (!!emailAddress && !!name && !!userName && !!password) {
      dispatch(
        authActions.register({
          emailAddress,
          userName,
          name,
          surname,
          phoneNumber,
          address,
          gender,
          dateOfBirth: dateOfBirth.toISOString(),
          password,
        }),
      );
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
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
                value={name}
                onChangeText={setName}
              />

              <TextInput
                mode="outlined"
                label="Surname"
                style={styles.inputWrapper}
                right={<TextInput.Icon name="account" />}
                value={surname}
                onChangeText={setSurname}
              />
            </Surface>

            <Surface style={styles.wrapper}>
              <TextInput
                mode="outlined"
                label="Email"
                style={styles.input}
                right={<TextInput.Icon name="email" />}
                value={emailAddress}
                onChangeText={setEmailAddress}
              />
            </Surface>

            <Surface style={styles.wrapper}>
              <TextInput
                mode="outlined"
                label="Username"
                style={styles.input}
                right={<TextInput.Icon name="email" />}
                value={userName}
                onChangeText={setUserName}
              />
            </Surface>

            <Surface style={styles.wrapper}>
              <TextInput
                mode="outlined"
                label="Phone"
                style={styles.inputWrapper}
                right={<TextInput.Icon name="phone" />}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />

              <TextInput
                mode="outlined"
                label="Gender"
                style={styles.inputWrapper}
                right={<TextInput.Icon name="gender-male-female" />}
                value={gender}
                onChangeText={setGender}
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
                value={password}
                onChangeText={setPassword}
              />
            </Surface>

            <Surface style={styles.wrapper}>
              <TextInput
                mode="outlined"
                label="Address"
                style={styles.input}
                right={<TextInput.Icon name="directions" />}
                value={address}
                onChangeText={setAddress}
              />
            </Surface>

            <Surface style={styles.dateOfBirth}>
              <Icon name="birthday-cake" size={32} />
              <DatePicker
                date={dateOfBirth}
                onDateChange={setDateOfBirth}
                mode="date"
                style={{height: 50, width: 220}}
                theme="dark"
                maximumDate={new Date()}
                textColor={theme.colors.text}
                fadeToColor="none"
              />
            </Surface>

            <Button
              mode="contained"
              style={styles.button}
              onPress={onRegisterButtonPress}
              loading={isPendingRegister}>
              <Text>Register</Text>
            </Button>

            <Button
              mode="text"
              style={styles.button}
              onPress={() => navigation.navigate('Login')}>
              Already have an account ?
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
    height: 40,
    width: '100%',
  },

  wrapper: {
    padding: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },

  inputWrapper: {
    height: 40,
    width: '45%',
  },

  dateOfBirth: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems: 'center',
  },

  button: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default RegisterScreen;
