import React, { useState } from "react";
import axios from "axios";

function AddLand() {

  const [land, setLand] = useState({
    purpose: "",
    length: "",
    width: "",
    acreage: "",
    acquisitionType: "",
    acquisitionDate: "",
    leaseDuration: "",
    expiryDate: "",
    paidBy: ""
  });
  const [imageFile, setImageFile] = useState(null);


  const handleChange = (e) => {
    setLand({
      ...land,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(land).forEach(([key, value]) => {
      formData.append(key, value);
    });
    if (imageFile) {
      formData.append("image", imageFile);
    }

    await axios.post("http://localhost:5000/api/lands/add", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    alert("Land added successfully");
  };

  return (
    <div>

      <h2>Add Land / Plot</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="purpose"
          placeholder="Purpose (Church / School / Hospital)"
          onChange={handleChange}
        />

        <input
          name="length"
          placeholder="Length"
          onChange={handleChange}
        />

        <input
          name="width"
          placeholder="Width"
          onChange={handleChange}
        />

        <input
          name="acreage"
          placeholder="Acreage"
          onChange={handleChange}
        />

        <input
          name="acquisitionType"
          placeholder="Acquisition Type (Purchase / Lease / Gift)"
          onChange={handleChange}
        />

        <input
          type="date"
          name="acquisitionDate"
          onChange={handleChange}
        />

        <input
          name="leaseDuration"
          placeholder="Lease Duration (Years)"
          onChange={handleChange}
        />

        <input
          type="date"
          name="expiryDate"
          onChange={handleChange}
        />

        <input
          name="paidBy"
          placeholder="Paid By"
          onChange={handleChange}
        />

        <div>
          <label>Image/photo (optional): </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
        </div>

        <button type="submit">Save Land</button>

      </form>

    </div>
  );
}

export default AddLand;