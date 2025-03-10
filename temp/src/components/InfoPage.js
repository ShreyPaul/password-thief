// src/components/InfoPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const InfoPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-4">Password Security Guidelines</h1>
          <div className="list-group">
            <div className="list-group-item list-group-item-action">
              Use passwords between <strong>15 and 64 characters</strong>.
            </div>
            <div className="list-group-item list-group-item-action">
              Avoid personal info (name, pet, birthdate).
            </div>
            <div className="list-group-item list-group-item-action">
              Never reuse passwords across accounts.
            </div>
            <div className="list-group-item list-group-item-action">
              Use passphrases (e.g., "purple elephant runs fast").
            </div>
          </div>
          <button 
            className="btn btn-primary btn-lg w-100 mt-4"
            onClick={() => navigate('/form')}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;