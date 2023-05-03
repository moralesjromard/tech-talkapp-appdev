import { Request } from '../helper/http';
import { getStorage } from '../helper/storage';

var request = new Request();

export class PostAPI {
  async posts() {
    const user = await getStorage('user');
    request = new Request(user.token);

    return request.get('posts');
  }

  async createPost(data) {
    const user = await getStorage('user');
    request = new Request(user.token);

    return request.post('post', { ...data });
  }
}
