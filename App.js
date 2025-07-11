import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import DashboardScreen from './DashboardScreen';
import PaymentDashboard from './PaymentDashboard';
import { Provider as PaperProvider } from 'react-native-paper';

import RegisterScreen from './Register';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
     <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
      </NavigationContainer>
      </PaperProvider>
  );
}
