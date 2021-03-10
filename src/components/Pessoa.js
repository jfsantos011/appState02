import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

class Pessoa extends Component {
  render() {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{this.props.nome}</Text>
        <Text>Idade: {this.props.idade}</Text>
        <Text>Email: {this.props.email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#97ECE8',
    padding: 8,
    marginVertical: 8,
  },
  title: {
    fontSize: 32,
  },
});

export default Pessoa;