import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    fontSize: 16,
    color: '#000',
  },
  searchButton: {
    color: '#ff3b5c',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff3b5c',
    marginBottom: 8,
  },
  suggestions: {
    marginBottom: 16,
  },
  suggestionItem: {
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
    fontWeight: 'bold'
  },
  watched: {
    color: '#ff3b5c',
    fontWeight: 'bold',
  },
  searched: {
    color: '#ff3b5c',
    fontWeight: 'bold',
  },
  popularSearches: {
    marginBottom: 16,
  },
  popularItem: {
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
    fontWeight: 'bold'
  },
});

export default styles;