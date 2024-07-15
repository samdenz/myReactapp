import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'

const FestaEvents = () => {
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate('/login');
  };

  return (
    <div
      style={{
        backgroundImage: "url('Outdoor Wedding Inspo.jpeg')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        minHeight: '100vh'
      }}
    >
      {/* Navigation bar */}
      <nav>
        <ul>
          <li><a href="FAQs">FAQs</a></li>
          <li><a href="Testimonials.html">Testimonials</a></li>
          <li><a href="aboutus.html">About</a></li>
          <li className="dropdown">
            <a href="#services" className="dropbtn">Services</a>
            <ul className="dropdown-content">
              <li><a href="partiesPrivate.html" target="_blank" rel="noopener noreferrer">Private Party</a></li>
              <li><a href="Corporate event.html">Corporate Events</a></li>
              <li><a href="wedding.html">Weddings</a></li>
              <li><a href="funeralsevices.html">Funerals</a></li>
            </ul>
          </li>
          <li><a href="#home">Home</a></li>
          <li className="logo">FESTAEVENTS</li>
        </ul>
      </nav>

      <div className="content">
        <h2>FESTAEVENTS</h2>
        <p>Creating Memories, One Event at a Time</p>
        <button id="getStartedButton" className="GetStarted-button" onClick={redirectToLogin}>
          Get Started
        </button>
        <a href="service main .html#target-section">Go to Services</a>
      </div>
    </div>
  );
};

export default FestaEvents;
