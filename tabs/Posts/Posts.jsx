import { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import moment from 'moment';

import { PostAPI } from '../../api/post';
import styles from './styles';
import AuthContext from '../../contexts/ContextProvider';

export default class Posts extends Component {
  constructor(props) {
    super(props);

    this.PostAPI = new PostAPI();

    this.state = {
      posts: [],
    };
  }

  static contextType = AuthContext;

  async getPosts() {
    let [res] = await this.PostAPI.posts();

    this.setState({ posts: res });
  }

  componentDidMount() {
    this.getPosts();
    const { hideLoading } = this.context;
    hideLoading();
  }

  componentDidUpdate(prevState) {
    if (prevState !== this.state.posts) {
      setTimeout(() => {
        this.getPosts();
      }, 2500);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ paddingHorizontal: 25 }}>
          <Text style={styles.topText}>Posts</Text>
          {this.state.posts && this.state.posts.length ? (
            this.state.posts.map((post) => (
              <View
                key={post.id}
                style={styles.postContainer}
              >
                <View style={styles.postInfo}>
                  <Text style={styles.postName}>
                    {post.user.firstname} {post.user.lastname}
                  </Text>
                  <Text style={styles.postTimeCreated}>{moment.utc(post.created_at).local().startOf('seconds').fromNow()}</Text>
                </View>
                <Text style={styles.post}>{post.post}</Text>
              </View>
            ))
          ) : (
            <View style={{ marginTop: 170, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator
                size={50}
                color={'#76b698'}
              />
              <Text style={{ fontWeight: 'regular', fontSize: 16, marginTop: 10 }}>Loading posts...</Text>
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}
