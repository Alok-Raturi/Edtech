import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
  Alert,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();

  const handleChatPress = () => {
    const link = 'https://api.whatsapp.com/send?phone=+916396098067';
    Linking.canOpenURL(link)
      .then(supported => {
        if (supported) {
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
      <ScrollView>
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
        <TouchableOpacity
          style={styles.menuItem}
          onPress={e => {
            navigation.navigate('FAQ');
            e.stopPropagation();
          }}
        >
          <Text style={styles.menuText}>FAQs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={e => {
            navigation.navigate('Contact');
            e.stopPropagation();
          }}
        >
          <Text style={styles.menuText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={e => {
            handleChatPress();
            e.stopPropagation();
          }}
        >
          <Text style={styles.menuText}>Chat with us</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    backgroundColor: '#bbb',
    padding: 16,
    borderRadius: 8,
    position: 'absolute',
    top: 45,
    left: 0,
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    height: 900,
    shadowRadius: 4,
    width: '120%',
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
    backgroundColor: 'white',
    borderRadius: 75,
    marginBottom: 20,
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
