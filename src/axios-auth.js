import axios from 'axios';
// http://ssal.sparcs.org:17322/api/

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

instance.interceptors.request.use((req) => {
  req.headers.ContentType = 'application/json';
  return req;
}, error => Promise.reject(error));

export default instance;
