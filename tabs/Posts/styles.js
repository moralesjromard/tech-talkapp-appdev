import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  topText: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 20,
    paddingBottom: 15,
    color: '#1d1d1f',
  },
  postContainer: {
    backgroundColor: '#',
    borderRadius: 5,
    marginBottom: 30,
    backgroundColor: '#eeeeef',
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  postInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  postName: {
    marginRight: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1d1d1f',
  },
  postTimeCreated: {
    color: '#a1a1a1',
    fontSize: 13,
  },
});
