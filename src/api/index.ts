import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async (page: number) => {
    const { data } = await axios.get(`${API_BASE_URL}/posts?_page=${page}&_limit=10`);
    return data;
};
