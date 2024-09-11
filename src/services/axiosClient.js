import axios from 'axios';

const apiToken = import.meta.env.VITE_API_TOKEN;

const axiosClient = axios.create({
  baseURL: 'https://api.real-estate-manager.redberryinternship.ge/api',
  headers: {
    'Authorization': `Bearer ${apiToken}`,
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
