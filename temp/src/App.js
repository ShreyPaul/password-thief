// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import InfoPage from './components/InfoPage';
import InputForm from './components/InputForm';
import KeyloggerDisplay from './components/KeyLoggerDisplay';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Bootstrap Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link to="/" className="navbar-brand">
              Password Awareness Tool
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/form" className="nav-link">
                    Input Form
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/results" className="nav-link">
                    Keylogger Results
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content Container */}
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<InfoPage />} />
            <Route path="/form" element={<InputForm />} />
            <Route path="/results" element={<KeyloggerDisplay />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;