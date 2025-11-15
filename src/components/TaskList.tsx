import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import TaskItem from './TaskItem';
import { Task } from '../types/Task';

interface Props {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string) => void;
}

const TaskList: React.FC<Props> = ({ tasks, onToggle, onDelete, onEdit }) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        <View style={styles.emptyBox}>
          <Text style={styles.emptyText}>No tasks yet</Text>
        </View>
      }
      renderItem={({ item }) => (
        <TaskItem
          task={item}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      )}
    />
  );
};

export default TaskList;

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    flexGrow: 1,
  },

  emptyBox: {
    paddingVertical: 40,
    alignItems: 'center',
  },

  emptyText: {
    fontSize: 16,
    color: '#7A8CA5',
  },
});
