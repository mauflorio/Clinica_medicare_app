// Importaciones necesarias desde React y React Native
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// Importación de hook para navegación desde React Navigation
import { useNavigation } from '@react-navigation/native';

// Definición del componente Navbar
const Navbar = () => {
  // Uso del hook useNavigation para manejar la navegación
  const navigation = useNavigation();

  return (
    // Componente raíz View que envuelve el contenido de la barra de navegación
    <View>
      {/* Contenedor de la barra de navegación superior */}
      <View style={styles.navbar}>
        {/* Logo de la clínica que redirige a la pantalla de inicio al hacer clic */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.logo}>CLINICA MEDICARE</Text>
        </TouchableOpacity>
        {/* Botón de iniciar sesión - redirige a la pantalla de inicio de sesión al hacer clic */}
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
      {/* Contenedor de los elementos de navegación adicionales debajo de la barra superior */}
      <View style={styles.navItems}>
        {}
        <TouchableOpacity onPress={() => navigation.navigate('SolicitarTurno')}>
          <Text style={styles.navItem}>Solicitar turno</Text>
        </TouchableOpacity>
        {}
        <TouchableOpacity onPress={() => navigation.navigate('MisDatos')}>
          <Text style={styles.navItem}>Mis datos</Text>
        </TouchableOpacity>
        {}
        <TouchableOpacity onPress={() => navigation.navigate('MisTurnos')}>
          <Text style={styles.navItem}>Mis turnos</Text>
        </TouchableOpacity>
        {}
        <TouchableOpacity onPress={() => navigation.navigate('Recetas')}>
          <Text style={styles.navItem}>Recetas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Definición de los estilos usando StyleSheet
const styles = StyleSheet.create({
  // Estilo para la barra de navegación superior
  navbar: {
    flexDirection: 'row', // Elementos en una fila
    alignItems: 'center', 
    justifyContent: 'space-between', 
    backgroundColor: '#8DB2E2', 
    paddingVertical: 10, // Espaciado vertical
    paddingHorizontal: 15, 
  },
  
  logo: {
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#000', 
  },
  // Estilo para el contenedor de elementos de navegación adicionales
  navItems: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    backgroundColor: '#8DB2E2', 
    paddingVertical: 10, 
  },
  
  navItem: {
    fontSize: 16, 
    color: '#000', 
  },
 
  loginButton: {
    justifyContent: 'flex-end', 
  },

  loginText: {
    fontSize: 16, 
    color: '#000',
  },
});

// Exportación del componente Navbar 
export default Navbar;









