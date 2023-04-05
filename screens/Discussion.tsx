import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Footer} from '../components';

const Discussion = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: 'black'}}>Hello world</Text>
      <Footer active={'discussion'} />
    </SafeAreaView>
  );
};

export default Discussion;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
