import { createStackNavigator } from 'react-navigation'

import WelcomeScreen from '../screens/auth/WelcomeScreen'

const AuthStack = createStackNavigator(
    {
        Welcome: WelcomeScreen,
        Login: LoginScreen,
        Register: RegisterScreen
    },
    {
        headerMode: 'none',
        initialRouteName: 'Welcome'
    }
)

AuthStack.path = ''

export default AuthStack
