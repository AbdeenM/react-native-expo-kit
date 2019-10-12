import React from 'react'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Asset } from 'expo-asset'
import Constants from 'expo-constants'
import { AsyncStorage } from 'react-native'
import { persistStore } from 'redux-persist'
import { Provider as StoreProvider } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { PersistGate } from 'redux-persist/lib/integration/react'

import Store from './redux/Store'
import RootApplication from './navigation/RootApplication'

// AsyncStorage.clear()
const Presistor = persistStore(Store)

export default class App extends React.Component {
	state = {
		isLoading: true
	}

	_loadApplication = async () => {
		await Asset.loadAsync([
			require('./assets/robot-dev.png'),
			require('./assets/robot-prod.png'),
			require('./assets/editProfile-background.png')
		])

		await Font.loadAsync({
			// This is the font that we are using for our tab bar
			...Ionicons.font,
			// We include SpaceMono because we use it in HomeScreen.js. Feel free to
			// remove this if you are not using it in your app
			'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
		})
	}

	_handleLoadingError = (error) => {
		// In this case, you might want to report the error to your error reporting
		// service, for example Sentry
		console.log(error)
	}

	render() {
		if (this.state.isLoading) {
			return (
				<AppLoading
					startAsync={() => this._loadApplication()}
					onError={(error) => this._handleLoadingError(error)}
					onFinish={() => this.setState({ isLoading: false })} />
			)
		}

		return (
			<View style={styles.container}>
				<StoreProvider store={Store}>
					<PersistGate
						loading={null}
						persistor={Presistor}>
						<RootApplication />
					</PersistGate>
				</StoreProvider>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Constants.manifest.primaryColor
	}
})
