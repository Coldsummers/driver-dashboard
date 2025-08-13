import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TruckTypeDropdown from "./TruckTypeDropdown";
import FileUpload from "./FileUpload";
import axios from "axios";
import "./registration.css";

const RegistrationForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    truckType: "",
    document: null,
    profilePic: null,
  });
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (file) => {
    setForm({ ...form, document: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", form.fullName);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("truckType", form.truckType);
    formData.append("profilePic", form.profilePic);
    formData.append("document", form.document);

    const res = await axios.post(`${apiUrl}/api/drivers`, formData);
    navigate(`/dashboard/${res.data._id}`);
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>Driver Registration</h2>
      <label>
        Full Name
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          required
          placeholder="Full Name"
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Enter Email"
        />
      </label>
      <label>
        Phone Number
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          placeholder="Enter Phone Number"
        />
      </label>
      <label>
        Truck Type
        <TruckTypeDropdown
          value={form.truckType}
          onChange={(value) => setForm({ ...form, truckType: value })}
        />
      </label>
      <label>
        Upload Profile Picture
        <FileUpload onFileChange={(file) => setForm({ ...form, profilePic: file })} />
      </label>
      <label>
        Upload ID/Truck Document
        <FileUpload onFileChange={(file) => setForm({ ...form, document: file })} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;