import axios from 'axios';

const authData = localStorage.getItem('auth');
const token = authData && JSON.parse(authData);

export const API = axios.create({
    baseURL: 'http://stage.antino.io:3000/api/v1/',
    headers: {
        Authorization: token ? token.access_token : ''
    }
});
