import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/home/HomeScreen';
import LinksScreen from '../screens/links/LinksScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

const config = Platform.select({
	web: { headerMode: 'screen' },
	default: {},
});

const HomeStack = createStackNavigator(
	{
		Home: HomeScreen,
	},
	config
);

HomeStack.navigationOptions = {
	tabBarLabel: 'Home',
	tabBarIcon: ({ focused }) => (
		<Ionicons
			size={25}
			focused={focused}
			name={
				Platform.OS === 'ios'
					? `ios-information-circle${focused ? '' : '-outline'}`
					: 'md-information-circle'
			}
		/>
	),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
	{
		Links: LinksScreen,
	},
	config
);

LinksStack.navigationOptions = {
	tabBarLabel: 'Links',
	tabBarIcon: ({ focused }) => (
		<Ionicons
			size={25}
			focused={focused}
			name={
				Platform.OS === 'ios'
					? 'ios-link'
					: 'md-link'} />
	),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
	{
		Settings: SettingsScreen,
	},
	config
);

SettingsStack.navigationOptions = {
	tabBarLabel: 'Settings',
	tabBarIcon: ({ focused }) => (
		<Ionicons
			size={25}
			focused={focused}
			name={
				Platform.OS === 'ios'
					? 'ios-options'
					: 'md-options'} />
	),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
	HomeStack,
	LinksStack,
	SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
