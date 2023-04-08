import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  Alert,
} from 'react-native';
import {Facebook, Twitter, Instagram, PhoneCall} from 'react-native-feather';

const ContactUsScreen = () => {
  const openLinks = link => {
    Linking.canOpenURL(link)
      .then(supported => {
        if (supported) {
          Alert.alert('Please install appropriate application');
        } else {
          return Linking.openURL(link);
        }
      })
      .catch(err => console.error('An error occurred', err));
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../components/images/logo.png')} />
      </View>
      <Text style={styles.logoText}>Follow US</Text>
      <View style={styles.socialMediaContainer}>
        <TouchableOpacity
          style={styles.socialMediaLink}
          onPress={e => {
            openLinks('https://www.instagram.com/raturi_alok/');
            e.stopPropagation();
          }}
        >
          <Facebook height={24} width={24} color="black" />
          <Text style={styles.socialMediaLinkText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialMediaLink}
          onPress={e => {
            openLinks('https://www.instagram.com/raturi_alok/');
            e.stopPropagation();
          }}
        >
          <Twitter height={24} width={24} color="black" />
          <Text style={styles.socialMediaLinkText}>Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialMediaLink}
          onPress={e => {
            openLinks('https://www.instagram.com/raturi_alok/');
            e.stopPropagation();
          }}
        >
          <Instagram height={24} width={24} color="black" />
          <Text style={styles.socialMediaLinkText}>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialMediaLink}
          onPress={e => {
            Linking.openURL('tel:6396098067');
            e.stopPropagation();
          }}
        >
          <PhoneCall height={24} width={24} color="black" />
          <Text style={styles.socialMediaLinkText}>Call</Text>
        </TouchableOpacity>
        {/* Add more social media links here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 32,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    color: 'black',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  socialMediaLink: {
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 10,
  },
  socialMediaLinkText: {
    fontSize: 16,
    marginTop: 8,
    color: 'black',
  },
});

export default ContactUsScreen;
