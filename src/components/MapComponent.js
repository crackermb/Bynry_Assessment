import React, { useEffect, useRef, useState } from "react";

function MapComponent({ address }) {
  const mapRef = useRef(null);
  const [coordinates, setCoordinates] = useState({ lat: 37.7749, lng: -122.4194 }); // Default coordinates (San Francisco)

  useEffect(() => {
    const loadMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: coordinates,
        zoom: 10,
      });

      const geocoder = new window.google.maps.Geocoder();

      // Geocode the address to get the coordinates
      geocoder.geocode({ address }, (results, status) => {
        if (status === "OK") {
          const location = results[0].geometry.location;
          setCoordinates({ lat: location.lat(), lng: location.lng() });

          // Set the map center to the geocoded address
          map.setCenter(location);

          // Place a marker at the address
          new window.google.maps.Marker({
            map,
            position: location,
          });
        } else {
          console.error("Geocode was not successful: " + status);
        }
      });
    };

    // Load Google Maps script if not already loaded
    if (!window.google || !window.google.maps) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCt2h7TE8lmX-Nbhoj6gugArkDdCbfsAR4&callback=initMap`;
      script.async = true;
      document.body.appendChild(script);
      script.onload = loadMap;
    } else {
      loadMap();
    }
  }, [address, coordinates]); // Update map when address or coordinates change

  return <div ref={mapRef} style={{ height: "400px", width: "100%" }}></div>;
}

export default MapComponent;
