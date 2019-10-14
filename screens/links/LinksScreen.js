import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

const mapStateToProps = (state, ownProps) => ({
	// ... computed data from state and optionally ownProps
	theme: state.theme
});

const mapDispatchToProps = {
	// ... normally is an object full of action creators
};

class LinksScreen extends React.Component {
	static navigationOptions = {
		title: 'Links',
	};

	render() {
		return (
			<ScrollView style={{
				...styles.container
			}}>
				{/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
				<ExpoLinksView />
			</ScrollView>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LinksScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15
	},
});
