import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    universityName: '',
    graduationDate: '',
    optDetails: '',
    optStatus: '',
    optStartDate: '',
    volunteeringStartDate: '',
    roles: {
      frontend: false,
      backend: false,
      uiux: false,
      aiDeveloper: false,
      projectManager: false,
      dataAnalyst: false,
    },
    resume: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        roles: {
          ...formData.roles,
          [name]: checked,
        },
      });
    } else if (type === 'file') {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.firstName = formData.firstName ? '' : 'First Name is required.';
    tempErrors.lastName = formData.lastName ? '' : 'Last Name is required.';
    tempErrors.email = formData.email ? '' : 'Email is required.';
    tempErrors.email = /$^|.+@.+..+/.test(formData.email)
      ? ''
      : 'Email is not valid.';
    tempErrors.phoneNumber = formData.phoneNumber
      ? ''
      : 'Phone Number is required.';
    tempErrors.universityName = formData.universityName
      ? ''
      : 'University Name is required.';
    tempErrors.graduationDate = formData.graduationDate
      ? ''
      : 'Graduation Date is required.';
    tempErrors.optDetails = formData.optDetails
      ? ''
      : 'OPT Details are required.';
    tempErrors.optStatus = formData.optStatus ? '' : 'OPT Status is required.';
    tempErrors.optStartDate = formData.optStartDate
      ? ''
      : 'OPT Start Date is required.';
    tempErrors.volunteeringStartDate = formData.volunteeringStartDate
      ? ''
      : 'Volunteering Start Date is required.';
    tempErrors.resume = formData.resume ? '' : 'Resume is required.';
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Data Submitted:', formData);
      const data = new FormData();
      data.append('firstName', formData.firstName);
      data.append('lastName', formData.lastName);
      data.append('email', formData.email);
      data.append('phoneNumber', formData.phoneNumber);
      data.append('universityName', formData.universityName);
      data.append('graduationDate', formData.graduationDate);
      data.append('optDetails', formData.optDetails);
      data.append('optStatus', formData.optStatus);
      data.append('optStartDate', formData.optStartDate);
      data.append('volunteeringStartDate', formData.volunteeringStartDate);
      data.append('roles', JSON.stringify(formData.roles)); // Convert roles object to JSON string
      if (formData.resume) {
        data.append('resume', formData.resume);
      }

      // Add your form submission logic here

      navigate('/Thank-You');
    } else {
      console.log('Validation failed');
    }
  };

  return (
    <div style={styles.pageContainer}>
      <form onSubmit={handleSubmit} style={styles.formContainer}>
        <h1 style={styles.header}>Apply to become a volunteer now</h1>
        <p style={styles.subHeader}>
          Thank you for your interest in Bear Brown & Company. Please submit the
          form below.
        </p>

        <h2 style={styles.sectionTitle}>Personal Details</h2>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.firstName && (
          <span style={styles.errorText}>{errors.firstName}</span>
        )}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.lastName && (
          <span style={styles.errorText}>{errors.lastName}</span>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.email && <span style={styles.errorText}>{errors.email}</span>}
        <input
          type="number"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.phoneNumber && (
          <span style={styles.errorText}>{errors.phoneNumber}</span>
        )}

        <h2 style={styles.sectionTitle}>Education</h2>
        <input
          type="text"
          name="universityName"
          placeholder="University Name"
          value={formData.universityName}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.universityName && (
          <span style={styles.errorText}>{errors.universityName}</span>
        )}
        <input
          type="date"
          name="graduationDate"
          value={formData.graduationDate}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.graduationDate && (
          <span style={styles.errorText}>{errors.graduationDate}</span>
        )}

        <h2 style={styles.sectionTitle}>OPT Details</h2>
        <input
          type="text"
          name="optDetails"
          placeholder="OPT Details"
          value={formData.optDetails}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.optDetails && (
          <span style={styles.errorText}>{errors.optDetails}</span>
        )}
        <select
          name="optStatus"
          value={formData.optStatus}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="">Select OPT Status</option>
          <option value="applied">Applied</option>
          <option value="approved_pending">
            Approved! Yet to receive EAD card
          </option>
          <option value="received_ead">Received EAD card</option>
        </select>
        {errors.optStatus && (
          <span style={styles.errorText}>{errors.optStatus}</span>
        )}
        <input
          type="date"
          name="optStartDate"
          value={formData.optStartDate}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.optStartDate && (
          <span style={styles.errorText}>{errors.optStartDate}</span>
        )}
        <input
          type="date"
          name="volunteeringStartDate"
          value={formData.volunteeringStartDate}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.volunteeringStartDate && (
          <span style={styles.errorText}>{errors.volunteeringStartDate}</span>
        )}

        <h2 style={styles.sectionTitle}>Type of Role Desired</h2>
        <div style={styles.checkboxGroup}>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="frontend"
              checked={formData.roles.frontend}
              onChange={handleChange}
            />
            Frontend Developer
          </label>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="backend"
              checked={formData.roles.backend}
              onChange={handleChange}
            />
            Backend Developer
          </label>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="uiux"
              checked={formData.roles.uiux}
              onChange={handleChange}
            />
            UI/UX Designer
          </label>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="aiDeveloper"
              checked={formData.roles.aiDeveloper}
              onChange={handleChange}
            />
            AI Developer
          </label>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="projectManager"
              checked={formData.roles.projectManager}
              onChange={handleChange}
            />
            Project Manager
          </label>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="dataAnalyst"
              checked={formData.roles.dataAnalyst}
              onChange={handleChange}
            />
            Data Analyst
          </label>
        </div>

        <h2 style={styles.sectionTitle}>Resume</h2>
        <input
          type="file"
          name="resume"
          onChange={handleChange}
          style={styles.fileInput}
        />
        {errors.resume && <span style={styles.errorText}>{errors.resume}</span>}
        {formData.resume ? formData.resume.name : 'No file chosen'}

        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f7f7f7',
    padding: '20px',
    boxSizing: 'border-box',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '600px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
  },
  subHeader: {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '16px',
    color: '#555',
  },
  sectionTitle: {
    fontSize: '18px',
    marginBottom: '10px',
    marginTop: '20px',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  checkboxGroup: {
    marginBottom: '20px',
  },
  checkboxLabel: {
    display: 'block',
    margin: '5px 0',
    fontSize: '16px',
  },
  fileInput: {
    marginTop: '10px',
    marginBottom: '20px',
    width: '100%',
  },
  submitButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'center',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  errorText: {
    color: 'red',
    fontSize: '14px',
    marginBottom: '10px',
  },
  // Media query for medium screens (600px to 1024px)
  '@media (max-width: 1024px)': {
    formContainer: {
      padding: '20px',
    },
    header: {
      fontSize: '22px',
    },
    subHeader: {
      fontSize: '15px',
    },
    sectionTitle: {
      fontSize: '17px',
    },
    input: {
      padding: '11px',
    },
    checkboxLabel: {
      fontSize: '15px',
    },
    submitButton: {
      padding: '11px 18px',
      fontSize: '15px',
    },
  },
  // Media query for smaller screens (< 600px)
  '@media (max-width: 600px)': {
    formContainer: {
      padding: '15px',
    },
    header: {
      fontSize: '20px',
    },
    subHeader: {
      fontSize: '14px',
    },
    sectionTitle: {
      fontSize: '16px',
    },
    input: {
      padding: '10px',
    },
    checkboxLabel: {
      fontSize: '14px',
    },
    submitButton: {
      padding: '10px 15px',
      fontSize: '14px',
    },
  },
};

export default VolunteerForm;
