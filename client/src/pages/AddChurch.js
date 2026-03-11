import React, { useState } from "react";
import axios from "axios";

function AddChurch() {
  const [church, setChurch] = useState({
    churchName: "",
    district: "",
    location: "",
    yearStarted: "",
    churchStatus: ""
  });

  const handleChange = (e) => {
    setChurch({
      ...church,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/churches/add", church);

    alert("Church added successfully");
  };

  return (
    <div>
      <h2>Add Church</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="churchName"
          placeholder="Church Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="district"
          placeholder="District"
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />

        <input
          type="number"
          name="yearStarted"
          placeholder="Year Started"
          onChange={handleChange}
        />

        <input
          type="text"
          name="churchStatus"
          placeholder="Church Status"
          onChange={handleChange}
        />

        <button type="submit">Save</button>

      </form>
    </div>
  );
}

export default AddChurch;
