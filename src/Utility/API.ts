import axios from 'axios';

export const AUTHORIZATION = 'Authorization';
const proxy = 'https://cors-anywhere.herokuapp.com/';
export const API = axios.create({
    baseURL: 'http://glu-stage.antino.io:3000/api/v1/',
});

export const authorize = (token: string) => {
    if (token) {
        API.defaults.headers.Authorization = token;
    }
};
export const resetTokenAndLocalStorage = () => {
    delete API.defaults.headers.Authorization;
    localStorage.removeItem('auth');
};
export const setAuthrizationToken = () => {
    const data = localStorage.getItem('auth');
    let token: string = '';
     if(data){
      const  tokenObject = JSON.parse(data);
      token = tokenObject.access_token;
    } 
    authorize(token);
}
setAuthrizationToken();