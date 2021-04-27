import React from 'react';
import {
  View, TextInput, StyleSheet,
} from 'react-native';

import CircleButton from '../components/CircleButton';
import KeyboadsafeView from '../components/KeyboadSafeView';

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  return (
    <KeyboadsafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleButton
        name="check"
        onPress={() => { navigation.goBack(); }}
      />

    </KeyboadsafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
