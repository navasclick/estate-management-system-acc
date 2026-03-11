import React, { useState } from "react";
import axios from "axios";

function UploadDocuments() {

  const [files, setFiles] = useState({});
  const [trusteeSigned, setTrusteeSigned] = useState(false);
  const [deposited, setDeposited] = useState(false);

  const handleFileChange = (e) => {
    setFiles({
      ...files,
      [e.target.name]: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("titleCertificate", files.titleCertificate);
    formData.append("indenture", files.indenture);
    formData.append("sitePlan", files.sitePlan);
    formData.append("trusteeSigned", trusteeSigned);
    formData.append("depositedAtConference", deposited);

    await axios.post(
      "http://localhost:5000/api/documents/upload",
      formData
    );

    alert("Documents uploaded successfully");
  };

  return (
    <div>

      <h2>Upload Land Documents</h2>

      <form onSubmit={handleSubmit}>

        <p>Land Title Certificate</p>
        <input type="file" name="titleCertificate" onChange={handleFileChange} />

        <p>Indenture</p>
        <input type="file" name="indenture" onChange={handleFileChange} />

        <p>Site Plan</p>
        <input type="file" name="sitePlan" onChange={handleFileChange} />

        <p>Trustee Signed</p>
        <input type="checkbox" onChange={(e)=>setTrusteeSigned(e.target.checked)} />

        <p>Deposited at Conference</p>
        <input type="checkbox" onChange={(e)=>setDeposited(e.target.checked)} />

        <button type="submit">Upload</button>

      </form>

    </div>
  );
}

export default UploadDocuments;