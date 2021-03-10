import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class TextoFinal extends Component {

    render(){
        return(
            <View>
                <Text style={styles.tit}>{this.props.titFinal}</Text>
            </View>
        )
    }
}

export default TextoFinal;

const styles = StyleSheet.create({
    tit: {
        color: '#FFF',
        fontSize: 25,
        textAlign: 'center'
    }
    
})