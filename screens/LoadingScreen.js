import React from 'react'
import { connect } from 'react-redux'
import { View, AsyncStorage, Text } from 'react-native'

const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
    theme: state.theme
})

const mapDispatchToProps = {
    // ... normally is an object full of action creators
}

class LoadingScreen extends React.Component {
    componentDidMount = async () => {
        const userId = await AsyncStorage.getItem('userId')
        this.props.navigation.navigate(userId ? 'Main' : 'Auth')
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
                    fontWeight: 'bold'
                }}>Loading Screen</Text>
            </View>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoadingScreen)
