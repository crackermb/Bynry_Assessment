import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import ProfileList from "./components/ProfileList";

function App() {
  const [profiles, setProfiles] = useState([
    { id: 1, name: "John Doe", description: "Web Developer", address: "Mountain View, CA" },
    { id: 2, name: "Jane Smith", description: "Graphic Designer", address: "Cupertino, CA" },
  ]);

  // Add a profile
  const addProfile = (newProfile) => {
    setProfiles([...profiles, { id: profiles.length + 1, ...newProfile }]);
  };

  // Update a profile
  const updateProfile = (updatedProfile) => {
    setProfiles(profiles.map((profile) => (profile.id === updatedProfile.id ? updatedProfile : profile)));
  };

  // Delete a profile
  const deleteProfile = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <Link className="navbar-brand" to="/">Profile App</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profiles">Profile List</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">Admin Dashboard</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<ProfileList profiles={profiles} />} />
            <Route path="/profiles" element={<ProfileList profiles={profiles} />} />
            <Route path="/admin" element={<AdminDashboard profiles={profiles} addProfile={addProfile} updateProfile={updateProfile} deleteProfile={deleteProfile} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
