import React from 'react';
import { connect } from 'react-redux';
import { ExpoConfigView } from '@expo/samples';

const mapStateToProps = (state, ownProps) => ({
	// ... computed data from state and optionally ownProps
	theme: state.theme
});

const mapDispatchToProps = {
	// ... normally is an object full of action creators
};

class SettingsScreen extends React.Component {
	static navigationOptions = {
		title: 'app.json',
	};

	/**
	 * Go ahead and delete ExpoConfigView and replace it with your content;
	 * we just wanted to give you a quick view of your config.
	 */
	render() {
		return <ExpoConfigView />;
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SettingsScreen);
