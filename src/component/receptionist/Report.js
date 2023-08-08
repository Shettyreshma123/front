// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function ReportPage() {
//   const [patientName, setPatientName] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [reportUrl, setReportUrl] = useState(null);
//   const navigate = useNavigate();

//   const handleGenerateReport = () => {
//     setLoading(true);
//     axios
//       .get(`http://localhost:3000/api/hbms/report/${patientName}`, {
//         responseType: 'blob',
//       })
//       .then((response) => {
//         setLoading(false);
//         // Generate the report and do any other necessary processing
//         // ...

//         // After generating the report, set the report URL and display the report iframe
//         const reportBlob = new Blob([response.data], { type: 'application/pdf' });
//         const url = URL.createObjectURL(reportBlob);
//         setReportUrl(url);
//       })
//       .catch((error) => {
//         setLoading(false);
//         console.error('Error fetching patient report:', error);
//       });
//   };

//   return (
//     <div>
//       {reportUrl ? (
//         <div>
//           <h2>Report Details:</h2>
//           <iframe src={reportUrl} title="Patient Report" width="100%" height="600px"></iframe>
//         </div>
//       ) : (
//         <div>
//           <input
//             type="text"
//             value={patientName}
//             onChange={(e) => setPatientName(e.target.value)}
//             placeholder="Enter Patient Name"
//           />
//           <button onClick={handleGenerateReport} disabled={!patientName || loading}>
//             {loading ? 'Generating Report...' : 'Generate Report'}
//           </button>
//           {loading && <p>Loading...</p>}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ReportPage;

import React, { useState } from 'react';
import axios from 'axios';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    padding: 40,
  },
  hospitalLogo: {
    width: 100,
    height: 100,
  },
  hospitalName: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  section: {
    marginTop: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  patientInfo: {
    marginBottom: 10,
  },
});

const generatePDF = async (patientName, setReportUrl) => {
  try {
    const hospitalName = 'xxx'; // Replace this with the actual hospital name from your server
    const hospitalLogoUrl = 'path/to/hospital_logo.png'; // Replace this with the actual URL of your hospital logo

    // Fetch the patient report from the server
    const response = await axios.get(`http://localhost:3000/api/hbms/report/${patientName}`, {
      responseType: 'arraybuffer',
    });

    // Convert the response data to a Blob
    const reportBlob = new Blob([response.data], { type: 'application/pdf' });

    // Generate the PDF document
    const pdfDocument = (
      <Document>
        <Page style={styles.page}>
          {/* Hospital Name and Logo */}
          <Image src={hospitalLogoUrl} style={styles.hospitalLogo} />
          <Text style={styles.hospitalName}>{hospitalName}</Text>

          {/* Report Details */}
          <View style={styles.section}>
            <Text style={styles.heading}>Report Details:</Text>
            <View style={styles.patientInfo}>
              <Text>Patient Name: {patientName}</Text>
              {/* Add other patient details */}
            </View>
          </View>

          {/* Additional Sections and Data */}
          {/* Add more sections as needed */}
        </Page>
      </Document>
    );

    // Generate the PDF URL
    const url = URL.createObjectURL(reportBlob);
    setReportUrl(url);
  } catch (error) {
    console.error('Error fetching patient report:', error);
  }
};

function Report() {
  const [patientName, setPatientName] = useState('');
  const [loading, setLoading] = useState(false);
  const [reportUrl, setReportUrl] = useState(null);

  const handleGenerateReport = () => {
	axios
	.get(`http://localhost:3000/api/hbms/report/${patientName}`, {
	  responseType: 'blob',
	})
	.then((response) => {
	  setLoading(false);
	  // Generate the report and do any other necessary processing
	  // ...

	  // After generating the report, set the report URL and display the report iframe
	  const reportBlob = new Blob([response.data], { type: 'application/pdf' });
	  const url = URL.createObjectURL(reportBlob);
	  setReportUrl(url);
	})
	.catch((error) => {
	  setLoading(false);
	  console.error('Error fetching patient report:', error);
	});
};

  return (
    <div>
      {reportUrl ? (
        <div>
          <h2>Report Details:</h2>
          <iframe src={reportUrl} title="Patient Report" width="100%" height="600px"></iframe>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            placeholder="Enter Patient Name"
          />
          <button onClick={handleGenerateReport} disabled={!patientName || loading}>
            {loading ? 'Generating Report...' : 'Generate Report'}
          </button>
          {loading && <p>Loading...</p>}
        </div>
      )}
    </div>
  );
}

export default Report;

