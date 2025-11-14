import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { Task } from '../types/Task';

interface Props {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string) => void;
}

const TaskItem: React.FC<Props> = ({ task, onToggle, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(task.title);

  return (
    <View style={styles.card}>
      {/* Checkbox */}
      <TouchableOpacity
        onPress={() => onToggle(task.id)}
        style={styles.checkbox}
      >
        {task.completed && <Text style={styles.checkmark}>✔</Text>}
      </TouchableOpacity>

      {/* Editable Text */}
      {editing ? (
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={setValue}
          autoFocus
          onSubmitEditing={() => {
            onEdit(task.id, value);
            setEditing(false);
          }}
        />
      ) : (
        <TouchableOpacity
          style={styles.textWrapper}
          onLongPress={() => setEditing(true)}
        >
          <Text style={[styles.text, task.completed && styles.completedText]}>
            {task.title}
          </Text>
        </TouchableOpacity>
      )}

      {/* Edit Button */}
      {!editing && (
        <TouchableOpacity
          onPress={() => setEditing(true)}
          style={styles.editButton}
        >
          <Text style={styles.edit}>✎</Text>
        </TouchableOpacity>
      )}

      {/* Delete */}
      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Text style={styles.delete}>✖</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginVertical: 5,
    borderRadius: 12,
    elevation: 2,
  },

  checkbox: {
    width: 26,
    height: 26,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    backgroundColor: 'white',
  },

  checkmark: {
    color: '#3B82F6',
    fontSize: 18,
    fontWeight: 'bold',
  },

  textWrapper: {
    flex: 1,
  },

  text: {
    fontSize: 16,
    color: '#333',
  },

  completedText: {
    textDecorationLine: 'line-through',
    color: '#8AA0C4',
  },

  edit: {
    fontSize: 18,
    color: '#3B82F6',
    fontWeight: '600',
    marginRight: 8,
  },

  input: {
    flex: 1,
    borderBottomWidth: 1.5,
    borderColor: '#3B82F6',
    paddingVertical: 4,
    fontSize: 16,
  },

  delete: {
    fontSize: 20,
    marginLeft: 10,
    color: '#EF4444',
    fontWeight: '600',
  },
  editButton: {
    marginLeft: 10,
  }
});
