import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
  Alert,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();

  const handleChatPress = () => {
    const link = 'https://api.whatsapp.com/send?phone=+916396098067';
    Linking.canOpenURL(link)
      .then(supported => {
        if (!supported) {
          Alert.alert(
            'Please install whats app to send direct message to students via whatsapp',
          );
        } else {
          return Linking.openURL(link);
        }
      })
      .catch(err => console.error('An error occurred', err));
  };

  return (
    <View style={styles.menuContainer}>
      <View style={styles.profileSection}>
        <Image source={require('./images/logo.png')} style={styles.Image} />
        <View style={styles.WelcomeInfo}>
          <Text style={styles.nameText}>HELLO,John Doe</Text>
          <Text style={styles.appText}>Know Us More .....</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={e => {
          navigation.navigate('Terms');
          e.stopPropagation();
        }}
      >
        <Text style={styles.menuText}>Terms and Condition</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={e => {
          navigation.navigate('About');
          e.stopPropagation();
        }}
      >
        <Text style={styles.menuText}>About US</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>FAQs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={e => {
          Linking.openURL('https://api.whatsapp.com/send?phone=+916396098067');
          e.stopPropagation();
        }}
      >
        <Text style={styles.menuText}>Chat with us</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    top: 45,
    left: 0,
    backgroundColor: '#bbb',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: '70%',
    height: 1234,
  },
  menuItem: {
    marginBottom: 8,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 6,
  },
  menuText: {fontSize: 20, color: '#333'},
  profileSection: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 16,
  },
  Image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  WelcomeInfo: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  nameText: {
    fontSize: 20,
    color: 'black',
  },
  appText: {
    fontSize: 15,
    color: 'black',
    marginTop: 4,
    textAlign: 'center',
  },
});
