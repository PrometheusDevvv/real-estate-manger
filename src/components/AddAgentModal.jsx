import React, { useState } from 'react';
import PlusRounded from '../assets/icons/PlusRounded';

const AddAgentModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>

      {/* Trigger/Open The Modal */}
      <button onClick={openModal} className="action-button add-listing">
          <div className="action-icon-plus"><PlusRounded color="white" /></div>
          <span className="action-label">ლისტინგის დამატება</span>
        </button>

      
      {isOpen && (
        <div className="modal" onClick={closeModal}>
         
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <p className="add-agent-modal-header">აგენტის დამატება</p>
            <div className="add-agent-form">
s
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default AddAgentModal;
