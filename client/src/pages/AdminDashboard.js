import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Grid, Card } from "@mui/material";

// register needed components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function AdminDashboard() {

  const [stats, setStats] = useState({
    totalChurches: 0,
    totalLands: 0,
    totalDocuments: 0,
    recentChurches: []
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {

    const res = await axios.get("http://localhost:5000/api/dashboard/stats");

    setStats(res.data);
  };

  // prepare chart data using stats
  const chartData = {
    labels: ["Churches", "Lands", "Documents"],
    datasets: [
      {
        label: "Estate Statistics",
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        data: [
          stats.totalChurches,
          stats.totalLands,
          stats.totalDocuments,
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Estate Overview" },
    },
  };

  return (

    <div>

      <h1>Admin Dashboard</h1>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card style={{ padding: "1rem" }}>
            <h2>Total Churches</h2>
            <p>{stats.totalChurches}</p>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card style={{ padding: "1rem" }}>
            <h2>Total Lands</h2>
            <p>{stats.totalLands}</p>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card style={{ padding: "1rem" }}>
            <h2>Total Documents</h2>
            <p>{stats.totalDocuments}</p>
          </Card>
        </Grid>
      </Grid>

      {/* chart */}
      <div style={{ maxWidth: 600, margin: "2rem auto" }}>
        <Bar data={chartData} options={options} />
      </div>

      <h2>Recent Churches</h2>

      {stats.recentChurches.map((church) => (

        <div key={church._id}>
          <p>{church.churchName} - {church.location}</p>
        </div>

      ))}

    </div>

  );
}

export default AdminDashboard;