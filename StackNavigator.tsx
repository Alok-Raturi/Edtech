import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AboutUs,
  Authentication,
  ContactUsScreen,
  CourseScreen,
  FAQScreen,
  HomeScreen,
  Notification,
  Profile,
  SearchScreen,
  SplashScreen,
  StudyMaterial,
  TermsAndConditions,
} from './screens';
import LoginContext from './hooks/LoginContext';
import Discussion from './screens/Discussion';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const {user} = useContext(LoginContext);

  return (
    <Stack.Navigator>
      {!user ? (
        <>
          {/* <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false, }} /> */}
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
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Study"
            component={StudyMaterial}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Discussion"
            component={Discussion}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CourseScreen"
            component={CourseScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Terms"
            component={TermsAndConditions}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="About"
            component={AboutUs}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="FAQ"
            component={FAQScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Contact"
            component={ContactUsScreen}
            // options={{headerShown: false}}
          />
        </>
      ) : null}
    </Stack.Navigator>
  );
};

export default StackNavigator;
