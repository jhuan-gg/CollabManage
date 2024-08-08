import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import api from './src/api';

export default function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/')
      .then(response => setMessage(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
