import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';


const categories = [
  { name: 'Entreterimento'},
  { name: 'Saúde e Beleza'},
  { name: 'Comida' },
  { name: 'Dança'},
];


const Categorya = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>

          <Button title="Entreterimento" onPress={() => {}} />
          <Button title="Saude e Beleza" onPress={() => {}} />
          <Button title="Comida" onPress={() => {}} />
          <Button title="Danca" onPress={() => {}} />
  
    </View>
  );
};

export default Categorya;