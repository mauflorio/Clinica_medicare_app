import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from './Navbar'; // ruta para importar el componente navbar

const LoginScreen = () => {
  const [documentType, setDocumentType] = useState('DNI');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('Iniciar sesión con:', documentType, number, password);
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.loginContainer}>
        <Text style={styles.title}>¡Bienvenido a Medicare!</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Tipo de documento</Text>
          <TextInput
            style={styles.input}
            value={documentType}
            onChangeText={setDocumentType}
            placeholder="DNI"
          />
          <Text style={styles.label}>Número</Text>
          <TextInput
            style={styles.input}
            value={number}
            onChangeText={setNumber}
            placeholder=""
          />
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder=""
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>INGRESAR</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
          <Text style={styles.link}>¿No tenes una cuenta? Registrate</Text>
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
  loginContainer: {
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
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000000',
  },
  input: {
    height: 40,
    borderColor: '#000000',
    borderRadius: 5,
    borderWidth: 1.5,
    marginBottom: 15,
    paddingLeft: 10,
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
  link: {
    color: '#0000FF',
    marginTop: 10,
  },
});

export default LoginScreen;


