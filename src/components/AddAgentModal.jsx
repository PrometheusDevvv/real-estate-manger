import React, { useState } from 'react';
import PlusRounded from '../assets/icons/PlusRounded';
import AddAgentForm from './AddAgentForm';
import Button from './Button';
import axios from 'axios';  // Or use fetch
import axiosClient from '../services/axiosClient';
import { createAgent } from '../services/agentService';

const AddAgentModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = async (formData) => {
    // Prepare form data (for example if you're using multipart/form-data)
    const data = new FormData();
    data.append('name', formData.firstName);
    data.append('surname', formData.lastName);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('avatar', formData.photo);
    console.log(data)
     createAgent(data);
  };

  return (
    <div>
      <button onClick={openModal} className="action-button add-listing">
        <div className="action-icon-plus"><PlusRounded color="white" /></div>
        <span className="action-label">ლისტინგის დამატება</span>
      </button>

      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <p className="add-agent-modal-header">აგენტის დამატება</p>
            <AddAgentForm onSubmit={handleSubmit} />
            <div style={{ position: "absolute", top: "650px", left: "625px" }} onClick={closeModal}>
              <Button title="გაუქმება" filled={false} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddAgentModal;