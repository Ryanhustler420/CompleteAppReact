import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerreact-47e91.firebaseio.com/'
});

export default instance;