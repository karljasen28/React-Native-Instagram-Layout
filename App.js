import React, { Component } from 'react'
import { View } from 'react-native'

import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

class App extends Component {
    render() {
        return (
            <View style={{flex: 1,}}>
                <Header />
                <Body />
                <Footer />
            </View>
        )
    }
}

export default App