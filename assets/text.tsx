import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

// Define types for the state and props (if any)
interface Props {
  // You can add props here if needed
}

const TextBoxWithText: React.FC<Props> = () => {
  const [text, setText] = useState<string>(''); // State for holding the text input, with type 'string'

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a simple text box:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter some text"
        value={text}
        onChangeText={(newText: string) => setText(newText)} // Update state with the new text (typing in the text box)
      />
      <Text style={styles.text}>You entered: {text}</Text>
    </View>
  );
};

// Export the component
export default TextBoxWithText;

// StyleSheet for the component's styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingLeft: 10,
  },
});
