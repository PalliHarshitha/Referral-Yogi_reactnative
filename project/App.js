// App.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopBar from './components/topBar';

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
