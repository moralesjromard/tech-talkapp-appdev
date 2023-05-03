import { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Input from '../../components/Input';
import { PostAPI } from '../../api/post';

export default class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.PostAPI = new PostAPI();

    this.state = {
      post: '',
    };
  }

  resetState() {
    this.setState({
      post: '',
    });
  }

  async createPost() {
    const data = {
      post: this.state.post,
    };

    try {
      let [res, err] = await this.PostAPI.createPost(data);

      if (res) {
        this.resetState();
        this.props.navigation.navigate('Posts');
      }

      if (err) {
        this.setState({ errorMessage: err });
      }
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.topText}>New post</Text>
        <Input
          placeholder="What's on your mind?"
          onChangeText={(text) => this.setState({ post: text })}
          value={this.state.post}
          clearInput={() => this.setState({ post: '' })}
          secureTextEntry={false}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.createPost()}
        >
          <Text style={styles.buttonText}>Create post</Text>
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
  button: {
    backgroundColor: '#76b698',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    borderRadius: 5,
    marginBottom: 10,
    height: 50,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});
