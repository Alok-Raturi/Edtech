import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Menu as HamMenu, Bell, Search} from 'react-native-feather';
import {useNavigation} from '@react-navigation/native';
import Menu from './Menu';

const HomeHeader = () => {
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuPress = e => {
    setShowMenu(!showMenu);
  };

  return (
    <View style={styles.container}>
      {/* Left side */}
      <TouchableOpacity onPress={handleMenuPress}>
        <HamMenu stroke="red" fill="#fff" width={26} height={26} />
      </TouchableOpacity>

      {/* Center */}
      <Text style={styles.centerText}>Explore</Text>

      {/* Right side */}
      <View style={styles.rightContainer}>
        <TouchableOpacity
          onPress={e => {
            navigation.navigate('Search');
            e.stopPropagation();
          }}
        >
          <View>
            <Search stroke="red" fill="#fff" width={26} height={26} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={e => {
            navigation.navigate('Notification');
            e.stopPropagation();
          }}
        >
          <View>
            <Bell stroke="red" fill="#fff" width={26} height={26} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      {showMenu && <Menu />}
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  centerText: {fontSize: 18, fontWeight: 'bold', color: 'red'},
  rightContainer: {flexDirection: 'row', alignItems: 'center', gap: 20},
});
