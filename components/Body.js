import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/dist/Feather'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Body extends Component {
    render() {
        return (
            <View style={ css.body } >
                <Text>Welcome to Instagram</Text>
            </View>
        )
    }
}

const css = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Body