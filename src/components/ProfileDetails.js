import React from "react";
import MapComponent from "./MapComponent";

const dummyProfiles = [
  { id: 1, name: "John Doe", description: "Web Developer", address: "Mountain View, CA", contact: "john@example.com" },
  { id: 2, name: "Jane Smith", description: "Software Designer", address: "Cupertino, CA", contact: "jane@example.com" },
  { id: 3, name: "Mehul", description: "Developer", address: "Pune, India", contact: "mehul@example.com" },
];

function ProfileDetails() {
  const profile = dummyProfiles[0]; // For demonstration, using the first profile

  return (
    <div>
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <p>Contact: {profile.contact}</p>
      <p>Address: {profile.address}</p>
      
      {/* Integrating the MapComponent here */}
      <MapComponent address={profile.address} />
    </div>
  );
}

export default ProfileDetails;
