import React from 'react';

import {StyleSheet} from 'react-native';
import {Modal, Portal, TextInput, Button, useTheme} from 'react-native-paper';

interface IModal {
  visible: boolean;
  hideModal: () => void;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  handlePress: () => void;
}

const ModalInput: React.FC<IModal> = props => {
  const theme = useTheme();

  const handleOnPress = () => {
    props.handlePress();
    props.hideModal();
  };

  return (
    <React.Fragment>
      <Portal>
        <Modal
          visible={props.visible}
          onDismiss={props.hideModal}
          contentContainerStyle={[
            styles.container,
            {backgroundColor: theme.colors.surface},
          ]}>
          <TextInput
            label="Title"
            mode="outlined"
            value={props.title}
            onChangeText={text => props.setTitle(text)}
          />

          <TextInput
            label="Description"
            mode="outlined"
            style={styles.description}
            textAlignVertical="top"
            multiline={true}
            value={props.description}
            onChangeText={text => props.setDescription(text)}
          />

          <Button
            icon="content-save-edit"
            mode="contained"
            style={styles.button}
            onPress={handleOnPress}>
            Save
          </Button>
        </Modal>
      </Portal>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 300,
  },

  description: {
    height: 100,
    marginTop: 20,
  },

  button: {
    marginTop: 20,
    borderRadius: 5,
  },
});

export default ModalInput;
