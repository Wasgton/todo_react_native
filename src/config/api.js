import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    // baseURL: 'https://hoom.net.br/api_teste.php',
});

export default instance;