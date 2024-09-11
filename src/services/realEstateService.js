import axiosClient from './axiosClient';

export const getAllRealEstates = async () => {
  try {
    const response = await axiosClient.get('/real-estates');
    return response.data;
  } catch (error) {
    console.error('Error fetching real estates:', error);
    throw error;
  }
};

export const getRealEstateById = async (id) => {
  try {
    const response = await axiosClient.get(`/real-estates/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching real estate with ID ${id}:`, error);
    throw error;
  }
};

export const createRealEstate = async (realEstateData) => {
  try {
    const response = await axiosClient.post('/real-estates', realEstateData);
    return response.data;
  } catch (error) {
    console.error('Error creating real estate:', error);
    throw error;
  }
};

export const deleteRealEstate = async (id) => {
  try {
    const response = await axiosClient.delete(`/real-estates/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting real estate with ID ${id}:`, error);
    throw error;
  }
};
