import { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default class Input extends Component {
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={this.props.placeholder}
          placeholderTextColor='#bbb'
          onChangeText={this.props.onChangeText}
          value={this.props.value}
          secureTextEntry={this.props.secureTextEntry}
        />
        {this.props.value.length ? (
          <TouchableOpacity onPress={this.props.clearInput}>
            <Ionicons
              name='close-circle'
              size={25}
              color='#CCC'
            />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: '#d7d6d6',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
    height: 58,
    position: 'relative',
  },
  input: {
    fontSize: 15,
    color: '#333',
    width: '90%',
  },
});
