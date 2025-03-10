import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const KeyloggerDisplay = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};

  // States to track displayed text for each field
  const [displayedPassword, setDisplayedPassword] = useState('');
  const [displayedFullName, setDisplayedFullName] = useState('');
  const [displayedPetName, setDisplayedPetName] = useState('');
  const [displayedBirthdate, setDisplayedBirthdate] = useState('');
  const [displayedServiceName, setDisplayedServiceName] = useState('');

  // Helper function to simulate typing effect
  const simulateTyping = (actualText, setState, delay = 150) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= actualText.length) {
        setState(actualText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, delay);
    return interval;
  };

  useEffect(() => {
    // Clear previous intervals if component re-renders (unlikely here)
    let passwordInterval, fullNameInterval, petNameInterval, birthdateInterval, serviceNameInterval;

    // Start typing animations for each field
    if (formData.password) {
      passwordInterval = simulateTyping(formData.password, setDisplayedPassword);
    }
    if (formData.fullName) {
      fullNameInterval = simulateTyping(formData.fullName, setDisplayedFullName);
    }
    if (formData.petName) {
      petNameInterval = simulateTyping(formData.petName, setDisplayedPetName);
    }
    if (formData.birthdate) {
      birthdateInterval = simulateTyping(formData.birthdate, setDisplayedBirthdate);
    }
    if (formData.serviceName) {
      serviceNameInterval = simulateTyping(formData.serviceName, setDisplayedServiceName);
    }

    // Cleanup intervals on unmount
    return () => {
      clearInterval(passwordInterval);
      clearInterval(fullNameInterval);
      clearInterval(petNameInterval);
      clearInterval(birthdateInterval);
      clearInterval(serviceNameInterval);
    };
  }, [formData]);

  return (
    <div className="keylogger container mt-5">
      <h2>Simulated Keylogger Output:</h2>
      <div className="mb-3">
        <strong>Password: </strong>
        <span className="typewriter-text">{displayedPassword}</span>
      </div>
      <div className="mb-3">
        <strong>Full Name: </strong>
        <span className="typewriter-text">{displayedFullName}</span>
      </div>
      <div className="mb-3">
        <strong>Pet Name: </strong>
        <span className="typewriter-text">{displayedPetName}</span>
      </div>
      <div className="mb-3">
        <strong>Birthdate: </strong>
        <span className="typewriter-text">{displayedBirthdate}</span>
      </div>
      <div className="mb-3">
        <strong>Service Name: </strong>
        <span className="typewriter-text">{displayedServiceName}</span>
      </div>
      <p className="text-danger">
        ⚠️ This is a simulation—no data is stored!
      </p>
    </div>
  );
};

export default KeyloggerDisplay;