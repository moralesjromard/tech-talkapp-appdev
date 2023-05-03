import React, { Component } from 'react';
import { getStorage, setStorage } from '../helper/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = React.createContext();

export class AuthProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      showLoading: false,
    };
  }

  logIn = async (token) => {
    if (token) {
      this.setState({ user: token });
    }
  };

  logOut = async () => {
    this.setState({ user: null });
    await AsyncStorage.removeItem('user');
  };

  displayLoading = () => {
    this.setState({ showLoading: true });
  };

  hideLoading = () => {
    this.setState({ showLoading: false });
  };

  async componentDidMount() {
    const user = await getStorage('user');
    this.setState({ user: user });
  }

  render() {
    const { user, showLoading } = this.state;
    const { logIn, logOut, displayLoading, hideLoading } = this;
    return <AuthContext.Provider value={{ user, logIn, logOut, showLoading, displayLoading, hideLoading }}>{this.props.children}</AuthContext.Provider>;
  }
}

export default AuthContext;
