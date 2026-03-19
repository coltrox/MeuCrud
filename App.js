import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'; 
import AddEditScreen from './src/screens/AddEditScreen';
import { LogBox } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#4CAF50' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Lista de Pessoas' }}
        />
                <Stack.Screen 
          name="AddEdit" 
          component={AddEditScreen} 
          options={{ title: 'Cadastro / Edição' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}