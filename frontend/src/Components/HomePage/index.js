import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const elements = document.querySelectorAll('.fadeInUp');
    elements.forEach((el, index) => {
      el.classList.add(`fadeInUpDelayed${index + 1}`);
    });
  }, []);

  const handleApplyClick = () => {
    navigate('/volunteer-form'); // Redirect to the volunteer form
  };

  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <h1 className="fadeInUp" style={styles.title}>
          Welcome to OPT Portal
        </h1>
        <p className="fadeInUp" style={styles.subtitle}>
          Stop your OPT clock by volunteering at Bear Brown & Company.
          <br />
          <br />
          <span className="fadeInUp" style={styles.subtitleHighlight}>
            Benefits
          </span>
          <br />
          <br />
          <span className="fadeInUp" style={styles.subtitleHighlight}>
            How to apply
          </span>
        </p>
        <button
          className="fadeInUp"
          style={styles.button}
          onClick={handleApplyClick}
        >
          Apply for Volunteering
        </button>
      </main>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '5%',
  },
  main: {
    marginTop: '10%',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#666',
    fontSize: '18px',
    marginTop: '20px',
    textAlign: 'center',
  },
  subtitleHighlight: {
    marginLeft: '5px',
    marginTop: '50px',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default HomePage;
