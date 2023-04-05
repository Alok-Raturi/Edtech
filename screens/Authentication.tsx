import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import LoginContext from '../hooks/LoginContext';

const Authentication = ({navigation}) => {
  const {signIn, configuration} = useContext(LoginContext);

  useEffect(() => {
    configuration();
  }, []);
  return (
    <ImageBackground
      source={require('../components/images/LoginBg.png')}
      resizeMode="cover"
      style={styles.bg}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.intro}>
          <Text style={styles.text}>Welcome to</Text>
          <Image
            source={require('../components/images/logo.png')}
            style={styles.image}
          />
          <Text style={styles.info}>
            one step solution for all your engineering needs
          </Text>
        </View>
        <View style={styles.ButtonContainer}>
          <GoogleSigninButton
            style={{width: 192, height: 48}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            // onPress={() => signIn(navigation)}
            onPress={() => navigation.navigate('Home')}
            disabled={false}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Authentication;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  intro: {
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonContainer: {},
  text: {
    color: 'white',
    fontSize: 29,
    fontWeight: 'bold',
  },
  image: {},
  bg: {
    width: '100%',
    height: '100%',
  },
  info: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: 10,
  },
});
