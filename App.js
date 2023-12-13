import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import { AuthProvider } from './AuthContext'; // Adjust the path accordingly

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={ProfileScreen} />
    {/* Add other profile-related screens here */}
  </Stack.Navigator>
);

const SettingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Settings" component={SettingsScreen} />
    {/* Add other settings-related screens here */}
  </Stack.Navigator>
);

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Profile" component={ProfileStack} />
          <Tab.Screen name="Settings" component={SettingsStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
