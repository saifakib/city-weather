import axios from 'axios'

const API_KEY = '6712faf79ce759566fcf612fb6befc86';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=`;

const instance = axios.create({
    baseURL: ROOT_URL
})

export default instance;

