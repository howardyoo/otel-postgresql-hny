import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [dbStatus, setDbStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkDbConnection = async () => {
      try {
        const response = await axios.get('/api/test');
        setDbStatus(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to connect to backend');
        setDbStatus(null);
      }
    };

    checkDbConnection();
  }, []);

  return (
    <div style={{ 
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>PostgreSQL Node.js Demo</h1>
      <div style={{ 
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <h2>Database Connection Status</h2>
        {error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : dbStatus ? (
          <div>
            <p style={{ color: 'green' }}>{dbStatus.message}</p>
            <p>Timestamp: {new Date(dbStatus.timestamp).toLocaleString()}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App; 