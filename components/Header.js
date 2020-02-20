import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/dist/Feather'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'

class Header extends Component {
    render() {
        return(
            <View style={ css.header } >
                <View style={ css.headerTop } >
                    <Icon name="camera" size={25} />
                    <Text style={{marginLeft: 15,fontSize: 25,}}>Instagram</Text>
                    <Icon name="send" size={25} style={{marginLeft: '50%'}} />
                </View>
                <ScrollView horizontal={true} style={{padding: 10,borderBottomWidth: 1, borderColor: '#ccc',}} >
                    <View style={ css.storyContainer }>
                        <Image 
                            source={require('./assets/imgaes/karl.png')}
                            style={ css.story }
                        />
                        <Text style={ css.storyName } >Karl Jasen</Text>
                    </View>
                    <View style={ css.storyContainer }>
                        <Image 
                            source={require('./assets/imgaes/june.png')}
                            style={ css.story }
                        />
                        <Text style={ css.storyName } >June Amante</Text>
                    </View>
                    <View style={ css.storyContainer }>
                        <Image 
                            source={require('./assets/imgaes/berly.png')}
                            style={ css.story }
                        />
                        <Text style={ css.storyName } >Beverly May</Text>
                    </View>
                    <View style={ css.storyContainer }>
                        <Image 
                            source={require('./assets/imgaes/sam.png')}
                            style={ css.story }
                        />
                        <Text style={ css.storyName } >Sam Smith</Text>
                    </View>
                    <View style={ css.storyContainer }>
                        <Image 
                            source={require('./assets/imgaes/john.png')}
                            style={ css.story }
                        />
                        <Text style={ css.storyName } >John Mark</Text>
                    </View>
                    <View style={ css.storyContainer }>
                        <Image 
                            source={require('./assets/imgaes/artist.png')}
                            style={ css.story }
                        />
                        <Text style={ css.storyName } >Accoustic</Text>
                    </View>
                    <View style={ css.storyContainer }>
                        <Image 
                            source={require('./assets/imgaes/clown.png')}
                            style={ css.story }
                        />
                        <Text style={ css.storyName } >Joker Clown</Text>
                    </View>
                    <View style={ css.storyContainer }>
                        <Image 
                            source={require('./assets/imgaes/dancer.png')}
                            style={ css.story }
                        />
                        <Text style={ css.storyName } >Hip</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const css = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
    },
    headerTop: {
        padding: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    story: {
        width: 55,
        height: 55,
        borderWidth: 2,
        borderColor: 'salmon',
        borderRadius: 100 / 2,
    },
    storyName: {
        fontSize: 12,
    },
    storyContainer: {
        alignItems: 'center',
        marginLeft: 10,
    }
})

export default Header
