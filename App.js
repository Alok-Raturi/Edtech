import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import StackNavigator from './StackNavigator';
import {LoginContextProvider} from './hooks/LoginContext';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <LoginContextProvider>
        <StackNavigator />
      </LoginContextProvider>
    </NavigationContainer>
  );
};

export default App;
