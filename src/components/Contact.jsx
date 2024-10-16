import React, { useState } from 'react';
import { validateEmail, validatePhoneNumber } from '../utils/validation';

const Contact = () => {
  const [formData, setFormData] = useState({ email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!validateEmail(formData.email)) newErrors.email = 'Invalid email';
    if (!validatePhoneNumber(formData.phone)) newErrors.phone = 'Invalid phone number';
    if (!formData.message) newErrors.message = 'Message is required';
//Send to backend using axios.post :)
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
        {errors.email && <span>{errors.email}</span>}
        <input type="text" name="phone" placeholder="Phone" onChange={handleInputChange} />
        {errors.phone && <span>{errors.phone}</span>}
        <textarea name="message" placeholder="Message" onChange={handleInputChange} />
        {errors.message && <span>{errors.message}</span>}
        <button type="submit">Send</button>
      </form>
    </section>
  );
};
export default Contact;
