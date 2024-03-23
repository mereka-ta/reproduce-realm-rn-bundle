import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

export const OtherBundle = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Other Bundle</Text>
      <Text style={styles.content}>
        Props : {JSON.stringify(props)}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    color: 'blue',
  },
});
