import React from 'react';
import { View, Text, TextInput} from 'react-native';
import styles from './styles2';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="pesquisar"
          placeholderTextColor="black"
        />
        <Text style={styles.searchButton}>Procurar</Text>
      </View>

      <View>
        <Text style={styles.sectionTitle}>Você pode gostar</Text>
        <View style={styles.suggestions}>
          <Text style={styles.suggestionItem}>• salada </Text>
          <Text style={styles.suggestionItem}>• comedia</Text>
          
        </View>

        <Text style={styles.sectionTitle}>Pesquisas populares</Text>
        <View style={styles.popularSearches}>
          <Text style={styles.popularItem}>• Me Mimei - Meme Original</Text>
          <Text style={styles.popularItem}>• Fim Da Escala 6 X 1?</Text>
        
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;