import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <MaskedView maskElement={<Text style={styles.title}>CryptoApp</Text>}>
          <LinearGradient
            colors={['#D5006D', '#4A148C']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
          >
            <Text style={[styles.title, { opacity: 0 }]}>CryptoApp</Text>
          </LinearGradient>
        </MaskedView>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>Welcome to CryptoApp</Text>
        <Text style={styles.subtitleText}>The best way to manage your crypto assets</Text>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.button}>
            <Text style={styles.buttonText}>Let's Start</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
          <Text style={styles.loginLink}>I already have an account</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B192E', 
    alignItems: 'center',
  },
  titleContainer: {
    position: 'absolute',  
    top: 100,  
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: '400',
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  welcomeText: {
    fontSize: 20,
    color: '#6B3062',
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 20, 
  },
  subtitleText: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 40, 
    },
  button: {
    width: 130,
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#6B3062',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  loginLink: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 20,
    textDecorationLine: 'underline',
    },

});

export default WelcomeScreen;
