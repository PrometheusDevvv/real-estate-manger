import React, { useState } from 'react';

const AddAgentForm = ({ onSubmit }) => {
    // State to store form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        photo: null
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle file input changes
    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            photo: e.target.files[0]
        });
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent default form submit behavior
        onSubmit(formData);   // Pass data to parent component or make an API call here
    };

    return (
        <form onSubmit={handleSubmit} className="add-agent-form">
            <div className="agent-form-field">
                <div className="agent-form-group">
                    <label className="agent-form-label">სახელი *</label>
                    <input 
                        name="firstName"
                        className="agent-form-input"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <span className="input-warning">მინიმუმ ორი სიმბოლო</span>
                </div>

                <div className="agent-form-group">
                    <label className="agent-form-label">გვარი</label>
                    <input 
                        name="lastName"
                        className="agent-form-input"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <span className="input-warning">მინიმუმ ორი სიმბოლო</span>
                </div>
            </div>

            <div className="agent-form-field">
                <div className="agent-form-group">
                    <label className="agent-form-label">ელ-ფოსტა *</label>
                    <input 
                        name="email"
                        type="email"
                        className="agent-form-input"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <span className="input-warning">მინიმუმ ორი სიმბოლო</span>
                </div>

                <div className="agent-form-group">
                    <label className="agent-form-label">ტელეფონის ნომერი</label>
                    <input 
                        name="phone"
                        className="agent-form-input"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <span className="input-warning">მინიმუმ ორი სიმბოლო</span>
                </div>
            </div>

            <div className="agent-form-field">
                <div className="agent-form-group">
                    <label className="agent-form-label">ატვირთეთ ფოტო *</label>
                    <input 
                        name="photo"
                        type="file"
                        className="agent-form-file"
                        onChange={handleFileChange}
                        required
                    />
                </div>
            </div>

            <button type="submit">დაამატე აგენტი</button>
        </form>
    );
};

export default AddAgentForm;
