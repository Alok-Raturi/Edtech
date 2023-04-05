import {View, Text, Button} from 'react-native';
import React, {useContext} from 'react';
import LoginContext from '../hooks/LoginContext';
// import {Header} from '../components';
import {Footer} from '../components';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const HomeScreen = ({navigation}) => {
  const {signOut} = useContext(LoginContext);

  return (
    <SafeAreaProvider>
      <Footer active={'explore'} />
    </SafeAreaProvider>
  );
};

export default HomeScreen;
