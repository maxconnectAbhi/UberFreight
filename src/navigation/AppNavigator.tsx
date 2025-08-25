import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import your screen components
import MyLoadsScreen from '../screens/MyLoadsScreen';
import AccountScreen from '../screens/AccountScreen';
import BookScreen from '../screens/BookScreen';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Book" component={BookScreen} />
        <Tab.Screen name="My Loads" component={MyLoadsScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;