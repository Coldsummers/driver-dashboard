import React from "react";
import "./dashboard.css";

const DriverInfo = ({ name, truckType, phone, profilePic }) => (
  <div className="driver-info">
    <img
      src={profilePic}
      alt="Driver Profile"
      className="profile-pic"
    />
    <h2>Driver Details</h2>
    <div>
      <strong>Name:</strong> {name}
    </div>
    <div>
      <strong>Truck Type:</strong> {truckType}
    </div>
    <div>
      <strong>Phone:</strong> {phone}
    </div>
  </div>
);

export default DriverInfo;