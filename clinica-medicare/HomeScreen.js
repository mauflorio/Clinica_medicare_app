import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Navbar from './Navbar'; // Ruta para importar el componente navbar

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.content}>
        <Text style={styles.title}>¡Bienvenido a Medicare!</Text>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Solicitar turno</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Mis datos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Mis turnos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Recetas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Preguntas frecuentes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#8DB2E2',
    padding: 15,
    alignItems: 'center',
    width: '40%',
    margin: 10,
    borderRadius: 5,
    borderColor: '#185A7B',
    borderWidth: 1.5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;

