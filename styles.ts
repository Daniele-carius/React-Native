import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 5,
    color:'black'
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: '#888',
  },
  footerLink: {
    color: '#1a73e8',
    fontWeight: 'bold',
  },
});

export default styles;