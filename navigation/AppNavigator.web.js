/* **************************************************************************
 * Copyright (C) TAKA Application, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Abdeen Mohamed <abdeen.mohamed@outlook.com>, September 2019
 ************************************************************************** */

import { createBrowserApp } from '@react-navigation/web'
import { createSwitchNavigator } from 'react-navigation'

import AuthNavigator from './AuthNavigator'
import MainNavigator from './MainNavigator'
import LoadingScreen from '../screens/LoadingScreen'

const switchNavigator = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    Auth: AuthNavigator,
    Main: MainNavigator
  },
  {
    initialRouteName: 'Loading'
  }
)

switchNavigator.path = ''

export default createBrowserApp(switchNavigator, { history: 'hash' })
