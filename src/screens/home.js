import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


const Home = ({ navigation, user }) => {
  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };

  const handleSendPress = () => {
    // Navigate to send page or perform action
  };

  const handleReceivePress = () => {
    // Navigate to receive page or show QR code
  };

  const handleTransactionHistoryPress = () => {
    // Navigate to transaction history page
  };

  const profileImageUrl = 'https://randomuser.me/api/portraits/men/1.jpg';

  return (
    <View style={styles.container}>
      {/* Profile picture */}
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

      {/* Greeting text */}
      <Text style={styles.greetingText}>Hola, {user?.name || 'Usuario'}</Text>

      {/* Current balance */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Current Balance: $123.45</Text>
      </View>

      {/* Buttons for Send and Receive */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSendPress}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleReceivePress}>
          <Text style={styles.buttonText}>Receive by QR</Text>
        </TouchableOpacity>
      </View>

      {/* Transaction history button */}
      <TouchableOpacity style={styles.transactionButton} onPress={handleTransactionHistoryPress}>
        <Text style={styles.transactionButtonText}>Transaction History</Text>
      </TouchableOpacity>

      {/* Latest transactions text */}
      <Text style={styles.latestTransactionsText}>Latest Transactions</Text>

      {/* Here you would map and display the latest transactions */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#1B192E',
    padding: 20,
  },
  profileCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    marginBottom: 20,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  greetingText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  balanceContainer: {
    backgroundColor: '#6B2062',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },
  balanceText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'transparent', // Make the button background transparent
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '45%',
    borderWidth: 2, // Add a white border
    borderColor: '#FFFFFF', // Set the border color to white
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // Make the text white
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionButton: {
    backgroundColor: 'transparent', // Make the button background transparent
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2, // Add a white border
    borderColor: '#FFFFFF', // Set the border color to white
  },
  transactionButtonText: {
    color: '#FFFFFF', // Make the text white
    fontSize: 16,
    fontWeight: 'bold',
  },
  latestTransactionsText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
