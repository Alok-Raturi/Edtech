import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Home, BookOpen, User, MessageSquare} from 'react-native-feather';
import {useNavigation} from '@react-navigation/native';

const Footer = ({active}) => {
  const [activeTab, setActiveTab] = useState(active);

  const handleTabPress = tabName => {
    setActiveTab(tabName);
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {
            handleTabPress('explore');
            navigation.replace('Home');
          }}
          disabled={activeTab === 'explore'}
        >
          <View style={{alignItems: 'center'}}>
            <Home stroke="red" fill="#fff" width={26} height={26} />
            <Text
              style={{
                color: activeTab === 'explore' ? '#F44336' : '#333',
                marginTop: 4,
              }}
            >
              Explore
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleTabPress('study');
            navigation.replace('Study');
          }}
          disabled={activeTab === 'study'}
        >
          <View style={{alignItems: 'center'}}>
            <BookOpen stroke="red" fill="#fff" width={26} height={26} />
            <Text
              style={{
                color: activeTab === 'study' ? '#F44336' : '#333',
                marginTop: 4,
              }}
            >
              Study Material
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleTabPress('discussion');
            navigation.replace('Discussion');
          }}
          disabled={activeTab === 'discussion'}
        >
          <View style={{alignItems: 'center'}}>
            <MessageSquare stroke="red" fill="#fff" width={26} height={26} />

            <Text
              style={{
                color: activeTab === 'discussion' ? '#F44336' : '#333',
                marginTop: 4,
              }}
            >
              Discussion
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleTabPress('profile');
            navigation.replace('Profile');
          }}
          disabled={activeTab === 'profile'}
        >
          <View style={{alignItems: 'center'}}>
            <User stroke="red" fill="#fff" width={26} height={26} />

            <Text
              style={{
                color: activeTab === 'profile' ? '#F44336' : '#333',
                marginTop: 4,
              }}
            >
              Profile
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
});
