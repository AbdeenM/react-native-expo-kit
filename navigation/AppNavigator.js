/* **************************************************************************
 * Copyright (C) TAKA Application, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Abdeen Mohamed <abdeen.mohamed@outlook.com>, September 2019
 ************************************************************************** */

import React from 'react';
import { Transition } from 'react-native-reanimated';
import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import LoadingScreen from '../screens/LoadingScreen';

export default createAppContainer(
	createAnimatedSwitchNavigator(
		{
			Loading: LoadingScreen,
			Auth: AuthNavigator,
			Main: MainNavigator
		},
		{
			initialRouteName: 'Loading',
			transition: (
				<Transition.Together>
					<Transition.Out
						type='fade'
						durationMs={500}
						interpolation='easeInOut' />

					<Transition.In
						type='fade'
						durationMs={500}
						interpolation='easeInOut' />
				</Transition.Together>
			)
		}
	)
);
