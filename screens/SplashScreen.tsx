import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../components/images/logo.png')}
          style={styles.image}
        />
        <Text style={styles.text}>
          One step solution for all your college deeds
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ddd',
  },
  imageContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    resizeMode: 'contain',
  },
  text: {
    color: 'black',
  },
});
