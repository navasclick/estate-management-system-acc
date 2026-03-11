import React, { useEffect, useState } from "react";
import axios from "axios";

function Churches() {
  const [churches, setChurches] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchChurches();
  }, []);

  const fetchChurches = async () => {
    const res = await axios.get("http://localhost:5000/api/churches");
    setChurches(res.data);
  };

  const searchChurch = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/church/search?keyword=${search}`
    );
    setChurches(res.data);
  };

  return (
    <div>
      <h2>Church List</h2>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Search Church"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchChurch}>Search</button>
      </div>

      {churches.map((church) => (
        <div key={church._id}>
          <h3>{church.churchName}</h3>
          <p>{church.district}</p>
          <p>{church.location}</p>
        </div>
      ))}
    </div>
  );
}

export default Churches;
