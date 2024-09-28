import { useState } from 'react';

// Define the ContactForm component
function ContactForm({ isVisible, onClose }) {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: 'Currently W.I.P',
    email: '',
    message: ''
  });

  // Handler function for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Add your form submission logic here (e.g., send data to a server)
    console.log(formData);
    // Optionally close the form after submission
    onClose();
  };

  // Handler function for input changes
  const handleChange = (e) => {
    // Update the formData state with the new input value
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Overlay to fade out the background when the form is visible */}
      <div className={`overlay ${isVisible ? 'active' : ''}`} onClick={onClose}></div>
      {/* Contact form container */}
      <div className={`contact-form ${isVisible ? 'visible' : ''}`}>
        <div className="contact-form-content">
          {/* Close button for the form */}
          <span className="close-btn" onClick={onClose}>&times;</span>
          {/* Form title */}
          <h2 style={{fontFamily: 'Arial, sans-serif'}}>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            {/* Input field for the name */}
            <div className="form-group">
              <label style={{fontFamily: 'Arial, sans-serif'}}>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            {/* Input field for the email */}
            <div className="form-group">
              <label style={{fontFamily: 'Arial, sans-serif'}}>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            {/* Textarea for the message */}
            <div className="form-group">
              <label style={{fontFamily: 'Arial, sans-serif'}}>Message:</label>
              <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
            </div>
            {/* Submit button */}
            <button type="submit" className="submit-btn" style={{fontFamily: 'Arial, sans-serif'}}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
