import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/'); // Redirect to home or any other page
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Thank you for your submission</h1>
      <p style={styles.subtitle}>
        We will review your application and get back to you shortly.
      </p>
      <button style={styles.button} onClick={handleClose}>
        Close
      </button>
    </div>
  );
};

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: '#0b3d91', // Background color similar to the image
//     color: '#fff', // Text color
//     textAlign: 'center',
//     padding: '20px',
//   },
//   title: {
//     fontSize: '36px',
//     fontWeight: 'bold',
//     marginBottom: '20px',
//   },
//   subtitle: {
//     fontSize: '18px',
//     marginBottom: '40px',
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     color: '#fff',
//     padding: '10px 20px',
//     fontSize: '18px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
// };

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#0b3d91', // Background color similar to the image
    color: '#fff', // Text color
    textAlign: 'center',
    padding: '20px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '18px',
    marginBottom: '40px',
  },
  button: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '18px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  // Media query for medium screens (600px to 1024px)
  '@media (max-width: 1024px)': {
    title: {
      fontSize: '32px',
    },
    subtitle: {
      fontSize: '16px',
    },
    button: {
      padding: '8px 18px',
      fontSize: '16px',
    },
  },
  // Media query for smaller screens (< 600px)
  '@media (max-width: 600px)': {
    title: {
      fontSize: '28px',
    },
    subtitle: {
      fontSize: '14px',
    },
    button: {
      padding: '7px 15px',
      fontSize: '14px',
    },
  },
};

export default ThankYouPage;
