import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Welcome!</Text>
      <Text style={styles.text}>You're logged in successfully.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f2ff',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#007acc',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

