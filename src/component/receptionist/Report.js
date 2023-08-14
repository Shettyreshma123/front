import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap'; // You can use your preferred UI library

const Report = () => {
  const [username, setUsername] = useState('');

  const handleGenerateReport = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/hbms/report/${username}`, {
        responseType: 'blob', // Response type is set to blob to receive binary data
      });

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      // Open the PDF in a new tab
      window.open(url);
    } catch (error) {
      console.error('Error fetching patient report:', error);
    }
  };

  return (
    <div>
      <h2>Generate Patient Report</h2>
      <Form>
        <FormGroup>
          <FormControl
            type="text"
            placeholder="Enter patient username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        <Button onClick={handleGenerateReport}>Generate Report</Button>
      </Form>
    </div>
  );
};

export default Report;


