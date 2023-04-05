import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Footer} from '../components';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: 'black'}}>Hello world</Text>
      <Footer active={'profile'} />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
