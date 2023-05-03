import { Request } from '../helper/http.js';
import { getStorage } from '../helper/storage.js';

var request = new Request();

export class UserAPI {
  login(data) {
    return request.post('login', { ...data });
  }

  register(data) {
    return request.post('register', { ...data });
  }

  async logout() {
    const user = await getStorage('user');
    request = new Request(user.token);

    return request.get('logout');
  }
}
