import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
//import toast, { Toaster } from 'react-hot-toast';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_ywjerxn', 'template_vl3r46h', formData, 'B5N5g0XkBqbt3d5Iq')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Email has been sent successfully');
        setSubmitted(true);
      })
      .catch((err) => {
        toast.error('Something went wrong');
        console.error('FAILED...', err);
      });
  };

  return (
    <PageWrapper>
      <Toaster />
      <StyledContactForm>
        <h2>Contact Us</h2>
        {submitted ? (
          <SuccessMessage>
            <p>Thank you for contacting us! We will get back to you soon.</p>
          </SuccessMessage>
        ) : (
          <form onSubmit={handleSubmit}>
            <FormField>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormField>
            <FormField>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormField>
            <FormField>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              />
            </FormField>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </form>
        )}
      </StyledContactForm>
    </PageWrapper>
  );
};

export default ContactUs;

const PageWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContactForm = styled.div`
  width: 400px;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const FormField = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
    color: #333;
    text-align: left; /* Align labels to the left */
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s ease-in-out;

    &:focus {
      border-color: #00ce9e;
    }
  }

  textarea {
    min-height: 100px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

const SuccessMessage = styled.div`
  padding: 20px;
  background-color: #dff0d8;
  border: 1px solid #b2dba1;
  border-radius: 5px;
  margin-top: 20px;

  p {
    margin: 0;
    color: #3c763d;
  }
`;
