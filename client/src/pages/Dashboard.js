import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Link to="/admin-dashboard">
        <button>Admin Dashboard</button>
      </Link>
    </div>
  );
};

export default Dashboard;