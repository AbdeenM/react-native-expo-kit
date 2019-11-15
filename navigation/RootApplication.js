import React from 'react';
import { connect } from 'react-redux';
import { StatusBar } from 'react-native';
import { AsyncStorage, View } from 'react-native';

import AppNavigator from './AppNavigator';
import { fetchHome } from '../screens/home/HomeActions';

const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
    theme: state.theme
})

const mapDispatchToProps = {
    // ... normally is an object full of action creators
    //fetchHome
}

class RootNavigator extends React.Component {
    state = {
        loading: true
    };

    componentDidMount = async () => {
        StatusBar.setBarStyle(this.props.theme.dark ? 'light-content' : 'dark-content')

        // ... make any initial fetching requests to your server here
        // const userId = await AsyncStorage.getItem('userId')
        // i.e. this.props.fetchHome(userId)
        this.setState({ loading: false })
    };

    render() {
        if (this.state.loading) {
            {/** Return any loading screen here if wanted */ }
            return <View />
        };

        return (
            <AppNavigator theme={this.props.theme.dark ? 'dark' : 'light'} />
        );
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RootNavigator);
