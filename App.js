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
        {id: '1', nome: 'Abacaxi', valor: '4.50', qtde: 10, desconto: '5', marca: 'Pérola' , reef: '001' , promocao: '3 pg 2'},
        {id: '2', nome: 'Arroz', valor: '27.00', qtde: 30, desconto: '5', marca: 'Vasconcelos' , reef: '002' , promocao: '3 pg 2' },
        {id: '3', nome: 'Feijão', valor: '6.97', qtde: 50, desconto: '5', marca: 'Vasconcelos' , reef: '003' , promocao: '3 pg 2' },
        {id: '4', nome: 'Laranja', valor: '3.50', qtde: 90, desconto: '5', marca: 'Pêra' , reef: '004' , promocao: '3 pg 2' },
        {id: '5', nome: 'Café', valor: '10.00', qtde: 80, desconto: '5', marca: 'Três Corações' , reef: '005' , promocao: '3 pg 2' },
        {id: '6', nome: 'Óleo', valor: '8.00', qtde: 60, desconto: '5', marca: 'Sóia' , reef: '006' , promocao: '3 pg 2' },
        {id: '7', nome: 'Açucar', valor: '10.90', qtde: 70, desconto: '5', marca: 'Delta' , reef: '007' , promocao: '3 pg 2' },
        {id: '8', nome: 'Macarrão', valor: '3.80', qtde: 120, desconto: '5', marca: 'Vilma' , reef: '008' , promocao: '3 pg 2' },
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
                valor={item.valor}
                qtde={item.qtde}
                desconto={item.desconto}
                marca={item.marca}
                reef={item.reef}
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