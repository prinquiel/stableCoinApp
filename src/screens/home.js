import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Home = ({ navigation }) => {
  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };

  const profileImageUrl = 'https://randomuser.me/api/portraits/men/1.jpg';

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleProfilePress}>
        <View style={styles.profileCircle}>
          <Image
            source={{ uri: profileImageUrl }}
            style={styles.profileImage}
            onError={(e) => {
              console.log('Image load error:', e.nativeEvent.error);
            }}
            onLoadStart={() => {
              console.log('Image loading started');
            }}
            onLoad={() => {
              console.log('Image loaded successfully');
            }}
          />
        </View>
      </TouchableOpacity>
      
      <Text style={styles.greetingText}>Hola Usuario</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1B192E',
    },
    topContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 30,
      paddingLeft: 40,
    },
    profileTouchable: {
      marginRight: 30,
    },
    profileCircle: {
      width: 60,
      height: 60,
      borderRadius: 40,
      overflow: 'hidden',
    },
    profileImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    greetingText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'medium bold',
    },     
  });

export default Home;