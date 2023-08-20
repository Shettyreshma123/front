import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReportPage() {
  const [reportUrl, setReportUrl] = useState('');

  useEffect(() => {
    // Fetch the report URL from the backend when the component mounts
    async function fetchReportUrl() {
      try {
        const response = await axios.get('http://localhost:3000/api/hbms/report'); // Replace ':id' with the actual patient ID
        const reportUrl = response.data.reportUrl;
        setReportUrl(reportUrl);
      } catch (error) {
        console.error('Error fetching report:', error);
      }
    }

    fetchReportUrl();
  }, []);

  return (
    <div>
      <h1>Medical Report</h1>
      {reportUrl && (
        <div>
          <p>Your medical report is ready:</p>
          <a href={reportUrl} target="_blank" rel="noopener noreferrer">Download Report</a>
        </div>
      )}
    </div>
  );
}

export default ReportPage;
