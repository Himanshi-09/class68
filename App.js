import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation-tabs';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import TransactionScreen from './Screens/BookTransactionScreen';
import SearchScreen from './Screens/SearchScreen';

export default function App() {
  return (
    <AppContainer/>
  );
}
const TabNavigator = createBottomTabNavigator({
  Transaction:{Screens:TransactionScreen},
  Search:{Screens:SearchScreen}
})
