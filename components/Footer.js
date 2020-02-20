import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/dist/Feather'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Footer extends Component {
    render() {
        return (
            <View style={ css.footer } >
                <View style={ css.iconRow } >
                    <Icon name="home" size={30} style={ css.iconMargin } />
                    <Icon name="search" size={30} style={ css.iconMargin } />
                    <Icon name="plus-circle" size={30} style={ css.iconMargin } />
                    <Icon name="heart" size={30} style={ css.iconMargin } />
                    <Icon name="user" size={30} />
                </View>
            </View>
        )
    }
}

const css = StyleSheet.create({
    footer: {
        height: 50,
        padding: 10,
        backgroundColor: '#fff',
        justifyContent: 'flex-end'
    },
    iconRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: 15,
    },
    iconMargin: {
        marginRight: 40,
    }

})

export default Footer