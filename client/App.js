import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddLand from './pages/AddLand';
import UploadDocuments from './pages/UploadDocuments';
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import LandMap from "./pages/LandMap";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div>
              <h1>Estate Management System</h1>
              <Link to="/add-land">
                <button>Add Land</button>
              </Link>
            </div>
          } />
          <Route path="/add-land" element={<AddLand />} />
          <Route path="/upload-documents" element={<UploadDocuments />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/land-map" element={<LandMap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
