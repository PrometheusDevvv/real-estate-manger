import axiosClient from './axiosClient';

export const getAllCities = async () => {
  try {
    const response = await axiosClient.get('/cities');
    return response.data;
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error;
  }
};

export const getAllRegions = async () => {
  try {
    const response = await axiosClient.get('/regions');
    return response.data;
  } catch (error) {
    console.error('Error fetching regions:', error);
    throw error;
  }
};
