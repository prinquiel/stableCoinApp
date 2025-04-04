import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Modal, SafeAreaView } from 'react-native';

const Profile = ({ navigation }) => {
  const [currency, setCurrency] = useState('USD');
  const [contacts, setContacts] = useState([
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Mark Lee' }
  ]);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greetingText}>Hello, User</Text>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} // replace with actual image URL
            style={styles.profilePic}
          />
        </View>

        <Text style={styles.userName}>John Doe</Text>

        <Text style={styles.currencyText}>My Currency</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.currencyButton}>
          <Text style={styles.currency}>{currency}</Text>
        </TouchableOpacity>

        <Text style={styles.balanceText}>Account Balance: $500.00</Text>

        <Text style={styles.contactsHeader}>Added Contacts</Text>
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.contactItem}>
              <Text style={styles.contactName}>{item.name}</Text>
            </View>
          )}
        />

        {/* Currency Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Currency</Text>
              <TouchableOpacity onPress={() => setCurrency('USD')} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>USD</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setCurrency('EUR')} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>EUR</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setCurrency('GBP')} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>GBP</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setCurrency('INR')} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>INR</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1B192E',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greetingText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  currencyText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 20,
  },
  currencyButton: {
    marginTop: 5,
    padding: 10,
    backgroundColor: '#FFDD00',
    borderRadius: 5,
  },
  currency: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  balanceText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 20,
  },
  contactsHeader: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 30,
    fontWeight: 'bold',
  },
  contactItem: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#2C2A44',
    borderRadius: 5,
  },
  contactName: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalButton: {
    padding: 10,
    backgroundColor: '#FFDD00',
    borderRadius: 5,
    marginBottom: 10,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFDD00',
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default Profile;
