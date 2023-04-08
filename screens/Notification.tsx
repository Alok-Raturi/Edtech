import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Notification = () => {
  const [activeTab, setActiveTab] = useState('announcement');

  const handleTabPress = tabName => {
    setActiveTab(tabName);
  };

  const announcements = [
    {id: 1, text: 'New feature added to the app!'},
    {id: 2, text: 'Join us for a special event!'},
    {id: 3, text: 'Our app has reached 10 million downloads!'},
  ];

  const notifications = [
    {id: 1, text: 'You have a new message from John.'},
    {id: 2, text: 'Your order has been shipped!'},
    {id: 3, text: "Don't miss out on our latest sale."},
  ];

  const renderAnnouncements = () => {
    return announcements.map(announcement => (
      <View key={announcement.id} style={styles.notificationItem}>
        <Text>{announcement.text}</Text>
      </View>
    ));
  };

  const renderNotifications = () => {
    return notifications.map(notification => (
      <View key={notification.id} style={styles.notificationItem}>
        <Text>{notification.text}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Feed</Text>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'announcement' && styles.activeTabButton,
          ]}
          onPress={() => handleTabPress('announcement')}
        >
          <Text style={styles.tabButtonText}>Announcement</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'notification' && styles.activeTabButton,
          ]}
          onPress={() => handleTabPress('notification')}
        >
          <Text style={styles.tabButtonText}>Notification</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {activeTab === 'announcement'
          ? renderAnnouncements()
          : renderNotifications()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5c6962',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'grey',
    borderRadius: 5,
  },
  activeTabButton: {
    backgroundColor: 'white',
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    paddingVertical: 8,
  },
  notificationItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
  },
  notificationText: {
    color: 'black',
  },
});

export default Notification;
