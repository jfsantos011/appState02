import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

class Produto extends Component {
  render() {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{this.props.nome}</Text>
        <View style={styles.data}>
          <View style={{marginRight: 15}}>
            <Text style={styles.textItem}>Valor: R$ {this.props.valor}</Text>
            <Text style={styles.textItem}>Qtdade: {this.props.qtde}</Text>
            <View style={styles.desconto}>
              <Text style={styles.TextDesconto}>
                {this.props.desconto}% de desconto
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.textItem}>Marca: {this.props.marca}</Text>
            <Text style={styles.textItem}>Ref: {this.props.reef}</Text>
            <View style={styles.promocao}>
              <Text style={styles.TextPromocao}>{this.props.promocao}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#C2C2C2',
    padding: 15,
    marginVertical: 8,
  },
  title: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  data: {
    flex: 1,
    flexDirection: 'row',
  },
  textItem: {
    color: 'white',
    fontWeight: 'bold',
    margin: 3,
  },
  desconto: {
    backgroundColor: '#72BB53',
    maxWidth: 120,
    padding: 5,
  },
  TextDesconto: {
    color: 'white',
  },
  promocao: {
    backgroundColor: '#FF8351',
    maxWidth: 120,
    padding: 5,
  },
  TextPromocao: {
    color: 'white',
  },
});

export default Produto;