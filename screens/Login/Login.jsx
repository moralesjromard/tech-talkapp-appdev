import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Checkbox from 'expo-checkbox';

import Input from '../../components/Input.jsx';
import styles from './styles.js';
import { UserAPI } from '../../api/user.js';
import { getStorage, setStorage } from '../../helper/storage.js';
import AuthContext from '../../contexts/ContextProvider.jsx';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.UserAPI = new UserAPI();

    this.state = {
      email: '',
      password: '',
      errorMessage: null,
      isChecked: false,
    };
  }

  static contextType = AuthContext;

  resetState() {
    this.setState({ email: '', password: '', errorMessage: null, isChecked: false });
  }

  async login() {
    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    const { logIn, displayLoading, hideLoading } = this.context;

    try {
      let [res, err] = await this.UserAPI.login(data);

      if (res) {
        displayLoading();
        setTimeout(() => {
          setStorage('user', res);
          this.resetState();
          logIn(res);
        }, 200);
      }

      if (err) {
        this.setState({ errorMessage: err });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { showLoading } = this.context;
    const newCheckBoxVal = this.state.isChecked ? false : true;
    return (
      <View style={styles.container}>
        <Text style={styles.introTitle}>Sign In</Text>
        {this.state.errorMessage && (
          <View style={styles.errorMessageContainer}>
            <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
          </View>
        )}
        <View style={styles.inputsContainer}>
          <Input
            placeholder='Email'
            onChangeText={(text) => this.setState({ email: text })}
            value={this.state.email}
            clearInput={() => this.setState({ email: '' })}
            secureTextEntry={false}
          />
          <Input
            placeholder='Password'
            onChangeText={(text) => this.setState({ password: text })}
            value={this.state.password}
            clearInput={() => this.setState({ password: '' })}
            secureTextEntry={this.state.isChecked ? false : true}
          />
          <View style={styles.section}>
            <Checkbox
              style={styles.checkbox}
              value={this.state.isChecked}
              onValueChange={() => this.setState({ isChecked: newCheckBoxVal })}
              color={this.state.isChecked ? '#6E8894' : undefined}
            />
            <Text style={styles.paragraph}>Show password</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.login()}
          >
            <Text style={styles.buttonText}>
              {showLoading ? (
                <ActivityIndicator
                  color={'white'}
                  size={25}
                />
              ) : (
                'Login'
              )}
            </Text>
          </TouchableOpacity>
          <Text style={styles.orText}>or</Text>
          <View style={styles.orBorder}></View>
          <TouchableOpacity
            style={[styles.button, styles.registerButton]}
            onPress={() => this.props.navigation.navigate('Register')}
          >
            <Text style={[styles.buttonText, styles.registerButtonText]}>Create your account</Text>
            <Ionicons
              name='arrow-forward-outline'
              size={22}
              color='#FFF'
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
