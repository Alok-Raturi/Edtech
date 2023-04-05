import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Authentication, HomeScreen, Profile, StudyMaterial} from './screens';
import LoginContext from './hooks/LoginContext';
import Discussion from './screens/Discussion';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const {user} = useContext(LoginContext);
  console.log(user);

  return (
    <Stack.Navigator>
      {!user ? (
        <>
          <Stack.Screen
            name="Authentication"
            component={Authentication}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            // options={{headerShown: false}}
          />
          <Stack.Screen
            name="Study"
            component={StudyMaterial}
            // options={{headerShown: false}}
          />
          <Stack.Screen
            name="Discussion"
            component={Discussion}
            // options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            // options={{headerShown: false}}
          />
        </>
      ) : (
        <>
          <Text>Hell</Text>
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
