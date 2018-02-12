import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://ssal.sparcs.org:17322/api/',
});

instance.interceptors.request.use((req) => {
  req.headers.ContentType = 'application/json';
  return req;
}, error => Promise.reject(error));

export default instance;
