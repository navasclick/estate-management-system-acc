import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AddChurch from "./pages/AddChurch";
import Churches from "./pages/Churches";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-church" element={<AddChurch />} />
        <Route path="/churches" element={<Churches />} />
      </Routes>
    </Router>
  );
}

export default App;
