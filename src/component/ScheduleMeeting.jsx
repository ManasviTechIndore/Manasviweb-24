import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const ScheduleMeeting = () => {
  const [formData, setFormData] = useState({
    meetingTitle: '',
    meetingDate: new Date(),
    startTime: '',
    endTime: '',
    meetingDescription: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      meetingDate: date
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      meeting_title: formData.meetingTitle,
      meeting_date: formData.meetingDate.toLocaleDateString(),
      start_time: formData.startTime,
      end_time: formData.endTime,
      meeting_description: formData.meetingDescription
    };

    emailjs.send('service_ywjerxn', 'template_vl3r46h', formData, 'B5N5g0XkBqbt3d5Iq')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Meeting scheduled successfully!');
        setFormData({
          meetingTitle: '',
          meetingDate: new Date(),
          startTime: '',
          endTime: '',
          meetingDescription: ''
        });
      })
      .catch((err) => {
        toast.error('Something went wrong. Please try again.');
        console.error('FAILED...', err);
      });
  };

  return (
    <PageWrapper>
      <Toaster />
      <StyledForm>
        <h2>Schedule a Meeting</h2>
        
        <form onSubmit={handleSubmit}>
          <FormField>
            <label htmlFor="meetingTitle">Meeting Title</label>
            <input
              type="text"
              id="meetingTitle"
              name="meetingTitle"
              value={formData.meetingTitle}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <label htmlFor="meetingDate">Meeting Date</label>
            <DatePicker
              selected={formData.meetingDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              className="date-picker"
            />
          </FormField>
          <FormField>
            <label htmlFor="startTime">Start Time</label>
            <input
              type="time"
              id="startTime"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <label htmlFor="endTime">End Time</label>
            <input
              type="time"
              id="endTime"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <label htmlFor="meetingDescription">Description</label>
            <textarea
              id="meetingDescription"
              name="meetingDescription"
              value={formData.meetingDescription}
              onChange={handleChange}
              rows="3"
            />
          </FormField>
          <SubmitButton type="submit">Schedule Meeting</SubmitButton>
        </form>
      </StyledForm>
    </PageWrapper>
  );
};

export default ScheduleMeeting;

const PageWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.div`
  width: 300px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const FormField = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    font-size: 12px;
    margin-bottom: 5px;
    color: #333;
  }

  input[type='text'],
  input[type='time'],
  textarea {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s ease-in-out;

    &:focus {
      border-color: #00ce9e;
    }
  }

  textarea {
    resize: vertical;
  }

  .date-picker {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s ease-in-out;
    &:focus {
      border-color: #00ce9e;
    }
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;
