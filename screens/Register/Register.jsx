import { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Checkbox from 'expo-checkbox';

import Input from '../../components/Input.jsx';
import styles from './styles.js';
import { UserAPI } from '../../api/user.js';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.UserAPI = new UserAPI();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      isChecked: false,
      errorMessage: null,
    };
  }

  resetState() {
    this.setState({ firstName: '', lastName: '', email: '', password: '', passwordConfirmation: '' });
  }

  async register() {
    if ((this.state.firstName === '' || this.state.lastName === '' || this.state.email === '', this.state.password === '' || this.state.passwordConfirmation === '')) {
      this.setState({ errorMessage: 'All fields is required' });
    } else if (this.state.password !== this.state.passwordConfirmation) {
      this.setState({ errorMessage: 'Password does not match' });
    } else {
      let data = {
        firstname: this.state.firstName,
        lastname: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      };

      try {
        let [res, err] = await this.UserAPI.register(data);

        if (res) {
          this.resetState();
          this.props.navigation.navigate('Login');
        }

        if (err) {
          console.log(err);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    const newCheckBoxVal = this.state.isChecked ? false : true;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{ position: 'relative', zIndex: 1 }}
            onPress={() => this.props.navigation.navigate('Login')}
          >
            <Ionicons
              name='arrow-back-outline'
              size={30}
              color='#000'
            />
          </TouchableOpacity>
          <Text style={styles.introTitle}>Sign Up</Text>
        </View>
        {this.state.errorMessage && (
          <View style={styles.errorMessageContainer}>
            <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
          </View>
        )}
        <View style={styles.inputsContainer}>
          <Input
            placeholder='First name'
            onChangeText={(text) => this.setState({ firstName: text })}
            value={this.state.firstName}
            clearInput={() => this.setState({ firstName: '' })}
            secureTextEntry={false}
          />
          <Input
            placeholder='Last name'
            onChangeText={(text) => this.setState({ lastName: text })}
            value={this.state.lastName}
            clearInput={() => this.setState({ lastName: '' })}
            secureTextEntry={false}
          />
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
          <Input
            placeholder='Password confirmation'
            onChangeText={(text) => this.setState({ passwordConfirmation: text })}
            value={this.state.passwordConfirmation}
            clearInput={() => this.setState({ passwordConfirmation: '' })}
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
            onPress={() => this.register()}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
