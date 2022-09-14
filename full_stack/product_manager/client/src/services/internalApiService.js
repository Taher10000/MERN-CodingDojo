import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/api',
});

export const createProduct = async (data) => {
    const res = await http.post('/products');
    return res.data;
};