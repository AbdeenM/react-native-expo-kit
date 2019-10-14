import React from 'react';
import { connect } from 'react-redux';
import * as WebBrowser from 'expo-web-browser';
import {
	Image,
	Platform,
	ScrollView,
	Text,
	StyleSheet,
	TouchableOpacity,
	View,
	Switch
} from 'react-native';

import { switchTheme } from '../../config/theme/ThemeActions';

const mapStateToProps = (state, ownProps) => ({
	// ... computed data from state and optionally ownProps
	theme: state.theme
});

const mapDispatchToProps = {
	// ... normally is an object full of action creators
	switchTheme
};

class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null,
	};

	handleLearnMorePress = () => {
		WebBrowser.openBrowserAsync(
			'https://docs.expo.io/versions/latest/workflow/development-mode/'
		);
	};

	handleHelpPress = () => {
		WebBrowser.openBrowserAsync(
			'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
		);
	};

	_switchToggle = async () => {
		await this.props.switchTheme(this.props.theme.dark);
	};

	render() {
		const DevelopmentModeNotice = () => {
			if (__DEV__) {
				const learnMoreButton = (
					<Text onPress={this.handleLearnMorePress} style={styles.helpLinkText}>
						Learn more
     				</Text>
				);

				return (
					<Text style={{
						...styles.developmentModeText,
						color: this.props.theme.colors.text
					}}>
						Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
					</Text>
				);
			} else {
				return (
					<Text style={{
						...styles.developmentModeText,
						color: this.props.theme.colors.text
					}}>
						You are not in development mode: your app will run at full speed.
      				</Text>
				);
			}
		}

		return (
			<View style={{
				...styles.container,
				backgroundColor: this.props.theme.colors.background
			}}>
				<ScrollView
					style={{
						...styles.container,
						backgroundColor: this.props.theme.colors.background
					}}
					contentContainerStyle={styles.contentContainer}>
					<View style={styles.welcomeContainer}>
						<Image
							source={
								__DEV__
									? require('../../assets/images/robot-dev.png')
									: require('../../assets/images/robot-prod.png')
							}
							style={styles.welcomeImage}
						/>
					</View>

					<View style={styles.getStartedContainer}>
						<DevelopmentModeNotice />

						<Text style={{
							...styles.getStartedText,
							color: this.props.theme.colors.primary
						}}>Get started by opening</Text>

						<View
							style={[styles.codeHighlightContainer, styles.homeScreenFilename, { backgroundColor: this.props.theme.colors.surface }]}>
							<Text style={styles.helpLinkText}>screens/home/HomeScreen.js</Text>
						</View>

						<Text style={{
							...styles.getStartedText,
							color: this.props.theme.colors.primary
						}}>
							Change this text and your app will automatically reload.
          				</Text>
					</View>

					<View style={styles.helpContainer}>
						<TouchableOpacity onPress={this.handleHelpPress} style={styles.helpLink}>
							<Text style={styles.helpLinkText}>
								Help, it didn’t automatically reload!
            				</Text>
						</TouchableOpacity>
					</View>

					<View style={{
						marginVertical: 10,
						alignItems: 'center',
						justifyContent: 'center'
					}}>
						<Text style={{
							fontWeight: 'bold',
							marginVertical: 10,
							color: this.props.theme.colors.primary
						}}>ENABLE DARK THEME</Text>

						<Switch
							value={this.props.theme.dark}
							onValueChange={() => this._switchToggle()} />
					</View>
				</ScrollView>

				<View style={{
					...styles.tabBarInfoContainer,
					shadowColor: this.props.theme.colors.text,
					backgroundColor: this.props.theme.colors.background
				}}>
					<Text style={{
						...styles.tabBarInfoText,
						color: this.props.theme.colors.placeholder
					}}>
						This is a tab bar. You can edit it in:
        			</Text>

					<View
						style={[styles.codeHighlightContainer, styles.navigationFilename, { backgroundColor: this.props.theme.colors.surface }]}>
						<Text style={styles.codeHighlightText}>
							navigation/MainTabNavigator.js
          				</Text>
					</View>
				</View>
			</View>
		);
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	developmentModeText: {
		marginBottom: 20,
		fontSize: 14,
		lineHeight: 19,
		textAlign: 'center',
	},
	contentContainer: {
		paddingTop: 30,
	},
	welcomeContainer: {
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 20,
	},
	welcomeImage: {
		width: 100,
		height: 80,
		resizeMode: 'contain',
		marginTop: 3,
		marginLeft: -10,
	},
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50,
	},
	homeScreenFilename: {
		marginVertical: 7,
	},
	codeHighlightText: {
		fontWeight: 'bold',
	},
	codeHighlightContainer: {
		borderRadius: 3,
		paddingHorizontal: 4,
	},
	getStartedText: {
		fontSize: 17,
		lineHeight: 24,
		textAlign: 'center',
	},
	tabBarInfoContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		...Platform.select({
			ios: {
				shadowOffset: { width: 0, height: -3 },
				shadowOpacity: 0.1,
				shadowRadius: 3,
			},
			android: {
				elevation: 20,
			},
		}),
		alignItems: 'center',
		paddingVertical: 20,
	},
	tabBarInfoText: {
		fontSize: 17,
		textAlign: 'center',
	},
	navigationFilename: {
		marginTop: 5,
	},
	helpContainer: {
		marginTop: 15,
		alignItems: 'center',
	},
	helpLink: {
		paddingVertical: 15,
	},
	helpLinkText: {
		fontSize: 14,
		color: '#2e78b7',
	},
});
