import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class TituloPD extends Component {

    render(){
        return(
            <View>
                <Text style={styles.tit}>{this.props.titPD}</Text>
            </View>
        )
    }
}

export default TituloPD;

const styles = StyleSheet.create({
    tit: {
        color: '#51A7FF',
        fontSize: 30
    }
    
})