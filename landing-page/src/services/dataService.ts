import axios from 'axios';

export const API_URL = 'https://backcommunities.eze.ink';
// export const API_URL = 'http://localhost:4000';
// export const API_URL = process.env.NEXT_API_PRODUCTION_URL;

export default class DataService {
  client: any;
  constructor() {
    this.client = axios.create({
      baseURL: API_URL,
      timeout: 30000,
      timeoutErrorMessage: 'Time out!',
      headers: {
        'content-type': 'application/json',
      },
    });
  }

  post = (url: string, data: any) => {
    return this.client.post(url, data);
  };

  get = (url: string) => {
    return this.client.get(url);
  };

  put = (url: string, data: any) => {
    return this.client.put(url, data);
  };

  delete = (url: string) => {
    return this.client.delete(url);
  };
}
