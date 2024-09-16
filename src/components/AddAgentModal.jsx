import React, { useState } from 'react';
import ReactModal from 'react-modal'; // Import ReactModal
import PlusRounded from '../assets/icons/PlusRounded'; // Icon import
import AddAgentForm from './AddAgentForm'; // Form component
import Button from './Button'; // Button component
import { createAgent } from '../services/agentService'; // API call service

// Modal styles for ReactModal
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dim background
    backdropFilter: 'blur(10px)', // Blur the background
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '1009px',
    height: '784px',
    padding: '30px',
    borderRadius: '10px',
    background: '#fff', // Modal background color
  },
};

const AddAgentModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Open and close modal functions
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Handle form submission and API call
  const handleSubmit = async (formData) => {
    const data = new FormData();
    data.append('name', formData.firstName);
    data.append('surname', formData.lastName);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('avatar', formData.photo);

    console.log(data); // Check form data

    // Make API call to create agent
    await createAgent(data);

    // Close the modal after submission
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal} className="action-button add-listing">
        <div className="action-icon-plus">
          <PlusRounded color="white" />
        </div>
        <span className="action-label">აგენტის დამატება</span>
      </button>

      {/* React Modal implementation */}
      <ReactModal
       parentSelector={() => document.querySelector('#root')}
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Agent Modal"
      >
        <p className="add-agent-modal-header">აგენტის დამატება</p>
        <AddAgentForm onSubmit={handleSubmit} />

        {/* Cancel button */}
        <div style={{ textAlign: 'right', marginTop: '20px' }}>
          <Button title="გაუქმება" filled={false} onClick={closeModal} />
        </div>
      </ReactModal>
    </div>
  );
};

export default AddAgentModal;
