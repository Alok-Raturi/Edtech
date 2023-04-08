import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../components/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        We are a team of experienced educators and developers who are passionate
        about providing quality education to everyone, everywhere. Our mission
        is to make education accessible and affordable for all.
      </Text>
      <Text style={styles.description}>
        Our application offers a wide range of courses and study materials for
        various subjects, from primary school to university level. Our courses
        are designed by experts in their respective fields and are regularly
        updated to ensure that they are up-to-date and relevant.
      </Text>
      <Text style={styles.description}>
        We believe that education is the key to unlocking potential and
        improving lives. With our application, you can learn at your own pace
        and on your own schedule, without breaking the bank.
      </Text>
      <Text style={styles.description}>
        Thank you for choosing our application for your educational needs. We
        are committed to providing you with the best possible learning
        experience and look forward to helping you achieve your goals.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 400,
    height: 400,
    // borderRadius: 50,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  description: {
    color: 'black',

    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default AboutUs;
