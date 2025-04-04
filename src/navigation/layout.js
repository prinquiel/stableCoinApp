import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/welcomeScreen'; 
import SignUp from '../screens/signUp'; 
import LogIn from '../screens/logIn';
import Home from '../screens/home';
import Profile from '../screens/profile';

const Stack = createNativeStackNavigator();

const Layout = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeScreen">
          <Stack.Screen 
            name="WelcomeScreen" 
            component={WelcomeScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  };

export default Layout;
