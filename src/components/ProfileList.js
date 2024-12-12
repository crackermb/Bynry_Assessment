import React, { useState } from "react";

function ProfileList({ profiles }) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter profiles based on the search query
  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.email.toLowerCase().includes(searchQuery.toLowerCase())  // Search by email
  );

  return (
    <div>
      <h2>Profile List</h2>

      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search profiles by name, description, address, or email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Profile Table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Description</th>
            <th>Address</th>
            <th>Email</th> {/* Display email */}
          </tr>
        </thead>
        <tbody>
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map((profile) => (
              <tr key={profile.id}>
                <td>{profile.id}</td>
                <td>{profile.name}</td>
                <td>{profile.description}</td>
                <td>{profile.address}</td>
                <td>{profile.email}</td> {/* Display email */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No profiles found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProfileList;
