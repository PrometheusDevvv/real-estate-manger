
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
     

      const response = await axiosClient.post('/agents', agentData, {
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

