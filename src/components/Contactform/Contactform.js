import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    messagetitle : '',
    file:'',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation logic here
    if (formData.name && formData.email && formData.message) {
      // Submit the form (e.g., send data to server or display success message)
      setIsSubmitted(true);
    } else {
      alert('Please fill out all required fields.');
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange} required />
          </label>
          <label>
            Attach File:
            <input type="file" name="file" onChange={handleFileChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Message Sent Successfully!</p>
      )}
    </div>
  );
};

export default ContactForm;