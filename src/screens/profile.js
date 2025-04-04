import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Profile = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <Text style={styles.greetingText}>Perfil</Text>
        </View>
    );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1B192E',
    },
    greetingText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
}); 

export default Profile;