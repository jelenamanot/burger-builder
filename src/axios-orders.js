import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-a653c.firebaseio.com/'
});

export default instance;