import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Footer} from '../components';
import {useContext} from 'react';
import LoginContext from '../hooks/LoginContext';
import firestore from '@react-native-firebase/firestore';

const Profile = ({navigation}) => {
  const {userInfo} = useContext(LoginContext);
  const url = userInfo['photo'] ? userInfo['photo'] : userInfo['photoURL'];
  const data = async () => {
    // const usersCollection = await firestore()
    //   .collection('courses')
    //   .doc('9uVCElXKb9hoL5uWzz74')
    //   .get();
    // console.log(usersCollection['_data']);
    console.log(userInfo);
  };

  const {signOut} = useContext(LoginContext);

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image
          style={styles.userImage}
          source={{
            uri: url,
          }}
        />
        <Text style={styles.userName}>
          {userInfo['name'] || userInfo['displayName']}
        </Text>
        <Text style={styles.userEmail}>{userInfo['email']}</Text>
      </View>
      <View style={styles.actionContainer}>
        {/* <TouchableOpacity style={styles.actionButton} onPress={() => data()}>
          <Text style={styles.actionButtonText}>My Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Liked Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Edit Profile</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.actionButton}
          onPress={e => {
            signOut(navigation);
          }}>
          <Text style={styles.actionButtonText}>Logout</Text>
        </TouchableOpacity>
        <View style={styles.actionButton}>
          <Text style={styles.actionButtonText}>
            More features are yet to come
          </Text>
        </View>
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
