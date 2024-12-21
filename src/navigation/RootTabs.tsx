import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import TeamDetails from './TeamDetails';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'TeamDetails') {
              iconName = 'person';
            } else {
              iconName = 'alert'
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="TeamDetails" component={TeamDetails} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
