import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/posts`);
  return data;
};
