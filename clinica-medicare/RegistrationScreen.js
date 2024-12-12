import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Navbar from './Navbar'; // Asegúrate de que la ruta sea correcta

const RegistrationScreen = () => {
  const [apellido, setApellido] = useState('');
  const [nombres, setNombres] = useState('');
  const [email, setEmail] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Registrando con:', apellido, nombres, email, documentType, documentNumber, password);
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.registrationContainer}>
        <Text style={styles.title}>¡Bienvenido a Medicare!</Text>
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          value={apellido}
          onChangeText={setApellido}
        />
        <TextInput
          style={styles.input}
          placeholder="Nombres"
          value={nombres}
          onChangeText={setNombres}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Tipo de documento"
          value={documentType}
          onChangeText={setDocumentType}
        />
        <TextInput
          style={styles.input}
          placeholder="Número de documento"
          value={documentNumber}
          onChangeText={setDocumentNumber}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>REGISTRARSE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  registrationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    color: '#000000',
    fontWeight: 'light',
  },
  input: {
    height: 40,
    borderColor: '#000000',
    borderRadius: 5,
    borderWidth: 1.5,
    marginBottom: 15,
    paddingLeft: 10,
    width: '80%',
  },
  button: {
    backgroundColor: '#B6D6FF',
    padding: 10,
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default RegistrationScreen;
