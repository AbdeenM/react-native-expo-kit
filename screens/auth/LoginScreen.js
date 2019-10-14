import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';

const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
    theme: state.theme
});

const mapDispatchToProps = {
    // ... normally is an object full of action creators
};

class LoginScreen extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: this.props.theme.colors.background
                }}>
                <Text style={{
                    fontSize: 20,
                    marginBottom: 10,
                    fontWeight: 'bold'
                }}>Login Screen</Text>

                <Button
                    title='Go to Register'
                    onPress={() => this.props.navigation.navigate('Register')} />
            </View>
        );
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen);