import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LogIn = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});

  const updateFormField = useCallback((field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }));
    
    setErrors(prevErrors => {
      if (prevErrors[field]) {
        const newErrors = {...prevErrors};
        delete newErrors[field];
        return newErrors;
      }
      return prevErrors;
    });
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};
    let isValid = true;
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  }, [formData]);

  const handleSubmit = useCallback(() => {
    if (validateForm()) {
      // Aquí va tu lógica de login
      navigation.navigate('Home');
    } else {
      Alert.alert(
        "Validation Error",
        "Please check the form for errors",
        [{ text: "OK" }]
      );
    }
  }, [validateForm, navigation]);

  const inputFields = [
    {
      field: 'email',
      placeholder: 'Email',
      keyboardType: 'email-address',
      secureTextEntry: false
    },
    {
      field: 'password',
      placeholder: 'Password',
      keyboardType: 'default',
      secureTextEntry: true
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#6B3062" />
        </TouchableOpacity>
        <Text style={styles.text}>Log In</Text>
      </View>

      <View style={styles.form}>
        {inputFields.map(({ field, placeholder, keyboardType, secureTextEntry }) => (
          <View key={field} style={styles.inputContainer}>
            <TextInput
              style={[styles.input, errors[field] ? styles.inputError : null]}
              placeholder={placeholder}
              placeholderTextColor="#FFFFFF"
              value={formData[field]}
              onChangeText={(text) => updateFormField(field, text)}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
            />
            {errors[field] ? (
              <Text style={styles.errorText}>{errors[field]}</Text>
            ) : null}
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')} // Navegar a la pantalla SignUp
        style={styles.signUpTextContainer}
      >
        <Text style={styles.signUpText}>I don't have an account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B192E',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  backButton: {
    marginRight: 10,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '500',
  },
  form: {
    width: '100%',
    marginTop: 220,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 15,
    color: '#FFFFFF',
    fontSize: 16,
  },
  inputError: {
    borderColor: '#FF6B6B',
  },
  errorText: {
    color: '#FF6B6B',
    fontSize: 12,
    marginLeft: 15,
    marginTop: 5,
  },
  button: {
    width: '60%',
    backgroundColor: '#6B3062',
    borderRadius: 25,
    paddingVertical: 12,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpTextContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  signUpText: {
    color: '#6B3062',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default LogIn;
