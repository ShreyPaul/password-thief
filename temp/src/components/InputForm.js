import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InputForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: '',
    fullName: '',
    petName: '',
    birthdate: '',
    serviceName: ''
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(`Key pressed: ${value.slice(-1)}`); // Simulate keylogging
  };

  const handleSubmit = () => {
    // Pass formData as state to the results route
    navigate('/results', { state: { formData } }); 
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Enter Your Information</h2>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter password"
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              placeholder="Full Name"
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Pet Name</label>
            <input
              type="text"
              className="form-control"
              name="petName"
              placeholder="Pet Name"
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Birthdate</label>
            <input
              type="text"
              className="form-control"
              name="birthdate"
              placeholder="YYYY-MM-DD"
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Service Name</label>
            <input
              type="text"
              className="form-control"
              name="serviceName"
              placeholder="Service Name (e.g., BankOfAmerica)"
              onChange={handleInput}
            />
          </div>
          <button 
            className="btn btn-primary btn-lg w-100"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputForm;