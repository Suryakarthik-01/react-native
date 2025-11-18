import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import { LanguageContext } from '../context/LanguageContext';
import i18n from '../localization';

interface Props {
  onAdd: (title: string) => void;
}

const TaskInput: React.FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState('');
  const { language } = useContext(LanguageContext);

  useEffect(() => {
  }, [language]);

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
          placeholder="Add a task..."
          placeholderTextColor="#999"
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.addBtn} onPress={handleAdd}>
        <Text style={styles.addText}>{i18n.t('add')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 16,
  },

  inputWrapper: {
    flex: 1,
    backgroundColor: '#f8f9fc',
    borderRadius: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#1e2e47ff',
    marginRight: 12,
  },

  input: {
    fontSize: 16,
    paddingVertical: 12,
    color: '#1e293b',
    fontWeight: '500',
  },

  addBtn: {
    backgroundColor: '#1B3B6F',
    paddingHorizontal: 20,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#1B3B6F',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    minWidth: 70,
  },

  addText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.3,
  },
});
