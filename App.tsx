import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useContext} from 'react';
import StackNavigator from './StackNavigator';
import {LoginContextProvider} from './hooks/LoginContext';

const App = () => {
  return (
    <NavigationContainer>
      <LoginContextProvider>
        <StackNavigator />
      </LoginContextProvider>
    </NavigationContainer>
  );
};

export default App;
