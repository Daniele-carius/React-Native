import { StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
   marginBottom: 20,
  },
  searchButton: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 8,
   
    
  },
  countryCode: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginRight: 20,
    
   
  },
  input: {
    flex: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  button: {
    width: '100%',
    marginVertical: 10,
   
  },
  footerText: {
    marginTop: 20,
    fontSize: 16,
    color: 'black',
  },
  footerLink: {
    color: 'blue',
    fontWeight: 'bold',
  },
});