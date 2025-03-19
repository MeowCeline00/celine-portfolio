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
  const [formStatus, setFormStatus] = useState('input'); 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setFormStatus('review');
  };

  const handleEditForm = () => {
    setFormStatus('input');
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus('success');
      } else {
        throw new Error(data.message || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setErrorMessage('There was a problem sending your message. Please try again later.');
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: ''
    });
    setFormStatus('input');
  };

  const closePopup = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={closePopup}>
          &times;
        </button>
        <div className="popup-left">
          <img src={contactImage} alt="Contact" className="contact-illustration" />
        </div>
        <div className="popup-right">
          {formStatus === 'input' && (
            <form onSubmit={handleReviewSubmit}>
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
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Review Message
              </button>
            </form>
          )}

          {formStatus === 'review' && (
            <div className="review-container">
              <h2>Review Your Message</h2>
              <div className="review-item">
                <span className="review-label">Name:</span>
                <span className="review-value">{`${formData.firstName} ${formData.lastName}`}</span>
              </div>
              <div className="review-item">
                <span className="review-label">Phone:</span>
                <span className="review-value">{formData.phone || 'Not provided'}</span>
              </div>
              <div className="review-item">
                <span className="review-label">Email:</span>
                <span className="review-value">{formData.email}</span>
              </div>
              <div className="review-item review-message">
                <span className="review-label">Message:</span>
                <p className="review-value">{formData.message}</p>
              </div>
              <div className="review-buttons">
                <button onClick={handleEditForm} className="edit-btn">
                  Edit
                </button>
                <button 
                  onClick={handleFinalSubmit} 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>
          )}

          {formStatus === 'success' && (
            <div className="success-container">
              <div className="success-icon">✓</div>
              <h2>Thank you for your message!</h2>
              <p>I will get in touch with you soon!</p>
              <button onClick={closePopup} className="submit-btn">
                Close
              </button>
            </div>
          )}

          {formStatus === 'error' && (
            <div className="error-container">
              <div className="error-icon">!</div>
              <h2>Oops!</h2>
              <p>{errorMessage}</p>
              <div className="error-buttons">
                <button onClick={resetForm} className="edit-btn">
                  Try Again
                </button>
                <button onClick={closePopup} className="submit-btn">
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactPopup;