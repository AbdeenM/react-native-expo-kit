import { createStackNavigator } from 'react-navigation-stack';

import WelcomeScreen from '../screens/auth/WelcomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';

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
