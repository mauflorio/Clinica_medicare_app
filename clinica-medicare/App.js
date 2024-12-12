import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import LoginScreen from './LoginScreen'; // Ruta a la pantalla de inicio de sesion
import RegistrationScreen from './RegistrationScreen'; // Ruta a la pantalla de registro
import HomeScreen from './HomeScreen'; // Ruta a la pantalla de Home

const SolicitarTurno = () => <View><Text>Pantalla de Solicitar Turno</Text></View>;
const MisDatos = () => <View><Text>Pantalla de Mis Datos</Text></View>;
const MisTurnos = () => <View><Text>Pantalla de Mis Turnos</Text></View>;
const Recetas = () => <View><Text>Pantalla de Recetas</Text></View>;

const Stack = createStackNavigator();
// Definición del componente principal de la aplicación
const App = () => {
  // NavigationContainer da navegación a toda la aplicación
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SolicitarTurno" component={SolicitarTurno} />
        <Stack.Screen name="MisDatos" component={MisDatos} />
        <Stack.Screen name="MisTurnos" component={MisTurnos} />
        <Stack.Screen name="Recetas" component={Recetas} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registro" component={RegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Exportación del componente App para su uso en otras partes de la aplicación
export default App;




