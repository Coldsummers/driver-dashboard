import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import "./dashboard.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [driverDetails, setDriverDetails] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    axios.get(`${apiUrl}/api/drivers/${id}`)
      .then(response => {
        console.log(response.data);
        setDriverDetails(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the driver details!", error);
      });
  }, [id]);

  if (!driverDetails) {
    return <div>Loading...</div>;
  }

  // Prepare documents array from driverDetails
  const documents = driverDetails.document
    ? [{ name: driverDetails.document, url: `/uploads/${driverDetails.document}` }]
    : [];

  const apiUrl = import.meta.env.VITE_API_URL;

  return (
    <div className="dashboard-container">
      <div className="driver-info">
        <button
          className="back-btn"
          onClick={() => navigate("/register")}
          aria-label="Back to Registration"
        >
          <FaArrowLeft size={20} style={{ marginRight: "8px" }} />
          Back
        </button>
        <img
          src={
            driverDetails.profilePic
              ? `${apiUrl}/uploads/${driverDetails.profilePic}`
              : "/Images/default-profile.png"
          }
          alt="Driver Profile"
          className="profile-pic"
        />
        <h2>Driver Details</h2>
        <div>
          <strong>Name:</strong> {driverDetails.fullName}
        </div>
        <div>
          <strong>Truck Type:</strong> {driverDetails.truckType}
        </div>
        <div>
          <strong>Phone:</strong> {driverDetails.phone}
        </div>
      </div>
      <img
        src={
          driverDetails.document
            ? `${apiUrl}/uploads/${driverDetails.document}`
            : "/Images/flatbed_truck.webp"
        }
        alt="Truck"
        className="truck-pic"
      />
    </div>
  );
}

export default Dashboard;