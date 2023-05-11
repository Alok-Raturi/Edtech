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
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    isSignedIn();
    getCurrentUser();
  }, []);

  const configuration = () => {
    GoogleSignin.configure({
      webClientId:
        '468918126139-0o05rspnasd3tgcaaljfusle9ehbgsri.apps.googleusercontent.com',
      offlineAccess: true,
    });
  };

  const signIn = async x => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const info = auth().signInWithCredential(googleCredential);
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

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    setIsLogged(isSignedIn);
  };

  async function getCurrentUser() {
    const currentUser = await GoogleSignin.getCurrentUser();
    setUserInfo(currentUser);
  }

  const signOut = async x => {
    try {
      await GoogleSignin.signOut();
      setUserInfo([]);
      setIsLogged(false);
      x.navigate('Authentication');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginContext.Provider
      value={{
        isLogged: isLogged,
        userInfo: userInfo,
        configuration: configuration,
        signIn: signIn,
        isSignedIn: isSignedIn,
        getCurrentUser: getCurrentUser,
        signOut: signOut,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
