import React, { useState, useEffect } from 'react';
import './ContactPopup.css';
import contactImage from '../../Assets/Projects/contact_image.png';

function ContactPopup({ onClose, isOpen }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      const popupContent = document.querySelector('.popup-content');
      if (popupContent && !popupContent.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose(); 
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {/* Close button moved outside the popup-right div for better mobile positioning */}
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="popup-left">
          <img src={contactImage} alt="Contact" className="contact-illustration" />
        </div>
        <div className="popup-right">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  placeholder="First" 
                  value={formData.firstName}
                  onChange={handleChange}
                  required 
                />
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  placeholder="Last" 
                  value={formData.lastName}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            <div className="form-row">
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="Phone Number" 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Email *" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-row">
              <textarea 
                id="message" 
                name="message" 
                placeholder="Message" 
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPopup;