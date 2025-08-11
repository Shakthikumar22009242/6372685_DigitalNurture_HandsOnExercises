import React, { useState } from "react";

function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!employeeName || !complaint) {
      alert("Please fill out all fields.");
      return;
    }

    // Generate reference number
    const referenceNumber = "REF" + Math.floor(100000 + Math.random() * 900000);

    alert(`Complaint Registered!\nReference Number: ${referenceNumber}`);

    // Reset form
    setEmployeeName("");
    setComplaint("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
      <h2>Register Complaint</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>Employee Name:</label>
        <input
          type="text"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Complaint:</label>
        <textarea
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          rows="4"
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        ></textarea>
      </div>

      <button type="submit" style={{ padding: "8px 16px" }}>
        Submit
      </button>
    </form>
  );
}

export default ComplaintRegister;
