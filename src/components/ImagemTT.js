import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


class ImagemTT extends Component {
    render(){
        let imagem = 'https://image.flaticon.com/icons/png/512/34/34562.png'
        return(
            <View style={style.container}>
                <Image
                    source={{uri: imagem}}
                    style={{ width: this.props.largura, height: this.props.altura }}
                />
                
            </View>
        )

    }
}

export default ImagemTT;

const style = StyleSheet.create({
    container:{
        margin: 20,
        justifyContent: 'center',
        textAlign: 'center'
    }
})