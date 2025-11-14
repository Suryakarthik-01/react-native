import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

interface Props {
  onAdd: (title: string) => void;
}

const TaskInput: React.FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Add a new task..."
          placeholderTextColor="#999"
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.addBtn} onPress={handleAdd}>
        <Text style={styles.addText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#f8f9fc',
  },

  inputWrapper: {
    flex: 1,
    backgroundColor: '#e9eef7', 
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#d0d8e8',
  },

  input: {
    fontSize: 16,
    paddingVertical: 10,
    color: '#000',
  },

  addBtn: {
    marginLeft: 10,
    backgroundColor: '#007bff',
    paddingHorizontal: 18,
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#007bff',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },

  addText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
