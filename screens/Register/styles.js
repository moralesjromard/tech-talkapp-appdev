import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingTop: 25,
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 25,
    position: 'relative',
    height: 40,
    marginTop: 20,
  },
  introTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#333',
    position: 'absolute',
    right: 0,
    left: 0,
    textAlign: 'center',
    pointerEvents: 'none',
  },
  inputsContainer: {
    width: '100%',
    paddingHorizontal: 35,
    position: 'relative',
  },
  button: {
    backgroundColor: '#85BAA1',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    borderRadius: 5,
    height: 50,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFF',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
    marginLeft: 0,
  },
  errorMessageContainer: {
    backgroundColor: '#FFF5F5',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#fc8181',
  },
  errorMessage: {
    fontSize: 16,
    color: '#C53030',
  },
});
