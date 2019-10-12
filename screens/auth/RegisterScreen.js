import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, AsyncStorage } from 'react-native'

const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
    theme: state.theme
})

const mapDispatchToProps = {
    // ... normally is an object full of action creators
}

class RegisterScreen extends React.Component {
    _onRegisterUserPress = async () => {
        // ... process all your api server requests to register your user to your database and then store an id to AsyncStorage.
        const userId = 'ID_OR_ANY_ITEM_CONFIRMATION_FROM_SERVER'

        await AsyncStorage.setItem('userId', userId)
        this.props.naviagtion.navigate('Loading')
    }

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
                }}>Register Screen</Text>

                <Button
                    title='Register User'
                    onPress={() => this._onRegisterUserPress()} />
            </View>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterScreen)
