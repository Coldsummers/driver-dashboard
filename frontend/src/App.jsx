import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./pages/Registration/RegistrationForm";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;