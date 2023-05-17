import {View, Text, Alert, ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';
import React, {createContext, useState, useEffect} from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export const LoginContext = createContext();

export const LoginContextProvider = ({children}) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  // useEffect(() => {
  //   isSignedIn();
  //   getCurrentUser();
  // }, []);

  const configuration = () => {
    GoogleSignin.configure({
      webClientId:
        '925345503288-6rrrgnhea9bdfq8drqrn5067n1fmskpo.apps.googleusercontent.com',
    });
  };

  const signIn = async x => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = await auth.GoogleAuthProvider.credential(
        idToken,
      );

      // Sign-in the user with the credential
      const info = await auth().signInWithCredential(googleCredential);
      setUserInfo(info);
      setIsLogged(true);
      x.replace('Home');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert(error.message);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        <ActivityIndicator size="small" color="#0000ff" />;
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert(error.message);
      } else {
        console.log(error);
        x.replace('Home');
      }
    }
  };

  const isSignedIn = async x => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    setIsLogged(isSignedIn);
    if (isSignedIn == true) x.replace('Home');
  };

  async function getCurrentUser() {
    const currentUser = await GoogleSignin.getCurrentUser();
    setUserInfo(currentUser);
  }

  const signOut = async x => {
    try {
      setIsLogged(false);
      await GoogleSignin.signOut();
      x.replace('Authentication');
      setUserInfo(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginContext.Provider
      value={{
        isLogged: isLogged,
        userInfo: userInfo !== null ? userInfo['user'] : {},
        configuration: configuration,
        signIn: signIn,
        isSignedIn: isSignedIn,
        getCurrentUser: getCurrentUser,
        signOut: signOut,
      }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
