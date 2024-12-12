import React, { useState } from "react";
import MapComponent from "./MapComponent";  // Assuming MapComponent is in the same directory

function AdminDashboard({ profiles, addProfile, updateProfile, deleteProfile }) {
  const [newProfile, setNewProfile] = useState({
    name: "",
    description: "",
    address: "",
    email: "",
  });
  const [editingProfile, setEditingProfile] = useState(null); // Track the profile being edited
  const [selectedProfile, setSelectedProfile] = useState(null); // Track profile for map display

  // Handle adding a new profile
  const handleAddProfile = () => {
    if (newProfile.name && newProfile.description && newProfile.address && newProfile.email) {
      addProfile(newProfile);
      setNewProfile({ name: "", description: "", address: "", email: "" });
    }
  };

  // Handle updating a profile
  const handleUpdateProfile = () => {
    if (editingProfile && editingProfile.name && editingProfile.description && editingProfile.address && editingProfile.email) {
      updateProfile(editingProfile);
      setEditingProfile(null); // Exit edit mode
    }
  };

  // Handle the "Summary" button click
  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile); // Set the selected profile to show its map
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <form className="mb-3">
        <div className="mb-2">
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            value={editingProfile ? editingProfile.name : newProfile.name}
            onChange={(e) =>
              editingProfile
                ? setEditingProfile({ ...editingProfile, name: e.target.value })
                : setNewProfile({ ...newProfile, name: e.target.value })
            }
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            placeholder="Description"
            className="form-control"
            value={editingProfile ? editingProfile.description : newProfile.description}
            onChange={(e) =>
              editingProfile
                ? setEditingProfile({ ...editingProfile, description: e.target.value })
                : setNewProfile({ ...newProfile, description: e.target.value })
            }
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            placeholder="Address"
            className="form-control"
            value={editingProfile ? editingProfile.address : newProfile.address}
            onChange={(e) =>
              editingProfile
                ? setEditingProfile({ ...editingProfile, address: e.target.value })
                : setNewProfile({ ...newProfile, address: e.target.value })
            }
          />
        </div>
        <div className="mb-2">
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            value={editingProfile ? editingProfile.email : newProfile.email}
            onChange={(e) =>
              editingProfile
                ? setEditingProfile({ ...editingProfile, email: e.target.value })
                : setNewProfile({ ...newProfile, email: e.target.value })
            }
          />
        </div>
        {editingProfile ? (
          <button type="button" className="btn btn-warning" onClick={handleUpdateProfile}>
            Update Profile
          </button>
        ) : (
          <button type="button" className="btn btn-success" onClick={handleAddProfile}>
            Add Profile
          </button>
        )}
      </form>

      {/* Display Profile Table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Address</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile) => (
            <tr key={profile.id}>
              <td>{profile.id}</td>
              <td>{profile.name}</td>
              <td>{profile.description}</td>
              <td>{profile.address}</td>
              <td>{profile.email}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => setEditingProfile(profile)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteProfile(profile.id)}
                >
                  Delete
                </button>
                {/* Summary Button */}
                <button
                  className="btn btn-info btn-sm"
                  onClick={() => handleSummaryClick(profile)}
                >
                  Summary
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Show MapComponent if a profile is selected */}
      {selectedProfile && (
        <div>
          <h3>Location of {selectedProfile.name}</h3>
          <MapComponent address={selectedProfile.address} />
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
