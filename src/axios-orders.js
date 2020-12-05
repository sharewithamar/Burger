import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://amar-react-burger.firebaseio.com/',
});

export default instance;
