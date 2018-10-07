import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import DecksScreen from '../screens/DecksScreen';
import NewDeckScreen from '../screens/NewDeckScreen';
import { russianViolet, tabIconDefault } from '../constants/Colors';

const DecksStack = createStackNavigator({
  Decks: DecksScreen,
});

DecksStack.navigationOptions = {
  tabBarLabel: 'Decks',
  tabBarOptions: {
    activeTintColor: russianViolet,
    inactiveTintColor: tabIconDefault,
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const NewDeckStack = createStackNavigator({
  NewDeck: NewDeckScreen,
});

NewDeckStack.navigationOptions = {
  tabBarLabel: 'New Deck',
  tabBarOptions: {
    activeTintColor: russianViolet,
    inactiveTintColor: tabIconDefault,
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-add-circle${focused ? '' : '-outline'}` : 'add-circle'}
    />
  ),
};


export default createBottomTabNavigator({
  DecksStack,
  NewDeckStack,
});
