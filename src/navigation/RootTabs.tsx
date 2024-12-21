import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // For tab icons
import HomeScreen from './HomeScreen';
import AboutMe from './AboutMe';

const Tab = createBottomTabNavigator();

type IconName = string;

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: IconName = "home";

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'AboutMe') {
              iconName = 'person';
            } else {
              iconName = 'alert'
            }

            return <Ionicons name={iconName as any} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="AboutMe" component={AboutMe} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
