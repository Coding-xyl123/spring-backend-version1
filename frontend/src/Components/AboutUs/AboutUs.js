import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css'; // Make sure to include the CSS file

const AboutUs = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true); // Trigger the animation when the component mounts
  }, []);

  const handleWanttoJoin = () => {
    navigate('/Volunteer-Form'); // Navigate to the volunteer form page
  };

  return (
    <div className={`about-container ${animate ? 'fadeInUp' : ''}`}>
      <h1 className="fadeInUp fadeInUpDelayed1">About Us</h1>
      <ul className="about-list">
        <li className="fadeInUp fadeInUpDelayed2">What we do</li>
        <li className="fadeInUp fadeInUpDelayed3">What we offer</li>
        <li className="fadeInUp fadeInUpDelayed4">Team</li>
        <li className="fadeInUp fadeInUpDelayed5" onClick={handleWanttoJoin}>
          Want to join?
        </li>
      </ul>
    </div>
  );
};

export default AboutUs;
