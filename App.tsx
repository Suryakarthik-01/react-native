import React, { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import TaskList from './components/TaskList';
import Filters from './components/Filters';
import { Task } from './types/Task';
import TaskInput from './components/TaskInput';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'TASKS_STORAGE_KEY';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState('ALL');

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const json = await AsyncStorage.getItem(STORAGE_KEY);
        if (json) {
          setTasks(JSON.parse(json));
        }
      } catch (error) {
        console.log('Load error:', error);
      }
    };
    loadTasks();
  }, []);

  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
      } catch (error) {
        console.log('Save error:', error);
      }
    };
    saveTasks();
  }, [tasks]);

  const addTask = (title: string) => {
    setTasks(prev => [
      { id: Date.now().toString(), title, completed: false },
      ...prev,
    ]);
  };

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const editTask = (id: string, newTitle: string) => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, title: newTitle } : t)),
    );
  };

  const filtered = tasks.filter(t => {
    if (filter === 'COMPLETED') return t.completed;
    if (filter === 'PENDING') return !t.completed;
    return true;
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todo App</Text>

      <TaskInput onAdd={addTask} />

      <Filters
        filter={filter}
        onChangeFilter={setFilter}
        total={tasks.length}
        completed={tasks.filter(t => t.completed).length}
        pending={tasks.filter(t => !t.completed).length}
      />

      <TaskList
        tasks={filtered}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1B3B6F',
  },
});
