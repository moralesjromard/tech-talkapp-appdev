import { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { UserAPI } from '../../api/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../contexts/ContextProvider';
import { removeStorage } from '../../helper/storage';

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.UserAPI = new UserAPI();
  }

  static contextType = AuthContext;

  async logout() {
    const { logOut, user } = this.context;
    let [res] = await this.UserAPI.logout();
    logOut();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.topText}>Settings</Text>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => this.logout()}
        >
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: '#FFF',
    flex: 1,
  },
  topText: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 15,
  },
  logoutButton: {
    backgroundColor: '#C53030',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
