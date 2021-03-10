import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text } from 'react-native';
import ImagemTT from './src/components/ImagemTT';
import Produto from './src/components/Produto';
import TextoFinal from './src/components/TextoFinal';
import TituloPD from './src/components/TituloPD'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {id: '1', nome: 'Abacaxi', Valor: '4.50', Qtdade: 10, desconto: '5', Marca: 'Pérola' , Ref: '001' , promocao: '3 pg 2'},
        {id: '2', nome: 'Arroz', Valor: 27.00, Qtdade: 30, desconto: '5', Marca: 'Vasconcelos' , Ref: '002' , promocao: '3 pg 2' },
        {id: '3', nome: 'Feijão', Valor: 6.97, Qtdade: 50, desconto: '5', Marca: 'Vasconcelos' , Ref: '003' , promocao: '3 pg 2' },
        {id: '4', nome: 'Laranja', Valor: 3.50, Qtdade: 90, desconto: '5', Marca: 'Pêra' , Ref: '004' , promocao: '3 pg 2' },
        {id: '5', nome: 'Café', Valor: 10.00, Qtdade: 80, desconto: '5', Marca: 'Três Corações' , Ref: '005' , promocao: '3 pg 2' },
        {id: '6', nome: 'Óleo', Valor: 8.00, Qtdade: 60, desconto: '5', Marca: 'Sóia' , Ref: '006' , promocao: '3 pg 2' },
        {id: '7', nome: 'Açucar', Valor: 10.90, Qtdade: 70, desconto: '5', Marca: 'Delta' , Ref: '007' , promocao: '3 pg 2' },
        {id: '8', nome: 'Macarrão', Valor: 3.80, Qtdade: 120, desconto: '5', Marca: 'Vilma' , Ref: '008' , promocao: '3 pg 2' },
      ],
    };
  }

  render(){
    return(      
      <View style={{flex: 1}}>
        <View style={{height: 70, backgroundColor: 'blue'}}>
        <ImagemTT
          largura={40}
          altura={40}
        />
        </View>
        <View style={{height: 70, backgroundColor: 'white'}}>
          <TituloPD titPD="Lista de Produtos"/>
        </View>
        <View style={{flex:1, backgroundColor: 'white'}}>		      
        		<FlatList
              data={this.state.feed}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => (              
              <Produto 
                nome={item.nome}
                Qtdade={item.Qtdade}
                desconto={item.desconto}
                Marca={item.Marca}
                Ref={item.Ref}
                promocao={item.promocao}/>
              )}
            />          
	      </View>
        <View style={{height: 70, backgroundColor: 'black'}}>
          <TextoFinal titFinal="Products Bela Vista - 2021"/>          
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  textUm:{
    fontSize: 25,
    color: '#FFF'
  },
  textDois:{
    fontSize: 25,
    color: 'red'
  },
  textoAlinha:{
    textAlign: 'center'
  }
});

export default App;