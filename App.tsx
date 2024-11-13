import React from 'react';
import { View, Text, TextInput, Button, ImageBackground} from 'react-native';
import styles from './styles';
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar conta no TikTok</Text>

      <View style={styles.phoneContainer}>
        <View style={styles.countryCode}>
          <Text>+55</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Numero de Telefone"
          placeholderTextColor="black"
        />
         
      </View>
      <View style={styles.button}>
      <Button title="Continuar" />
      </View>

      <View style={styles.button}>
        <Button title="Continuar com o e-mail" />
      </View>
      <View style={styles.button} > 
        <Button title="Continuar com Facebook" />
      </View>
      <View style={styles.button}>
        <Button title="Continuar com Google" />
      </View>

      <Text style={styles.footerText}>
        Ja tem conta ? <Text style={styles.footerLink}>Entrar</Text>
      </Text>
    </View>
  );
};

export default LoginScreen;