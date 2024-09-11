
import axiosClient from './axiosClient';

export const getAllAgents = async () => {
  try {
    const response = await axiosClient.get('/agents');
    return response.data;
  } catch (error) {
    console.error('Error fetching agents:', error);
    throw error;
  }
};

export const createAgent = async (agentData) => {
  try {
    const formData = new FormData();
    formData.append('name', agentData.name);
    formData.append('surname', agentData.surname);
    formData.append('email', agentData.email);
    formData.append('phone', agentData.phone);
    if (agentData.avatar) {
      formData.append('avatar', agentData.avatar); 
    }

    const response = await axiosClient.post('/agents', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error creating agent:', error);
    throw error;
  }
};

