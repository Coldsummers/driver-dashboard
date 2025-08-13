import React from "react";

const truckTypes = [
  "Flatbed",
  "Refrigerated",
  "Box Truck",
  "Tanker",
  "Car Carrier",
];

const TruckTypeDropdown = ({ value, onChange }) => (
  <select
    name="truckType"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    required
  >
    <option >
      Select Truck Type
    </option>
    {truckTypes.map((type) => (
      <option key={type} value={type}>
        {type}
      </option>
    ))}
  </select>
);

export default TruckTypeDropdown;