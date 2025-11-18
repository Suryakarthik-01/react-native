import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const { signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        placeholder="Choose username"
        style={styles.input}
        onChangeText={setUsername}
      />

      <TouchableOpacity style={styles.btn} onPress={() => signup(username)}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  title: { fontSize: 26, fontWeight: '700', marginBottom: 20 },
  input: { borderWidth: 1, padding: 12, borderRadius: 8, marginBottom: 20 },
  btn: {
    backgroundColor: '#1B3B6F',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: { color: '#fff', fontSize: 18, fontWeight: '600' },
  link: { marginTop: 20, color: '#1B3B6F', textAlign: 'center' },
});
