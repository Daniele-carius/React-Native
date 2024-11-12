import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar conta no TikTok</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Número de Telefone"
        placeholderTextColor="#888"
      />

      <View style={styles.buttonContainer}>
        <Button title="Continuar com o e-mail" onPress={() => {}} />
      </View>

    
      <View style={styles.buttonContainer}>
        <Button title="Continuar com Facebook" onPress={() => {}} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Continuar com Google" onPress={() => {}} />
      </View>
      
      <Text style={styles.footerText}>
        Já tem conta? <Text style={styles.footerLink}>Entrar</Text>
      </Text>
    </View>
  );
};

export default LoginScreen;