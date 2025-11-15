import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, StatusBar, View, Image } from 'react-native';
import TaskList from './src/components/TaskList';
import Filters from './src/components/Filters';
import { Task } from './src/types/Task';
import TaskInput from './src/components/TaskInput';
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
        if (__DEV__) {
          console.log('Load error:', error);
        }
      }
    };
    loadTasks();
  }, []);

  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
      } catch (error) {
        if (__DEV__) {
          console.log('Save error:', error);
        }
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
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1B3B6F"
        translucent={false}
      />
      <View style={styles.header}>
        <Image 
          source={require('./assets/images/check.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Todo</Text>
      </View>

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
  container: { 
    flex: 1, 
    backgroundColor: '#f8f9fc',
  },
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 24,
    marginBottom: 16,
    backgroundColor: '#ffffff',
    elevation: 4,
    shadowColor: '#1B3B6F',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    borderBottomWidth: 1,
    borderBottomColor: '#f0f4f8',
  },
  
  logo: {
    width: 36,
    height: 36,
    marginRight: 12,
    tintColor: '#1B3B6F',
  },
  
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1B3B6F',
    letterSpacing: -0.5,
  },
});
