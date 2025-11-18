import { StyleSheet } from 'react-native';

const themeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#4a90e2',
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
  cell: {
    width: 70,
    height: 70,
    margin: 5,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cellText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  matchedCell: {
    backgroundColor: '#a5d6a7',
  },
  timer: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4a90e2',
  },
});

export default themeStyles;