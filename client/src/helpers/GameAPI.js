import axios from 'axios';

axios.defaults.withCredentials = true;

class GameAPI {
  static BASE_URL =
    process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

  static async getAll(endpoint) {
    const response = await axios.get(`${this.BASE_URL}/${endpoint}`, {});
    return response;
  }

  static async getOne(endpoint, param) {
    const response = await axios.get(`${this.BASE_URL}/${endpoint}/${param}`);
    return response;
  }

  static async create(endpoint, reqBody) {
    const response = await axios.post(`${this.BASE_URL}/${endpoint}`, reqBody);
    return response;
  }

  static async update(endpoint, param, reqBody) {
    const response = await axios.patch(
      `${this.BASE_URL}/${endpoint}/${param}`,
      reqBody
    );
    return response;
  }
  static async delete(endpoint, param, data = {}) {
    const response = await axios.delete(
      `${this.BASE_URL}/${endpoint}/${param}`,
      { data }
    );
    return response;
  }
}

export { GameAPI };
