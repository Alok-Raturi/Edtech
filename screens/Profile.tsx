import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Footer} from '../components';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image
          style={styles.userImage}
          source={require('../components/images/logo.png')}
        />
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>johndoe@email.com</Text>
        <Text style={styles.userContact}>+1 123-456-7890</Text>
        {/* Add other necessary user details here */}
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>My Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Liked Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={e => {
            navigation.navigate('Authentication');
            e.stopPropagation();
          }}
        >
          <Text style={styles.actionButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <Footer active={'profile'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  userContainer: {
    alignItems: 'center',
    backgroundColor: '#ffb',
    paddingTop: 20,
  },
  userImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 10,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  userContact: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  actionContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 50,
  },
  actionButton: {
    backgroundColor: '#f9a602',
    padding: 10,
    width: '100%',
    marginBottom: 20,
    borderRadius: 5,
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Profile;
