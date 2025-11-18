import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import TaskList from './src/components/TaskList';
import Filters from './src/components/Filters';
import TaskInput from './src/components/TaskInput';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './src/components/Header';

import { Task } from './src/types/Task';

const STORAGE_KEY = 'TASKS_STORAGE_KEY';

const MainApp = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState('ALL');

  useEffect(() => {
    const loadTasks = async () => {
      const json = await AsyncStorage.getItem(STORAGE_KEY);
      if (json) setTasks(JSON.parse(json));
    };
    loadTasks();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
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
      <StatusBar barStyle="light-content" backgroundColor="#1B3B6F" />

      <Header />

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

export default MainApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fc',
  },
});
