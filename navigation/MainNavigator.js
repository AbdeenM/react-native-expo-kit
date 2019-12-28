import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/home/HomeScreen';
import LinksScreen from '../screens/links/LinksScreen';
import { lightTheme, darkTheme } from '../config/theme/Themes';
import SettingsScreen from '../screens/settings/SettingsScreen';

const config = Platform.select({
	web: { headerMode: 'screen' },
	default: {},
});

const HomeStack = createStackNavigator(
	{
		Home: HomeScreen
	},
	config
);

HomeStack.navigationOptions = ({ theme }) => {
	return {
		tabBarLabel: 'Home',
		tabBarIcon: ({ focused }) => (
			<Ionicons
				size={25}
				focused={focused}
				name={Platform.OS === 'ios'
					? `ios-information-circle${focused ? '' : '-outline'}`
					: 'md-information-circle'
				}
				color={focused
					? theme === 'dark'
						? darkTheme.colors.primary
						: lightTheme.colors.primary
					: theme === 'dark'
						? darkTheme.colors.placeholder
						: lightTheme.colors.placeholder} />
		)
	}
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
	{
		Links: LinksScreen
	},
	config
);

LinksStack.navigationOptions = ({ theme }) => {
	return {
		tabBarLabel: 'Links',
		tabBarIcon: ({ focused }) => (
			<Ionicons
				size={25}
				focused={focused}
				name={Platform.OS === 'ios'
					? 'ios-link'
					: 'md-link'}
				color={focused
					? theme === 'dark'
						? darkTheme.colors.primary
						: lightTheme.colors.primary
					: theme === 'dark'
						? darkTheme.colors.placeholder
						: lightTheme.colors.placeholder} />
		)
	}
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
	{
		Settings: SettingsScreen,
	},
	config
);

SettingsStack.navigationOptions = ({ theme }) => {
	return {
		tabBarLabel: 'Settings',
		tabBarIcon: ({ focused }) => (
			<Ionicons
				size={25}
				focused={focused}
				name={Platform.OS === 'ios'
					? 'ios-options'
					: 'md-options'}
				color={focused
					? theme === 'dark'
						? darkTheme.colors.primary
						: lightTheme.colors.primary
					: theme === 'dark'
						? darkTheme.colors.placeholder
						: lightTheme.colors.placeholder} />
		)
	}
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator(
	{
		HomeStack,
		LinksStack,
		SettingsStack,
	},
	{
		initialRouteName: 'HomeStack',
		tabBarOptions: {
			pressColor: {
				dark: darkTheme.colors.primary,
				light: lightTheme.colors.primary
			},
			activeTintColor: {
				dark: darkTheme.colors.primary,
				light: lightTheme.colors.primary
			},
			activeBackgroundColor: {
				dark: darkTheme.colors.background,
				light: lightTheme.colors.background
			},
			inactiveTintColor: {
				dark: darkTheme.colors.placeholder,
				light: lightTheme.colors.placeholder
			},
			inactiveBackgroundColor: {
				dark: darkTheme.colors.background,
				light: lightTheme.colors.background
			},
			showLabel: true,
			showIcon: true,
			allowFontScaling: true,
			style: {
				shadowRadius: 5,
				borderTopWidth: 0,
				shadowOpacity: 0.3,
				shadowColor: {
					dark: darkTheme.colors.text,
					light: lightTheme.colors.text
				},
				shadowOffset: {
					width: 1,
					height: 1
				}
			}
		}
	});

tabNavigator.path = '';

export default tabNavigator;
