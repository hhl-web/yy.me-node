import axios from 'axios';
class Fetch {
  constructor() {
    this.methods = ['GET', 'POST', 'PUT', 'DELETE'];
  }
  fetch(url) {
    return new Promise((resolve, reject) => {
      axios(url)
        .then((res) => {
          result.code = 0;
          result.data = res.data;
          result.message = 'success';
          resolve(result);
        })
        .catch((err) => {
          result.code = -1;
          result.message = err.message;
          resolve(resolve);
        });
    });
  }
  get(url) {
    let result = {
      code: 0,
      message: '',
      data: null,
    };
    // this.fetch(url,'get')
  }
  post() {}
}
export default new Fetch();
